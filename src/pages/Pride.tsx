import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Navbar from '../components/Navbar'

export default function Pride() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rainbowVideo = '/assets/logos/gay.mp4'

  return (
    <div className="relative min-h-screen overflow-hidden text-zinc-50">
      <Navbar />

      <video
        ref={videoRef}
        className="pride-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.playbackRate = 0.72
          }
        }}
      >
        <source src={rainbowVideo} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-black/35" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 pb-16 pt-24 sm:px-8">
        <section className="pride-panel rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-10">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-zinc-200">Fahxey Pride</p>
          <h1 className="mb-5 text-center text-4xl font-extrabold leading-tight sm:text-6xl">
            I am gay, and this is my story.
          </h1>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-zinc-100 sm:text-lg">
            Being gay is a core part of who I am. This page is my way of being open about that, standing in it with pride, and sharing
            a space where people can show up as their full selves without fear.
          </p>

          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-100 sm:text-base">
            <p>
              My journey has had proud moments and hard ones. I have had to learn to trust myself, stop shrinking who I am, and be honest
              even when that felt uncomfortable. Choosing authenticity changed everything for me.
            </p>
            <p>
              I want this community to reflect that same honesty. If you are LGBTQ+, questioning, or an ally, I want you to know you are
              welcome here. Respect is expected, hate is not, and everyone deserves to feel safe being themselves.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="pride-value-card rounded-2xl border border-white/25 bg-black/20 p-4">
              <h2 className="mb-2 text-lg font-semibold text-white">My Truth</h2>
              <p className="text-sm leading-relaxed text-zinc-100">
                I am done hiding parts of myself. Living openly as a gay man has made me stronger, more grounded, and more grateful for
                the people who support me.
              </p>
            </article>
            <article className="pride-value-card rounded-2xl border border-white/25 bg-black/20 p-4">
              <h2 className="mb-2 text-lg font-semibold text-white">My Experience</h2>
              <p className="text-sm leading-relaxed text-zinc-100">
                I have felt both acceptance and judgment, and both taught me what kind of space I want to create: one rooted in kindness,
                confidence, and real connection.
              </p>
            </article>
            <article className="pride-value-card rounded-2xl border border-white/25 bg-black/20 p-4">
              <h2 className="mb-2 text-lg font-semibold text-white">My Promise</h2>
              <p className="text-sm leading-relaxed text-zinc-100">
                I will keep building a community where people are respected, protected, and celebrated. You should never have to make
                yourself smaller to belong here.
              </p>
            </article>
          </div>

          <section className="mt-8 rounded-2xl border border-white/20 bg-black/25 p-5 text-zinc-100">
            <h2 className="mb-3 text-xl font-semibold text-white sm:text-2xl">Why This Page Matters To Me</h2>
            <p className="text-sm leading-relaxed sm:text-base">
              This page is personal. It is not just about a label. It is about choosing to be visible, refusing shame, and creating a
              platform that clearly supports LGBTQ+ people. As this community grows, I want this message to stay clear: you are safe here
              and you are valued here.
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
