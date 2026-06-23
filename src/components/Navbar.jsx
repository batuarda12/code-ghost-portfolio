import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const location = useLocation()
  const [menuAcik, setMenuAcik] = useState(false)
  const { t, i18n } = useTranslation()

  function dilDegistir() {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')
  }

  const linkler = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.contact'), path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#040d1a]/80 backdrop-blur-md border-b border-[#00f0ff]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-mono font-bold text-[#00f0ff] tracking-wider">
          CODE_GHOST
        </Link>

        {/* Masaüstü linkler */}
        <div className="hidden md:flex gap-8">
          {linkler.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                location.pathname === link.path
                  ? 'text-[#00f0ff] border-b border-[#00f0ff] pb-1'
                  : 'text-[#7a9ab8] hover:text-[#00f0ff]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Sağ taraf */}
        <div className="flex items-center gap-3">

          {/* Dil değiştirme butonu */}
          <button
            onClick={dilDegistir}
            className="font-mono text-xs font-bold border border-[#00f0ff]/30 text-[#00f0ff] px-3 py-2 hover:bg-[#00f0ff]/10 transition-colors duration-150"
          >
            {i18n.language === 'tr' ? 'EN' : 'TR'}
          </button>

          {/* CV butonu */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block font-mono text-xs font-bold bg-[#00f0ff] text-[#001a1f] px-5 py-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow duration-150"
          >
            CV.PDF
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuAcik(!menuAcik)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-[#00f0ff] transition-all ${menuAcik ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#00f0ff] transition-all ${menuAcik ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#00f0ff] transition-all ${menuAcik ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </div>

      {/* Mobil menü */}
      {menuAcik && (
        <div className="md:hidden bg-[#040d1a] border-t border-[#00f0ff]/10 px-6 py-4 flex flex-col gap-4">
          {linkler.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuAcik(false)}
              className={`text-sm font-mono transition-colors ${
                location.pathname === link.path
                  ? 'text-[#00f0ff]'
                  : 'text-[#7a9ab8]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs font-bold bg-[#00f0ff] text-[#001a1f] px-5 py-2 w-full mt-2 block text-center"
          >
            CV.PDF
          </a>
        </div>
      )}

    </nav>
  )
}

export default Navbar