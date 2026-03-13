import { useRef } from 'react'

export default function FireOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fireVideo = `${import.meta.env.BASE_URL}assets/logos/fire.mp4`

  return (
    <video
      ref={videoRef}
      className="fire-video-overlay"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onLoadedMetadata={() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 0.6
        }
      }}
      onEnded={() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0
          void videoRef.current.play()
        }
      }}
    >
      <source src={fireVideo} type="video/mp4" />
    </video>
  )
}