
type Props = {
  login: string
  displayName: string
  twitchUrl: string
  avatar: string
  bio: string
  isLive: boolean
  gameName?: string
  viewerCount?: number
  thumbnailUrl?: string
}

export default function StreamerCard({
  login,
  displayName,
  twitchUrl,
  avatar,
  bio,
  isLive,
  gameName,
  viewerCount,
  thumbnailUrl
}: Props) {
  return (
    <a
      href={twitchUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 transition hover:-translate-y-1 hover:border-fire/60"
    >
      {isLive && (
        <span className="absolute right-3 top-3 rounded-full bg-fire px-3 py-1 text-xs font-semibold tracking-wide text-black">
          LIVE
        </span>
      )}

      <div className="flex items-center gap-4">
        <img src={avatar} className="h-14 w-14 rounded-full border border-white/20 object-cover glow-logo" alt={`${displayName} avatar`} />
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">@{login}</p>
          <h3 className="text-lg font-semibold text-white">{displayName}</h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{bio}</p>

      <div className="mt-4 min-h-12 rounded-xl border border-white/10 bg-black/40 p-3">
        {isLive ? (
          <>
            <p className="text-sm text-ember">{gameName || 'Streaming now'}</p>
            <p className="text-xs text-zinc-400">{viewerCount ?? 0} viewers currently watching</p>
          </>
        ) : (
          <p className="text-sm text-zinc-400">Offline right now. Tap to open channel.</p>
        )}
      </div>

      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={`${displayName} live preview`}
          className="mt-4 h-32 w-full rounded-xl border border-white/10 object-cover opacity-90 transition group-hover:opacity-100"
        />
      )}
    </a>
  )
}
