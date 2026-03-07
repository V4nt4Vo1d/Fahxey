export type TwitchStream = {
  id: string
  user_login: string
  user_name: string
  game_name: string
  viewer_count: number
  title: string
  thumbnail_url: string
  started_at: string
}

type TwitchResponse<T> = {
  data: T[]
}

const TWITCH_BASE = 'https://api.twitch.tv/helix'

function buildHeaders() {
  const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID
  const appToken = import.meta.env.VITE_TWITCH_APP_TOKEN

  if (!clientId || !appToken) {
    throw new Error('Missing Twitch API environment variables. Set VITE_TWITCH_CLIENT_ID and VITE_TWITCH_APP_TOKEN.')
  }

  return {
    'Client-Id': clientId,
    Authorization: `Bearer ${appToken}`
  }
}

export async function getLiveStreams(logins: string[]): Promise<TwitchStream[]> {
  if (!logins.length) {
    return []
  }

  const headers = buildHeaders()
  const params = new URLSearchParams()
  logins.forEach((login) => params.append('user_login', login))

  const response = await fetch(`${TWITCH_BASE}/streams?${params.toString()}`, { headers })

  if (!response.ok) {
    throw new Error(`Twitch request failed (${response.status})`)
  }

  const payload = (await response.json()) as TwitchResponse<TwitchStream>
  return payload.data
}

export function buildTwitchEmbedUrl(channel: string): string {
  const parent = window.location.hostname || 'localhost'
  return `https://player.twitch.tv/?channel=${encodeURIComponent(channel)}&parent=${encodeURIComponent(parent)}&muted=true`
}
