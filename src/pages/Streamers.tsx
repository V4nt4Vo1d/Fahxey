
import { useEffect, useMemo, useState } from 'react'
import StreamerCard from '../components/StreamerCard'
import Navbar from '../components/Navbar'
import FireOverlay from '../components/FireOverlay'
import streamerData from '../data/streamers.json'
import { buildTwitchEmbedUrl, getLiveStreams, type TwitchStream } from '../lib/twitch'

type StreamerProfile = {
  login: string
  displayName: string
  twitchUrl: string
  avatarLogo: string
  bio: string
}

type StreamerWithStatus = StreamerProfile & {
  stream?: TwitchStream
}

export default function Streamers() {
  const featuredLogin = 'fahxey'
  const [streams, setStreams] = useState<TwitchStream[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const profiles = useMemo<StreamerProfile[]>(() => {
    const base = import.meta.env.BASE_URL
    return (streamerData as StreamerProfile[]).map((profile) => ({
      ...profile,
      avatarLogo: `${base}assets/logos/${profile.avatarLogo}`
    }))
  }, [])

  useEffect(() => {
    let ignore = false

    const load = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const data = await getLiveStreams(profiles.map((profile) => profile.login))
        if (!ignore) {
          setStreams(data)
        }
      } catch (err) {
        if (!ignore) {
          const message = err instanceof Error ? err.message : 'Unknown error while loading streams'
          setError(message)
        }
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    load()
    const timer = window.setInterval(load, 60000)

    return () => {
      ignore = true
      window.clearInterval(timer)
    }
  }, [profiles])

  const streamMap = useMemo(() => {
    return new Map(streams.map((stream) => [stream.user_login.toLowerCase(), stream]))
  }, [streams])

  const hydratedProfiles = useMemo<StreamerWithStatus[]>(() => {
    const withStatus = profiles.map((profile) => ({
      ...profile,
      stream: streamMap.get(profile.login.toLowerCase())
    }))

    return withStatus.sort((a, b) => {
      if (a.login.toLowerCase() === featuredLogin) return -1
      if (b.login.toLowerCase() === featuredLogin) return 1
      return a.displayName.localeCompare(b.displayName)
    })
  }, [profiles, streamMap])

  const featuredProfile = hydratedProfiles.find((profile) => profile.login.toLowerCase() === featuredLogin)
  const featuredStream = streamMap.get(featuredLogin)

  return (
    <div className="min-h-screen px-5 pb-14 pt-20 sm:px-10">
      <FireOverlay />
      <Navbar />

      <section className="mx-auto mt-10 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-fire sm:text-5xl">Live Streams</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Track active creators, featured broadcasts, and live viewer activity updated every minute.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Featured: {featuredProfile?.displayName ?? 'Fahxey'}
            </h3>
            {featuredStream ? (
              <span className="rounded-full bg-fire px-3 py-1 text-xs font-semibold text-black">
                {featuredStream.viewer_count} watching
              </span>
            ) : (
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-zinc-300">
                Offline right now
              </span>
            )}
          </div>
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Twitch feed for Fahxey"
              src={buildTwitchEmbedUrl(featuredLogin)}
              className="h-full w-full"
              allowFullScreen
            />
          </div>
        </div>

        {isLoading && <p className="mt-8 text-sm text-zinc-400">Loading Twitch live data...</p>}
        {error && <p className="mt-8 rounded-xl border border-red-500/30 bg-red-950/30 p-4 text-sm text-red-300">{error}</p>}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hydratedProfiles.map((profile) => {
            const thumb = profile.stream?.thumbnail_url
              .replace('{width}', '640')
              .replace('{height}', '360')

            return (
              <StreamerCard
                key={profile.login}
                login={profile.login}
                displayName={profile.displayName}
                twitchUrl={profile.twitchUrl}
                avatar={profile.avatarLogo}
                bio={profile.bio}
                isLive={Boolean(profile.stream)}
                gameName={profile.stream?.game_name}
                viewerCount={profile.stream?.viewer_count}
                thumbnailUrl={thumb}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
