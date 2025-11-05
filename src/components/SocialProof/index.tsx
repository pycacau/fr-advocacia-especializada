import { SocialProofContainer, VideoCard } from './style'

const videos = [
  {
    url: 'https://www.instagram.com/reel/C7FY9W9Ldhi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    title: 'Depoimento 1'
  },
  {
    url: 'https://www.instagram.com/reel/C7Md6_fP7Bs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    title: 'Depoimento 2'
  },
  {
    url: 'https://www.instagram.com/reel/C7Pq6KfMM5M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    title: 'Depoimento 3'
  }
]

export function SocialProof() {
  return (
    <SocialProofContainer id="videos">
      <h2 className="section-title">Vídeos</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <VideoCard key={index}>
            <iframe
              src={`https://www.instagram.com/reel/${video.url.split('/reel/')[1].split('/?')[0]}/embed`}
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
              title={video.title}
            ></iframe>
          </VideoCard>
        ))}
      </div>
    </SocialProofContainer>
  )
}
