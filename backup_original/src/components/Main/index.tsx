import { CTA } from '../CTA'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Home } from '../Home'
import { Services } from '../Services'
import { SocialProof } from '../SocialProof'
import { ChatPopup, MainContainer, SocialLinks } from './style'
import linkedinImg from '../../assets/linkedin_icon.svg'
import faceImg from '../../assets/face_icon.svg'
import instaImg from '../../assets/insta_icon.svg'
import wppImg from '../../assets/wpp-icon.svg'
import { Sidebar } from '../Sidebar'

export function Main() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <MainContainer>
      <Header />
      <Sidebar />
      <Home />
      <Services />
      <CTA />
      <SocialProof />
      <ChatPopup>
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=55000000000000"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wppImg} alt="whatsapp" />
        </a>
      </ChatPopup>
      <Footer />
    </MainContainer>
  )
}
