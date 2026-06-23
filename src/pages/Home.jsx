import { useEffect, useRef } from 'react';
import Terminal from '../components/Terminal';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const canvasRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        o: Math.random() * 0.45 + 0.1,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,240,255,${p.o})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="page-transition max-w-[1200px] mx-auto px-6 md:px-10 min-h-screen flex items-center pt-16">
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

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" />

      {/* Glow efektleri */}
      <div
        className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(0,240,255,0.07)', filter: 'blur(120px)' }}
      />
      <div
        className="fixed bottom-[-50px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(80,60,255,0.06)', filter: 'blur(120px)' }}
      />

      {/* Ana içerik */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 min-h-screen flex items-center pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full items-center">
          {/* SOL KOLON */}
          <div>
            {/* Üst etiket */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#00f0ff]" />
              <span className="font-mono text-xs text-[#00f0ff] tracking-[0.2em]">
                {t('home.etiket')}
              </span>
            </div>

            {/* Ana başlık */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              {t('home.baslik1')}
              <br />
              <span className="text-[#00f0ff]">{t('home.baslik2')}</span>
              <br />
              {t('home.baslik3')}
            </h1>

            {/* Açıklama */}
            <p className="text-[#7a9ab8] text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              {t('home.aciklama')}
            </p>

            {/* Butonlar */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                to="/projects"
                className="font-mono text-xs font-bold bg-[#00f0ff] text-[#001a1f] px-8 py-4 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-shadow duration-150"
              >
                {t('home.btn_projeler')}
              </Link>
              <Link
                to="/contact"
                className="font-mono text-xs font-bold border border-[#00f0ff]/30 text-[#00f0ff] px-8 py-4 hover:bg-[#00f0ff]/10 transition-colors duration-150"
              >
                {t('home.btn_iletisim')}
              </Link>
            </div>

            {/* Stat bar */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
              <div>
                <div className="font-mono text-xs text-[#00f0ff] tracking-widest mb-2">{t('home.durum')}</div>
                <div className="font-mono text-sm text-[#d4e4fa] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {t('home.durum_val')}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-[#00f0ff] tracking-widest mb-2">{t('home.stack')}</div>
                <div className="font-mono text-sm text-[#d4e4fa]">{t('home.stack_val')}</div>
              </div>

              <div>
                <div className="font-mono text-xs text-[#00f0ff] tracking-widest mb-2">
                  {t('home.musaitlik')}
                </div>
                <div className="font-mono text-sm text-[#d4e4fa]">{t('home.musaitlik_val')}</div>
              </div>
            </div>
          </div>

          {/* SAĞ KOLON — Terminal */}
          <div className="flex items-center justify-center">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
