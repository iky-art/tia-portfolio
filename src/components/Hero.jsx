import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="type-label text-ink-muted dark:text-night-faint mb-6">
          Personal Archive
        </p>

        <h1 id="hero-heading" className="type-display text-ink dark:text-night-fg max-w-[16ch]">
          {profile.firstName}{' '}
          <span className="block">{profile.lastName}</span>
        </h1>

        <p className="mt-8 type-label text-accent dark:text-night-accent">
          {profile.tagline}
        </p>

        <p className="mt-8 type-body text-ink-soft dark:text-night-muted max-w-[58ch]">
          {profile.intro}
        </p>

        <nav className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Tautan bagian">
          <a href="#about" className="type-label text-ink dark:text-night-fg link-underline py-1">
            About
          </a>
          <a href="#activities" className="type-label text-ink dark:text-night-fg link-underline py-1">
            Activities
          </a>
        </nav>
      </div>
    </section>
  )
}
