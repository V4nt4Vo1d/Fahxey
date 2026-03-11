
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  const heroLogo = `${import.meta.env.BASE_URL}assets/logos/logo.png`

  return (
    <div className="relative min-h-screen overflow-hidden text-center text-white">
      <div className="fire-bg" />
      <Navbar />

      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 pt-24">
        <Link
          to="/"
          aria-label="Open Fahxey Pride page"
          className="mb-7 block rounded-full transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <img src={heroLogo} className="w-36 sm:w-44 glow-logo" alt="Fahxey logo" />
        </Link>

        <p className="mb-3 text-xs uppercase tracking-[0.45em] text-ember">Live Broadcasting Network</p>

        <h1 className="text-5xl font-bold leading-tight text-fire sm:text-7xl">FAHXEY NETWORK</h1>

        <p className="mt-7 max-w-2xl text-base text-zinc-300 sm:text-lg">
          This is my stream page where I share live sessions, clips, and updates from Rocket League and ARC Raiders.
          Star Citizen content is coming soon.
        </p>
      </main>
    </div>
  )
}
