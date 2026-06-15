import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const linkler = [
    { label: 'Ana Sayfa', path: '/' },
    { label: 'Hakkımda', path: '/about' },
    { label: 'Projeler', path: '/projects' },
    { label: 'İletişim', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#040d1a]/80 backdrop-blur-md border-b border-[#00f0ff]/10">
      <div className="max-w-[1200px] mx-auto px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="font-mono font-bold text-[#00f0ff] tracking-wider">
          CODE_GHOST
        </Link>

        {/* Linkler */}
        <div className="flex gap-8">
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

        {/* CV Butonu */}
        <button className="font-mono text-xs font-bold bg-[#00f0ff] text-[#001a1f] px-5 py-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
          CV.PDF
        </button>

      </div>
    </nav>
  )
}

export default Navbar