// Render test: memastikan tiap route benar-benar merender konten yang diharapkan.
// Dijalankan lewat Vite SSR — tidak butuh browser.
import { createServer } from 'vite'
import { renderToStaticMarkup } from 'react-dom/server'
import React from 'react'

const store = new Map()
globalThis.localStorage = {
  getItem: k => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: k => store.delete(k),
}
globalThis.window = {
  location: { hash: '#/' },
  matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
  addEventListener() {},
  removeEventListener() {},
  scrollTo() {},
}
globalThis.document = {
  documentElement: { classList: { add() {}, toggle() {}, remove() {} }, setAttribute() {}, getAttribute: () => 'light' },
  body: { style: {} },
  getElementById: () => null,
}

const vite = await createServer({
  root: process.cwd(),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

let failures = 0
const check = (label, cond) => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}`)
  if (!cond) failures++
}

const { default: App } = await vite.ssrLoadModule('/src/App.jsx')

const render = hash => {
  globalThis.window.location.hash = hash
  return renderToStaticMarkup(React.createElement(App))
}

// --- Route: home ---
const home = render('#/')
check('home: merender H1 nama', home.includes('Nur Mufhtiah') && home.includes('Al Jannati'))
check('home: satu H1', (home.match(/<h1/g) || []).length === 1)
check('home: section about ada', home.includes('id="about"'))
check('home: section activities ada', home.includes('id="activities"'))
check('home: section writing ada', home.includes('id="writing"'))
check('home: section journey ada', home.includes('id="journey"'))
check('home: empty state writing tampil', home.includes('Beberapa cerita masih menunggu untuk dituliskan'))
check('home: tidak ada artikel palsu', !home.includes('Artikel') && !home.includes('Baca selengkapnya'))
check('home: footer tagline', home.includes('Documenting a journey, one page at a time'))
check('home: copyright 2026', home.includes('© 2026 Nur Mufhtiah Al Jannati'))
check('home: nav 4 item', ['about', 'activities', 'writing', 'journey'].every(s => home.includes(`#${s}`)))
check('home: tidak ada href kosong', !home.includes('href="#"'))
check('home: tagline hero', home.includes('Student · Paskibra · Writing'))

// --- Route: 404 ---
const nf = render('#/halaman-tidak-ada')
check('404: menampilkan pesan error', nf.includes('Halaman ini tidak ada'))
check('404: tidak merender konten home', !nf.includes('id="activities"'))
check('404: ada tautan kembali', nf.includes('#/'))

// --- Konten jujur: tidak ada data karangan ---
const allForbidden = [
  'lorem', 'Lorem', 'TODO', 'FIXME', 'XXX',
  'Instagram', 'TikTok', 'Facebook', 'Twitter', '@',
]
const forbiddenFound = allForbidden.filter(t => home.includes(t))
check(`konten: tidak ada data karangan/sosial (${forbiddenFound.join(', ') || 'bersih'})`, forbiddenFound.length === 0)

const fakeNumbers = home.match(/\b\d+\s*(followers|penghargaan|prestasi|juara|rangking|ranking)\b/i)
check('konten: tidak ada klaim angka palsu', !fakeNumbers)

await vite.close()

console.log(`\n${failures === 0 ? 'SEMUA LOLOS' : failures + ' GAGAL'}`)
process.exit(failures === 0 ? 0 : 1)
