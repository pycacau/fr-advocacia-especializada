import { SocialProofContainer, VideoCard } from './style'

const videos = [
  {
    url: 'https://www.instagram.com/reel/C7FY9W9Ldhi/',
    title: 'Depoimento 1'
  },
  {
    url: 'https://www.instagram.com/reel/C7Md6_fP7Bs/',
    title: 'Depoimento 2'
  },
  {
    url: 'https://www.instagram.com/reel/C7Pq6KfMM5M/',
    title: 'Depoimento 3'
  }
]

export function SocialProof() {
  const getEmbedUrl = (url: string) => {
    // Extrai o ID do reel da URL
    const reelId = url.split('/reel/')[1]?.split('/')[0]?.split('?')[0]
    if (reelId) {
      return `https://www.instagram.com/reel/${reelId}/embed/`
    }
    return url
  }

  return (
    <SocialProofContainer id="videos">
      <h2 className="section-title">Vídeos</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <VideoCard key={index}>
            <iframe
              src={getEmbedUrl(video.url)}
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              loading="lazy"
              title={video.title}
              style={{ pointerEvents: 'auto' }}
            ></iframe>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-link-fallback"
              aria-label={`Ver ${video.title} no Instagram`}
            >
              Ver no Instagram →
            </a>
          </VideoCard>
        ))}
      </div>
    </SocialProofContainer>
  )
}
