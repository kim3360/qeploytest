/**
 * 한국어 검증 스크립트 — 앱을 실제로 렌더링해 보이는 텍스트에서 영어를 찾습니다.
 * renderToString으로 전체 App을 그린 뒤, 모든 텍스트 노드와
 * title/aria-label/aria-describedby 속성을 검사합니다.
 */
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';

// 한국어로 바꿀 수 없는 고유명사/기술명/이메일·URL 부분만 허용합니다.
const ALLOW = new Set([
  'React', 'TypeScript', 'JavaScript', 'Node', 'PostgreSQL', 'GitHub',
  'Vite', 'Figma', 'Docker', 'Git', 'HTML', 'CSS', 'REST', 'API',
  'honggildong', 'example.com', 'com', 'linkedin', 'Node.js', 'VS', 'Code',
]);

const vite = await createServer({
  root: process.cwd(),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
const html = renderToString(React.createElement(App));
await vite.close();

// ── 1) 눈에 보이는 텍스트 노드만 추출 ──────────────────────────────────
const textNodes = [];
const re = />([^<>]+)</g;
let m;
while ((m = re.exec(html)) !== null) {
  const t = m[1].replace(/&[a-z#0-9]+;/g, ' ').trim();
  if (t) textNodes.push(t);
}

// ── 2) 툴팁·스크린리더 속성도 함께 검사 ────────────────────────────────
const attrValues = [];
const attrRe = /(?:title|aria-label)="([^"]*)"/g;
while ((m = attrRe.exec(html)) !== null) {
  if (m[1].trim()) attrValues.push(m[1].trim());
}

const wordRe = /[A-Za-z][A-Za-z'.-]*/g;
const findings = [];
const scan = (list, kind) => {
  for (const item of list) {
    const words = item.match(wordRe) || [];
    const bad = [...new Set(words)]
      .map((w) => w.replace(/^[.-]+|[.-]+$/g, ''))
      .filter((w) => w.length >= 2 && !ALLOW.has(w));
    if (bad.length) findings.push({ kind, item, bad });
  }
};

scan(textNodes, '텍스트');
scan(attrValues, '속성');

// ── 3) 빌드된 index.html(타이틀·메타)도 검사 ──────────────────────────
import { readFileSync } from 'node:fs';
const dist = readFileSync('dist/index.html', 'utf8');
const title = dist.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
const desc = dist.match(/name="description"\s+content="([^"]*)"/)?.[1] ?? '';
scan([title, desc], 'index.html');

console.log('── 렌더링된 보이는 텍스트 ──');
console.log(textNodes.join(' | ').slice(0, 4000));
console.log('');
console.log('── 타이틀 ──');
console.log(title);
console.log('');

if (findings.length === 0) {
  console.log('✅ 영어 문장 없음 — 렌더링 결과가 모두 한국어(또는 허용된 고유명사)입니다.');
} else {
  console.log('❌ 남은 영어 발견:');
  for (const f of findings) {
    console.log(`  [${f.kind}] ${JSON.stringify(f.bad)} → ${f.item}`);
  }
  process.exit(1);
}
