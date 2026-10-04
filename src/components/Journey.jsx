import SectionHead from './SectionHead.jsx'
import { journey } from '../data/content.js'

export default function Journey() {
  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead number="04" title="Journey" titleId="journey-title" />

        <p className="type-body text-ink-soft dark:text-night-muted max-w-[54ch]">
          {journey.description}
        </p>

        <ul className="mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-line dark:border-night-line">
          {journey.categories.map((category, i) => (
            <li
              key={category}
              className="py-7 pr-4 border-b border-line dark:border-night-line lg:border-b-0 lg:border-r lg:last:border-r-0 lg:px-6 lg:first:pl-0"
            >
              <span className="type-label text-ink-muted dark:text-night-faint tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-ink dark:text-night-fg">{category}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 type-caption text-ink-muted dark:text-night-faint italic max-w-[46ch]">
          Arsip ini masih kosong. Catatan akan ditambahkan seiring waktu, ketika
          memang ada yang layak dicatat.
        </p>
      </div>
    </section>
  )
}
