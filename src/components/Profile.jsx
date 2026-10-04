import { profile } from '../data/content.js'

const ROWS = [
  { label: 'Nama', value: profile.name },
  { label: 'Status', value: profile.status },
  { label: 'School', value: profile.school },
  { label: 'Activity', value: profile.activity },
  { label: 'Interest', value: profile.interest },
]

export default function Profile() {
  return (
    <section className="section border-t border-line dark:border-night-line" aria-labelledby="profile-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="type-label text-ink-muted dark:text-night-faint mb-6">
              Profil
            </p>
            <h2 id="profile-title" className="type-heading text-ink dark:text-night-fg max-w-[14ch]">
              Ringkasan identitas.
            </h2>
          </div>

          <dl className="lg:col-span-7 border-t border-line dark:border-night-line">
            {ROWS.map(row => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 py-4 border-b border-line dark:border-night-line"
              >
                <dt className="type-label text-ink-muted dark:text-night-faint shrink-0">
                  {row.label}
                </dt>
                <dd className="text-right text-ink dark:text-night-fg">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
