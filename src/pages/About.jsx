import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  const timeline = [
    {
      baslik: t('about.exp1_baslik'),
      tarih: '2024',
      aciklama: t('about.exp1_aciklama'),
      teknolojiler: ['React', 'Node.js', 'PostgreSQL'],
      dolu: true,
    },
    {
      baslik: t('about.exp2_baslik'),
      tarih: '2023',
      aciklama: t('about.exp2_aciklama'),
      teknolojiler: ['Java', 'Android Studio', 'XML'],
      dolu: false,
    },
    {
      baslik: t('about.exp3_baslik'),
      tarih: '2023',
      aciklama: t('about.exp3_aciklama'),
      teknolojiler: ['IoT', 'C', 'Embedded'],
      dolu: false,
    },
    {
      baslik: t('about.exp4_baslik'),
      tarih: '2024',
      aciklama: t('about.exp4_aciklama'),
      teknolojiler: ['Backend', t('about.exp4_tech2'), t('about.exp4_tech3')],
      dolu: false,
    },
  ]

  return (
    <div className="page-transition pt-24 pb-20">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        {/* ── HERO ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-32">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#00f0ff]" />
              <span className="font-mono text-xs text-[#00f0ff] tracking-[0.2em]">{t('about.etiket')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              {t('about.baslik1')}
              <br />
              <span className="text-[#00f0ff]">{t('about.baslik2')}</span>
              <br />
              {t('about.baslik3')}
            </h1>

            <p className="text-[#7a9ab8] text-base md:text-lg leading-relaxed mb-6">
              {t('about.bio1')}
            </p>

            <p className="text-[#7a9ab8] text-base md:text-lg leading-relaxed mb-6">
              {t('about.bio2')}
            </p>

            <p className="text-[#7a9ab8] text-base md:text-lg leading-relaxed">
              {t('about.bio3')}
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="w-64 md:w-72 h-72 md:h-80 border-2 border-[#00f0ff]/20 bg-[#0a1628] flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-5xl mb-4">👻</div>
                <div className="font-mono text-xs text-[#3a5a72]">{t('about.foto')}</div>
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff]" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff]" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#00f0ff]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#00f0ff]" />
            </div>
          </div>
        </div>

        {/* ── TECH STACK ── */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-px bg-[#00f0ff]" />
            <h2 className="text-3xl font-bold">
              <span className="text-[#00f0ff]">{t('about.techbaslik')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0a1628] border border-[#00f0ff]/10 p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest mb-5">FRONTEND</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 border border-cyan-500/30 text-cyan-400 bg-cyan-500/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0a1628] border border-[#00f0ff]/10 p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest mb-5">BACKEND</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Spring Boot', 'C', 'Java', 'REST API'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 border border-violet-500/30 text-violet-400 bg-violet-500/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0a1628] border border-[#00f0ff]/10 p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest mb-5">{t('about.db_kategori')}</h3>
              <div className="flex flex-wrap gap-3">
                {['PostgreSQL', 'Redis', 'MongoDB', 'MySQL'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 border border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0a1628] border border-[#00f0ff]/10 p-6 hover:border-[#00f0ff]/30 transition-all">
              <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest mb-5">{t('about.diger_kategori')}</h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'Docker', 'Android', 'IoT', 'AI/ML', t('about.exp4_tech2')].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 border border-amber-500/30 text-amber-400 bg-amber-500/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TİMLİNE ── */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-px bg-[#00f0ff]" />
            <h2 className="text-3xl font-bold">
              <span className="text-[#00f0ff]">{t('about.deneyimbaslik')}</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff] via-[#00f0ff]/30 to-transparent" />

            <div className="space-y-12 pl-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div
                    className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ${
                      item.dolu
                        ? 'bg-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.8)]'
                        : 'bg-[#0a1628] border-2 border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                    }`}
                  />

                  <div className="bg-[#0a1628] border border-[#00f0ff]/10 p-6 hover:border-[#00f0ff]/30 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-[#d4e4fa]">{item.baslik}</h3>
                      <span className="font-mono text-xs text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 shrink-0 ml-4">
                        {item.tarih}
                      </span>
                    </div>
                    <p className="text-[#7a9ab8] text-sm leading-relaxed mb-4">{item.aciklama}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.teknolojiler.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2 py-1 border border-[#00f0ff]/20 text-[#00f0ff]/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
