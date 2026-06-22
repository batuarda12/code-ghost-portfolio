function Footer() {
  return (
    <footer className="border-t border-[#00f0ff]/10 py-8 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Sol: Marka */}
        <div className="font-mono text-xs text-[#3a5a72] tracking-widest">
          © 2025 CODE_GHOST — TÜM HAKLARI SAKLIDIR
        </div>

        {/* Sağ: Linkler */}
        <div className="flex gap-6">
          <a
            href="https://github.com/batuarda12"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-[#3a5a72] hover:text-[#00f0ff] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/batuhan-arda-unal"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-[#3a5a72] hover:text-[#00f0ff] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
