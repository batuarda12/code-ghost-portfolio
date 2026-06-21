import { useState, useEffect } from 'react';

const SATIRLAR = [
  { tip: 'prompt', text: '$ init_stack --env production' },
  { tip: 'out', text: '> Yükleniyor: React + TypeScript...' },
  { tip: 'out', text: '> Backend:    Node.js + Spring Boot' },
  { tip: 'out', text: '> Veritabanı: PostgreSQL + Redis' },
  { tip: 'out', text: '> Dil:        C / JavaScript' },
  { tip: 'ok', text: '✓ Sistem hazır. Görev başlıyor.' },
];

function Terminal() {
  // Şu ana kadar ekranda görünen satırlar
  const [gosterilen, setGosterilen] = useState([]);
  // Şu an yazılmakta olan satırın kaçıncı harfine kadar yazıldı
  const [satirIndex, setSatirIndex] = useState(0);
  const [harfIndex, setHarfIndex] = useState(0);
  // İmleç yanıp sönüyor mu
  const [imleç, setImlec] = useState(true);

  useEffect(() => {
    // Tüm satırlar bitti mi?
    if (satirIndex >= SATIRLAR.length) return;

    const mevcutSatir = SATIRLAR[satirIndex];

    // Bu satırın tüm harfleri yazıldı mı?
    if (harfIndex < mevcutSatir.text.length) {
      // Bir sonraki harfi ekle
      const timeout = setTimeout(
        () => {
          setGosterilen((prev) => {
            const yeni = [...prev];
            // Bu satır zaten var mı?
            if (yeni[satirIndex]) {
              yeni[satirIndex] = {
                ...mevcutSatir,
                text: mevcutSatir.text.slice(0, harfIndex + 1),
              };
            } else {
              yeni[satirIndex] = {
                ...mevcutSatir,
                text: mevcutSatir.text.slice(0, harfIndex + 1),
              };
            }
            return yeni;
          });
          setHarfIndex((h) => h + 1);
        },
        30 + Math.random() * 30
      ); // Her harf arası 30-60ms

      return () => clearTimeout(timeout);
    } else {
      // Bu satır bitti, sıradakine geç
      const timeout = setTimeout(() => {
        setSatirIndex((s) => s + 1);
        setHarfIndex(0);
      }, 400); // Satırlar arası 400ms bekle

      return () => clearTimeout(timeout);
    }
  }, [satirIndex, harfIndex]);

  // İmleç animasyonu
  useEffect(() => {
    const interval = setInterval(() => {
      setImlec((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a1628] border border-[#00f0ff]/20 p-7 w-full max-w-md font-mono">
      {/* Terminal başlık barı */}
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="text-xs text-[#3a5a72] ml-3">ghost@terminal ~ $</span>
      </div>

      {/* Yazılan satırlar */}
      <div className="space-y-1 min-h-[180px]">
        {gosterilen.map((satir, i) => (
          <div
            key={i}
            className={`text-sm leading-loose ${
              satir.tip === 'prompt'
                ? 'text-[#00f0ff]'
                : satir.tip === 'ok'
                  ? 'text-green-400'
                  : 'text-[#4a6a82]'
            }`}
          >
            {satir.text}
            {/* İmleç sadece en son satırda görünsün */}
            {i === gosterilen.length - 1 && satirIndex < SATIRLAR.length && (
              <span
                className="inline-block w-2 h-4 bg-[#00f0ff] ml-1 align-middle"
                style={{ opacity: imleç ? 1 : 0 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
