export default function SectionHead({ number, title, titleId }) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="type-label text-ink-muted dark:text-night-faint mb-4">
        {number} — {title.toUpperCase()}
      </p>
      <h2 id={titleId} className="type-heading text-ink dark:text-night-fg">
        {title}
      </h2>
      <hr className="hr mt-6" />
    </div>
  )
}
