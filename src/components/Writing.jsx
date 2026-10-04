import SectionHead from './SectionHead.jsx'
import { writing } from '../data/content.js'

export default function Writing({ posts = [] }) {
  return (
    <section id="writing" className="section" aria-labelledby="writing-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead number="03" title="Menulis" titleId="writing-title" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <p className="type-body text-ink-soft dark:text-night-muted">
              {writing.description}
            </p>
          </div>

          <div className="md:col-span-8">
            {posts.length > 0 ? (
              <ul className="divide-y divide-line dark:divide-night-line border-t border-b border-line dark:border-night-line">
                {posts.map(post => (
                  <li key={post.id}>
                    <a
                      href={post.link}
                      className="group block py-5 hover:bg-paper-warm dark:hover:bg-night-surface transition-colors -mx-3 px-3"
                    >
                      <p className="type-label text-ink-muted dark:text-night-faint mb-2">
                        {post.category}{post.date ? ` · ${post.date}` : ''}
                      </p>
                      <h3 className="text-lg font-semibold tracking-tight text-ink dark:text-night-fg group-hover:text-accent dark:group-hover:text-night-accent transition-colors">
                        {post.title}
                      </h3>
                      {post.description && (
                        <p className="mt-1.5 type-caption text-ink-soft dark:text-night-muted">
                          {post.description}
                        </p>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="border-t border-line dark:border-night-line pt-10 pb-6">
                <p className="type-heading text-ink-muted dark:text-night-faint max-w-[24ch]">
                  {writing.emptyMessage}
                </p>
                <p className="mt-6 type-caption text-ink-muted dark:text-night-faint max-w-[48ch]">
                  Ruang ini disiapkan untuk tulisan-tulisan berikutnya. Setiap
                  tulisan akan muncul di sini begitu siap dibagikan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
