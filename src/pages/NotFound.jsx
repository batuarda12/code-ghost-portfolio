import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="page-transition min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        {/* Hata kodu */}
        <div className="font-mono text-[120px] md:text-[180px] font-extrabold text-[#00f0ff]/10 leading-none mb-4">
          404
        </div>

        {/* İkon */}
        <div className="font-mono text-4xl mb-6">👻</div>

        {/* Başlık */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-[#00f0ff]">{t('404.baslik')}</span>
        </h1>

        {/* Açıklama */}
        <p className="text-[#7a9ab8] font-mono text-sm mb-10 max-w-sm mx-auto">
          {t('404.aciklama')}
        </p>

        {/* Terminal mesajı */}
        <div className="bg-[#0a1628] border border-[#00f0ff]/10 p-4 font-mono text-sm text-left max-w-sm mx-auto mb-10">
          <span className="text-[#00f0ff]">$ </span>
          <span className="text-[#7a9ab8]">cd ~/ </span>
          <span className="text-green-400">// ana sayfaya dön</span>
        </div>

        {/* Buton */}
        <Link
          to="/"
          className="font-mono text-xs font-bold bg-[#00f0ff] text-[#001a1f] px-8 py-4 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-shadow duration-150"
        >
          {t('404.btn')}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
