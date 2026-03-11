
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/streams', label: 'Streams' },
  { to: '/about', label: 'About' }
]

export default function Navbar() {
  const logo = `${import.meta.env.BASE_URL}assets/logos/logo.png`
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavLink to="/" className="group flex items-center gap-3">
          <img src={logo} className="w-10 glow-logo transition-transform duration-300 group-hover:scale-105" alt="Fahxey logo" />
          <span className="text-sm font-semibold tracking-wider text-white sm:text-lg">Fahxey Network</span>
        </NavLink>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-black/35 text-zinc-200 transition hover:bg-white/10 hover:text-white sm:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <div className="hidden items-center gap-2 sm:flex sm:gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-1.5 text-sm font-medium transition',
                  isActive ? 'bg-fire text-black' : 'text-zinc-200 hover:bg-white/10 hover:text-white'
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div
        id="mobile-nav-menu"
        className={[
          'sm:hidden overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur transition-all duration-300',
          isMenuOpen ? 'max-h-64 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        ].join(' ')}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 text-sm font-medium transition',
                  isActive ? 'bg-fire text-black' : 'text-zinc-200 hover:bg-white/10 hover:text-white'
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
