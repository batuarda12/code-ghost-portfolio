import { useTranslation } from 'react-i18next'

const PROJELER = [
  {
    id: 1,
    isim: 'SkyBook',
    etiket: 'FEATURED',
    aciklamaKey: 'projects.skybook_aciklama',
    teknolojiler: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    github: '#',
    durum: 'SATILDI',
    buyuk: true,
  },
  {
    id: 2,
    isim: 'PROJE_02',
    etiket: 'YAKINDA',
    aciklamaKey: 'projects.yakinda_aciklama',
    teknolojiler: [],
    github: '#',
    durum: 'WIP',
    buyuk: false,
  },
  {
    id: 3,
    isim: 'PROJE_03',
    etiket: 'YAKINDA',
    aciklamaKey: 'projects.yakinda_aciklama',
    teknolojiler: [],
    github: '#',
    durum: 'WIP',
    buyuk: false,
  },
];

function ProjeKarti({ proje }) {
  const { t } = useTranslation()
  return (
    <div
      className={`bg-[#0a1628] border border-[#00f0ff]/10 p-8 hover:border-[#00f0ff]/40 transition-all group ${proje.buyuk ? 'md:col-span-2' : ''}`}
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className={`font-mono text-xs px-3 py-1 ${
            proje.etiket === 'FEATURED'
              ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30'
              : 'bg-white/5 text-[#3a5a72] border border-white/10'
          }`}
        >
          {t('projects.' + proje.etiket.toLowerCase())}
        </span>
        <span
          className={`font-mono text-xs ${
            proje.durum === 'SATILDI' ? 'text-green-400' : 'text-[#3a5a72]'
          }`}
        >
          {t('projects.' + proje.durum.toLowerCase())}
        </span>
      </div>

      <h3
        className={`font-bold tracking-tight mb-4 group-hover:text-[#00f0ff] transition-colors ${
          proje.buyuk ? 'text-3xl' : 'text-xl'
        }`}
      >
        {proje.isim}
      </h3>

      <p className="text-[#7a9ab8] text-sm leading-relaxed mb-6">{t(proje.aciklamaKey)}</p>

      {proje.teknolojiler.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {proje.teknolojiler.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-1 border border-[#00f0ff]/20 text-[#00f0ff]/60"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {proje.etiket === 'FEATURED' && (
        <a
          href={proje.github}
          className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] hover:gap-4 transition-all"
        >
          {t('projects.github')}
        </a>
      )}
    </div>
  );
}

function Projects() {
  const { t } = useTranslation()
  return (
    <div className="page-transition pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#00f0ff]" />
            <span className="font-mono text-xs text-[#00f0ff] tracking-[0.2em]">{t('projects.etiket')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            <span className="text-[#00f0ff]">{t('projects.baslik')}</span>
          </h1>
          <p className="text-[#7a9ab8] text-lg max-w-xl">
            {t('projects.aciklama')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJELER.map((proje) => (
            <ProjeKarti key={proje.id} proje={proje} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
