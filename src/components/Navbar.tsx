
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/streams', label: 'Streams' },
  { to: '/about', label: 'About' }
]

export default function Navbar() {
  const logo = `${import.meta.env.BASE_URL}assets/logos/logo.png`

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavLink to="/" className="group flex items-center gap-3">
          <img src={logo} className="w-10 glow-logo transition-transform duration-300 group-hover:scale-105" alt="Fahxey logo" />
          <span className="text-lg font-semibold tracking-wider text-white">Fahxey Network</span>
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-4">
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
    </header>
  )
}
