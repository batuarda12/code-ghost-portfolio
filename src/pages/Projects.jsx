const PROJELER = [
  {
    id: 1,
    isim: 'SkyBook',
    etiket: 'FEATURED',
    aciklama:
      'Sıfırdan tasarlayıp geliştirdiğim ve başarıyla sattığım fullstack web uygulaması. Kullanıcı yönetimi, rezervasyon sistemi ve ödeme entegrasyonu içeriyor.',
    teknolojiler: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    github: '#',
    durum: 'SATILDI',
    buyuk: true,
  },
  {
    id: 2,
    isim: 'PROJE_02',
    etiket: 'YAKINDA',
    aciklama: 'Yeni bir proje geliyor...',
    teknolojiler: [],
    github: '#',
    durum: 'WIP',
    buyuk: false,
  },
  {
    id: 3,
    isim: 'PROJE_03',
    etiket: 'YAKINDA',
    aciklama: 'Yeni bir proje geliyor...',
    teknolojiler: [],
    github: '#',
    durum: 'WIP',
    buyuk: false,
  },
];

function ProjeKarti({ proje }) {
  return (
    <div
      className={`bg-[#0a1628] border border-[#00f0ff]/10 p-8 hover:border-[#00f0ff]/40 transition-all group ${proje.buyuk ? 'md:col-span-2' : ''}`}
    >
      {/* Üst kısım */}
      <div className="flex items-center justify-between mb-6">
        <span
          className={`font-mono text-xs px-3 py-1 ${
            proje.etiket === 'FEATURED'
              ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30'
              : 'bg-white/5 text-[#3a5a72] border border-white/10'
          }`}
        >
          {proje.etiket}
        </span>
        <span
          className={`font-mono text-xs ${
            proje.durum === 'SATILDI' ? 'text-green-400' : 'text-[#3a5a72]'
          }`}
        >
          {proje.durum}
        </span>
      </div>

      {/* Proje adı */}
      <h3
        className={`font-bold tracking-tight mb-4 group-hover:text-[#00f0ff] transition-colors ${
          proje.buyuk ? 'text-3xl' : 'text-xl'
        }`}
      >
        {proje.isim}
      </h3>

      {/* Açıklama */}
      <p className="text-[#7a9ab8] text-sm leading-relaxed mb-6">{proje.aciklama}</p>

      {/* Teknolojiler */}
      {proje.teknolojiler.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {proje.teknolojiler.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-1 border border-[#00f0ff]/20 text-[#00f0ff]/60"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* GitHub linki */}
      {proje.etiket === 'FEATURED' && (
        <a
          href={proje.github}
          className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] hover:gap-4 transition-all"
        >
          GitHub&apos;da Gör
        </a>
      )}
    </div>
  );
}

function Projects() {
  return (
    <div className="relative min-h-screen bg-[#040d1a] pt-24 pb-20">
      {/* Arkaplan grid */}
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

      <div className="relative z-10 max-w-[1200px] mx-auto px-10">
        {/* Başlık */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#00f0ff]" />
            <span className="font-mono text-xs text-[#00f0ff] tracking-[0.2em]">PROJELER</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Geliştirdiğim <span className="text-[#00f0ff]">Projeler</span>
          </h1>
          <p className="text-[#7a9ab8] text-lg max-w-xl">
            Sıfırdan tasarlayıp hayata geçirdiğim projeler. Her biri farklı bir problemi çözmek için
            yazıldı.
          </p>
        </div>

        {/* Proje grid */}
        <div className="grid grid-cols-2 gap-6">
          {PROJELER.map((proje) => (
            <ProjeKarti key={proje.id} proje={proje} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
