import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead number="01" title="Sedikit Tentang Saya" titleId="about-title" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <p className="type-heading text-ink dark:text-night-fg">
              Nama saya
              <br />
              Nur Mufhtiah
              <br />
              Al Jannati.
            </p>
          </div>

          <div className="md:col-span-7 space-y-5 type-body text-ink-soft dark:text-night-muted">
            <p>
              Saya seorang siswi di MAN 1 Pamekasan. Sehari-hari saya menjalani
              rutinitas sekolah seperti umumnya, dan di luar jam belajar saya
              aktif dalam organisasi Paskibra.
            </p>
            <p>
              Paskibra mengajarkan saya banyak hal tentang kedisiplinan, kerja
              sama, dan tanggung jawab — hal-hal yang saya bawa juga dalam
              kegiatan sehari-hari.
            </p>
            <p>
              Di luar itu, saya memiliki ketertarikan pada dunia menulis. Saya
              senang menuangkan pikiran dan pengalaman ke dalam tulisan, meski
              masih dalam proses belajar dan berkembang.
            </p>
            <p>
              Website ini adalah ruang kecil yang saya gunakan untuk
              mendokumentasikan perjalanan tersebut.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
