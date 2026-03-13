import Navbar from '../components/Navbar'
import FireOverlay from '../components/FireOverlay'

export default function About() {
  return (
    <div className="min-h-screen px-5 pb-16 pt-20 text-zinc-200 sm:px-10">
      <FireOverlay />
      <Navbar />

      <main className="mx-auto mt-10 w-full max-w-3xl space-y-10 rounded-3xl border border-white/10 bg-black/45 p-6 sm:p-10">
        <h1 className="text-center text-4xl font-semibold text-fire [text-shadow:0_0_10px_rgba(255,77,0,0.45)]">
          Stream Info & About
        </h1>

        <section className="space-y-4">
          <h2 className="border-b-2 border-fire/30 pb-1 text-2xl font-semibold text-orange-100">What This Page Is</h2>
          <p className="leading-relaxed text-zinc-300">
            This is my main stream page for updates, schedules, and live status. This as my home base
            while I grow as a streamer and keep everything in one place for the community.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-b-2 border-fire/30 pb-1 text-2xl font-semibold text-orange-100">Streams & Schedule</h2>
          <p className="leading-relaxed text-zinc-300">
            I usually stream evenings around <strong>6:00-8:00 PM MST</strong>, and sometimes earlier on weekends when possible.
            The schedule can shift week to week, so the live tracker on the Streams page is the best real-time source.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-b-2 border-fire/30 pb-1 text-2xl font-semibold text-orange-100">Games I Play</h2>
          <p className="leading-relaxed text-zinc-300">
            Current focus is <strong>Rocket League</strong> and <strong>ARC Raiders</strong>, with <strong>Star Citizen</strong> coming
            soon as a major part of stream content. Expect ranked sessions, highlights, and collab nights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="border-b-2 border-fire/30 pb-1 text-2xl font-semibold text-orange-100">Where I Stream</h2>
          <p className="leading-relaxed text-zinc-300">
            Twitch is the primary platform, and I am building out clips and updates across socials.
            Follow here:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.twitch.tv/fahxey"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-fire/50 px-4 py-2 text-sm font-medium text-orange-100 transition hover:bg-fire/20"
            >
              Twitch
            </a>
            <a
              href="https://www.instagram.com/fahxey"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-fire/50 px-4 py-2 text-sm font-medium text-orange-100 transition hover:bg-fire/20"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@Fahxey"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-fire/50 px-4 py-2 text-sm font-medium text-orange-100 transition hover:bg-fire/20"
            >
              YouTube
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
