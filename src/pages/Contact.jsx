import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    isim: '',
    email: '',
    mesaj: '',
  });
  const [gonderildi, setGonderildi] = useState(false);

  // Input değişince state'i güncelle
  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  // Form gönderilince
  function handleSubmit(e) {
    e.preventDefault();
    setGonderildi(true);
  }

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
            <span className="font-mono text-xs text-[#00f0ff] tracking-[0.2em]">İLETİŞİM</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Yeni Bir <span className="text-[#00f0ff]">Proje</span> Başlatalım.
          </h1>
          <p className="text-[#7a9ab8] text-lg max-w-xl">
            Bir fikrin mi var? Birlikte çalışmak mı istiyorsun? Aşağıdan mesaj bırak, 24 saat içinde
            dönerim.
          </p>
        </div>

        {/* İki kolon */}
        <div className="grid grid-cols-2 gap-16">
          {/* SOL: Sosyal linkler */}
          <div className="space-y-6">
            {/* GitHub */}
            <a
              href="#"
              className="flex items-center gap-5 bg-[#0a1628] border border-[#00f0ff]/10 p-6 hover:border-[#00f0ff]/40 transition-all group"
            >
              <div className="w-12 h-12 bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff]/20 transition-all">
                <span className="font-mono text-lg font-bold">GH</span>
              </div>
              <div>
                <div className="font-mono text-xs text-[#3a5a72] mb-1">GITHUB</div>
                <div className="font-bold text-[#d4e4fa]">@code-ghost</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center gap-5 bg-[#0a1628] border border-[#00f0ff]/10 p-6 hover:border-[#00f0ff]/40 transition-all group"
            >
              <div className="w-12 h-12 bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff]/20 transition-all">
                <span className="font-mono text-lg font-bold">LI</span>
              </div>
              <div>
                <div className="font-mono text-xs text-[#3a5a72] mb-1">LINKEDIN</div>
                <div className="font-bold text-[#d4e4fa]">/in/code-ghost</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:mail@example.com"
              className="flex items-center gap-5 bg-[#0a1628] border border-[#00f0ff]/10 p-6 hover:border-[#00f0ff]/40 transition-all group"
            >
              <div className="w-12 h-12 bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff]/20 transition-all">
                <span className="font-mono text-lg font-bold">@</span>
              </div>
              <div>
                <div className="font-mono text-xs text-[#3a5a72] mb-1">EMAIL</div>
                <div className="font-bold text-[#d4e4fa]">mail@example.com</div>
              </div>
            </a>

            {/* Durum kartı */}
            <div className="bg-[#0a1628] border border-[#00f0ff]/10 p-6">
              <div className="font-mono text-xs text-[#3a5a72] mb-3">SİSTEM DURUMU</div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-sm text-green-400">
                  AKTİF — YENİ PROJELERE AÇIK
                </span>
              </div>
            </div>
          </div>

          {/* SAĞ: Form */}
          <div className="bg-[#0a1628] border border-[#00f0ff]/10 p-8">
            {gonderildi ? (
              /* Gönderildi ekranı */
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 border-2 border-[#00f0ff] flex items-center justify-center mb-6">
                  <span className="text-[#00f0ff] text-2xl">✓</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">Mesaj Gönderildi!</h2>
                <p className="text-[#7a9ab8] mb-8">En kısa sürede geri döneceğim.</p>
                <button
                  onClick={() => {
                    setGonderildi(false);
                    setForm({ isim: '', email: '', mesaj: '' });
                  }}
                  className="font-mono text-xs text-[#00f0ff] border border-[#00f0ff]/30 px-6 py-3 hover:bg-[#00f0ff]/10 transition-all"
                >
                  YENİ MESAJ
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* İsim */}
                <div>
                  <label className="font-mono text-xs text-[#3a5a72] tracking-widest block mb-2">
                    AD SOYAD
                  </label>
                  <input
                    type="text"
                    name="isim"
                    value={form.isim}
                    onChange={handleChange}
                    placeholder="Adın Soyadın"
                    required
                    className="w-full bg-[#040d1a] border border-[#00f0ff]/10 text-[#d4e4fa] px-4 py-3 font-mono text-sm placeholder:text-[#3a5a72] focus:outline-none focus:border-[#00f0ff]/50 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-xs text-[#3a5a72] tracking-widest block mb-2">
                    E-POSTA
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="mail@example.com"
                    required
                    className="w-full bg-[#040d1a] border border-[#00f0ff]/10 text-[#d4e4fa] px-4 py-3 font-mono text-sm placeholder:text-[#3a5a72] focus:outline-none focus:border-[#00f0ff]/50 transition-all"
                  />
                </div>

                {/* Mesaj */}
                <div>
                  <label className="font-mono text-xs text-[#3a5a72] tracking-widest block mb-2">
                    MESAJ
                  </label>
                  <textarea
                    name="mesaj"
                    value={form.mesaj}
                    onChange={handleChange}
                    placeholder="Projenizden bahsedin..."
                    required
                    rows={5}
                    className="w-full bg-[#040d1a] border border-[#00f0ff]/10 text-[#d4e4fa] px-4 py-3 font-mono text-sm placeholder:text-[#3a5a72] focus:outline-none focus:border-[#00f0ff]/50 transition-all resize-none"
                  />
                </div>

                {/* Gönder butonu */}
                <button
                  type="submit"
                  className="w-full bg-[#00f0ff] text-[#001a1f] font-mono text-sm font-bold py-4 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
                >
                  MESAJ GÖNDER
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
