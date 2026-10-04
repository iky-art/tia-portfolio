import SectionHead from './SectionHead.jsx'

const ITEMS = [
  {
    index: '01',
    title: 'PASKIBRA',
    category: 'Organisasi',
    description:
      'Aktivitas organisasi yang menjadi bagian dari perjalanan Nur di MAN 1 Pamekasan. Di dalamnya, latihan rutin dan kerja sama tim menjadi bagian dari keseharian.',
    meta: 'Berjalan',
  },
  {
    index: '02',
    title: 'AGENDA & LOMBA',
    category: 'Kegiatan',
    description:
      'Nur pernah mengikuti beberapa agenda dan lomba di berbagai daerah. Setiap kegiatan menjadi pengalaman yang ikut membentuk perjalanannya.',
    meta: 'Beberapa kegiatan',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="section" aria-labelledby="activities-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead number="02" title="Aktivitas" titleId="activities-title" />

        <div className="divide-y divide-line dark:divide-night-line border-t border-line dark:border-night-line">
          {ITEMS.map(item => (
            <article key={item.index} className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <div className="md:col-span-2">
                <p className="type-label text-ink-muted dark:text-night-faint">{item.index}</p>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-ink dark:text-night-fg">
                  {item.title}
                </h3>
                <p className="mt-2 type-caption text-accent dark:text-night-accent">{item.category}</p>
              </div>
              <div className="md:col-span-6">
                <p className="type-body text-ink-soft dark:text-night-muted">{item.description}</p>
                <p className="mt-4 type-label text-ink-muted dark:text-night-faint">{item.meta}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 type-caption text-ink-muted dark:text-night-faint italic">
          Detail kegiatan akan ditambahkan ketika informasinya tersedia.
        </p>
      </div>
    </section>
  )
}
