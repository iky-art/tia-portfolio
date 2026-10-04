import { profile } from '../data/content.js'

const CURRENT_YEAR = 2026

export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-night-line">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <p className="type-heading text-ink dark:text-night-fg">
              {profile.name}
            </p>
            <p className="mt-4 type-label text-accent dark:text-night-accent">
              {profile.tagline}
            </p>
          </div>

          <div className="md:col-span-7 md:flex md:flex-col md:items-end md:text-right">
            <p className="type-body text-ink-soft dark:text-night-muted italic">
              &ldquo;{profile.footerTagline}&rdquo;
            </p>
            <p className="mt-6 type-caption text-ink-muted dark:text-night-faint">
              © {CURRENT_YEAR} {profile.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
