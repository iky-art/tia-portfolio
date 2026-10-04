export default function NotFound({ onHome }) {
  return (
    <main id="main" className="pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="type-label text-ink-muted dark:text-night-faint mb-6">
          Error 404
        </p>

        <h1 className="type-display text-ink dark:text-night-fg max-w-[14ch]">
          Halaman ini tidak ada.
        </h1>

        <p className="mt-8 type-body text-ink-soft dark:text-night-muted max-w-[52ch]">
          Alamat yang Anda buka tidak ditemukan. Mungkin tautannya salah, atau
          halaman ini memang belum pernah ada.
        </p>

        <div className="mt-10">
          <a
            href="#/"
            onClick={e => { e.preventDefault(); onHome() }}
            className="type-label text-ink dark:text-night-fg link-underline py-1"
          >
            Kembali ke halaman utama
          </a>
        </div>
      </div>
    </main>
  )
}
