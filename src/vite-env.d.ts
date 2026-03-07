/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TWITCH_CLIENT_ID?: string
  readonly VITE_TWITCH_APP_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
