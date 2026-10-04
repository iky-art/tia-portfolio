import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme.js'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'activities', label: 'Activities' },
  { id: 'writing', label: 'Writing' },
  { id: 'journey', label: 'Journey' },
]

export default function Header() {
  const { dark, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  // Sorot section yang sedang dilihat
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sections = NAV_ITEMS
      .map(item => document.getElementById(item.id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-paper dark:bg-night border-b border-line dark:border-night-line">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-14">
          <a
            href="#main"
            className="type-label text-ink-soft dark:text-night-muted hover:text-ink dark:hover:text-night-fg transition-colors"
            aria-label="Nur Mufhtiah Al Jannati — kembali ke atas"
          >
            NMAJ
          </a>

          <nav className="hidden md:flex items-center gap-7" aria-label="Navigasi utama">
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link nav-label transition-colors ${
                  active === item.id
                    ? 'text-ink dark:text-night-fg'
                    : 'text-ink-muted dark:text-night-faint hover:text-ink dark:hover:text-night-fg'
                }`}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggle}
              className="p-2.5 text-ink-muted dark:text-night-faint hover:text-ink dark:hover:text-night-fg transition-colors"
              aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            >
              {dark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(o => !o)}
              className={`md:hidden p-2.5 text-ink-muted dark:text-night-faint hover:text-ink dark:hover:text-night-fg transition-colors ${menuOpen ? 'hamburger-open' : ''}`}
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line className="hamburger-line hamburger-line-top" x1="3" y1="5.5" x2="17" y2="5.5" />
                <line className="hamburger-line hamburger-line-middle" x1="3" y1="12" x2="17" y2="12" />
                <line className="hamburger-line hamburger-line-bottom" x1="3" y1="18.5" x2="17" y2="18.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden mobile-menu absolute -z-10 top-14 left-0 right-0 bg-paper dark:bg-night border-b border-line dark:border-night-line ${
          menuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto max-w-5xl px-5 sm:px-8 py-3" aria-label="Navigasi mobile">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3.5 menu-label text-ink-soft dark:text-night-muted hover:text-accent dark:hover:text-night-accent transition-colors border-b border-line dark:border-night-line last:border-b-0"
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
