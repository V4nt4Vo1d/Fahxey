import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const stripeColors = [
  'from-rose-500 via-red-500 to-orange-500',
  'from-orange-500 via-amber-400 to-yellow-300',
  'from-yellow-300 via-lime-300 to-emerald-400',
  'from-emerald-400 via-teal-400 to-cyan-400',
  'from-cyan-400 via-sky-500 to-blue-500',
  'from-blue-500 via-indigo-500 to-violet-500',
  'from-violet-500 via-fuchsia-500 to-pink-500'
]

export default function Pride() {
  const rainbowVideo = 'https://cdn.coverr.co/videos/coverr-pride-flags-at-a-parade-1579182147056?download=1080p.mp4'

  return (
    <div className="relative min-h-screen overflow-hidden text-zinc-50">
      <Navbar />

      <video
        className="pride-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={rainbowVideo} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(255,70,70,0.56),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(251,191,36,0.42),transparent_34%),radial-gradient(circle_at_80%_82%,rgba(56,189,248,0.42),transparent_36%),radial-gradient(circle_at_20%_82%,rgba(192,132,252,0.35),transparent_32%),linear-gradient(140deg,rgba(15,10,25,0.8)_0%,rgba(8,9,18,0.72)_50%,rgba(30,9,18,0.76)_100%)]" />
      <div className="pride-ambient-orb pointer-events-none absolute -left-10 top-28 h-48 w-48 rounded-full bg-pink-400/45 blur-3xl" />
      <div className="pride-ambient-orb pointer-events-none absolute -right-6 bottom-16 h-56 w-56 rounded-full bg-sky-400/35 blur-3xl" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 pb-16 pt-24 sm:px-8">
        <section className="pride-panel rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-10">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-pink-100">Fahxey Pride</p>
          <h1 className="mb-5 text-center text-4xl font-extrabold leading-tight sm:text-6xl">
            Proud, Loud, and Fully Ourselves.
          </h1>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-zinc-100 sm:text-lg">
            Pride at Fahxey Network means more than colors on a screen. It means showing up for each other, protecting space for
            self-expression, and celebrating the people who make this community what it is. Every stream is better when everyone feels
            safe, seen, and respected.
          </p>

          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-100 sm:text-base">
            <p>
              This is a community where identity is not something to hide, tone down, or explain away. Whether you are LGBTQ+, an ally,
              or still figuring out where you fit, you belong in the conversation. We are building a place that values kindness,
              accountability, and joy without conditions.
            </p>
            <p>
              Pride is still a protest, still a celebration, and still a reminder that visibility matters. On this page and in stream,
              the goal is simple: celebrate people loudly, stand against hate clearly, and keep the vibe welcoming for everyone who pulls
              up with good energy.
            </p>
          </div>

          <div className="mt-8 grid gap-2 rounded-2xl border border-white/20 bg-black/25 p-3 sm:gap-3 sm:p-4">
            {stripeColors.map((stripe, index) => (
              <div
                key={stripe}
                className={`pride-rainbow-stripe h-8 rounded-xl bg-gradient-to-r ${stripe} shadow-[0_0_25px_rgba(255,255,255,0.12)] sm:h-10`}
                style={{ animationDelay: `${index * 220}ms` }}
              />
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="pride-value-card rounded-2xl border border-pink-300/35 bg-pink-400/10 p-4">
              <h2 className="mb-2 text-lg font-semibold text-pink-100">Inclusion First</h2>
              <p className="text-sm leading-relaxed text-zinc-100">
                Everyone deserves a place to connect and be seen. Chat and community spaces are moderated to stay positive, respectful,
                and supportive.
              </p>
            </article>
            <article className="pride-value-card rounded-2xl border border-amber-300/35 bg-amber-300/10 p-4">
              <h2 className="mb-2 text-lg font-semibold text-amber-100">Celebrate Identity</h2>
              <p className="text-sm leading-relaxed text-zinc-100">
                Pride is about honoring every identity and every story with respect, curiosity, and solidarity.
              </p>
            </article>
            <article className="pride-value-card rounded-2xl border border-cyan-300/35 bg-cyan-300/10 p-4">
              <h2 className="mb-2 text-lg font-semibold text-cyan-100">Build Community</h2>
              <p className="text-sm leading-relaxed text-zinc-100">
                We grow stronger by uplifting each other, sharing joy, and creating spaces where people can thrive without shrinking.
              </p>
            </article>
          </div>

          <section className="mt-8 rounded-2xl border border-white/20 bg-black/25 p-5 text-zinc-100">
            <h2 className="mb-3 text-xl font-semibold text-white sm:text-2xl">About This Pride Page</h2>
            <p className="text-sm leading-relaxed sm:text-base">
              This section is a living message for the Fahxey community. As the channel grows, this page can expand with resources,
              charities to support, community spotlights, and featured voices. For now, it stands as a simple promise: this network
              supports LGBTQ+ people with intention, respect, and real care.
            </p>
          </section>

          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="rounded-xl border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/25"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
