function Footer() {
  return (
    <footer className="border-t border-[#00f0ff]/10 py-8 mt-20">
      <div className="max-w-[1200px] mx-auto px-10 flex items-center justify-between">
        {/* Sol: Marka */}
        <div className="font-mono text-xs text-[#3a5a72] tracking-widest">
          © 2026 CODE_GHOST — TÜM HAKLARI SAKLIDIR
        </div>

        {/* Sağ: Linkler */}
        <div className="flex gap-6">
          <a
            href="#"
            className="font-mono text-xs text-[#3a5a72] hover:text-[#00f0ff] transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="font-mono text-xs text-[#3a5a72] hover:text-[#00f0ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="font-mono text-xs text-[#3a5a72] hover:text-[#00f0ff] transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
