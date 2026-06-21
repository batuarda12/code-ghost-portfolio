import { useEffect, useRef } from 'react';
import Terminal from '../components/Terminal';

function Home() {
  const canvasRef = useRef(null);

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

    // 80 tane parçacık oluştur
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
    <div className="relative min-h-screen bg-[#040d1a]">
      {/* Arkaplan grid çizgileri */}
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
      <div className="relative z-10 max-w-[1200px] mx-auto px-10 min-h-screen flex items-center pt-16">
        <div className="grid grid-cols-2 gap-16 w-full items-center">
          {/* SOL KOLON */}
          <div>
            {/* Üst etiket */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#00f0ff]" />
              <span className="font-mono text-xs text-[#00f0ff] tracking-[0.2em]">
                FULLSTACK DEVELOPER // v1.0
              </span>
            </div>

            {/* Ana başlık */}
            <h1 className="text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Kod Yazıyorum.
              <br />
              <span className="text-[#00f0ff]">Sistem</span> İnşa
              <br />
              Ediyorum.
            </h1>

            {/* Açıklama */}
            <p className="text-[#7a9ab8] text-lg leading-relaxed mb-10 max-w-lg">
              React'tan Spring Boot'a, C'den PostgreSQL'e — tam yığın çözümler üreten bir
              geliştirici. Fark yaratan yazılımlar inşa ediyorum.
            </p>

            {/* Butonlar */}
            <div className="flex gap-4 mb-14">
              <button className="font-mono text-xs font-bold bg-[#00f0ff] text-[#001a1f] px-8 py-4 flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all">
                PROJELERİ GÖR →
              </button>
              <button className="font-mono text-xs font-bold border border-[#00f0ff]/30 text-[#00f0ff] px-8 py-4 hover:bg-[#00f0ff]/10 transition-all">
                İLETİŞİME GEÇ
              </button>
            </div>

            {/* Stat bar */}
            <div className="flex gap-10 pt-6 border-t border-white/10">
              <div>
                <div className="font-mono text-xs text-[#00f0ff] tracking-widest mb-2">DURUM</div>
                <div className="font-mono text-sm text-[#d4e4fa] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  AKTİF
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-[#00f0ff] tracking-widest mb-2">STACK</div>
                <div className="font-mono text-sm text-[#d4e4fa]">FULLSTACK</div>
              </div>

              <div>
                <div className="font-mono text-xs text-[#00f0ff] tracking-widest mb-2">
                  MÜSAİTLİK
                </div>
                <div className="font-mono text-sm text-[#d4e4fa]">FREELANCE_AÇIK</div>
              </div>
            </div>
          </div>

          {/* SAĞ KOLON */}
          <div className="flex items-center justify-center">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
