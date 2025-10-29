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
import { useEffect, useRef } from 'react'

export function Main() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '-50px 0px -50px 0px' }
    )

    const sections = mainRef.current?.querySelectorAll('section')
    sections?.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <MainContainer ref={mainRef}>
      <Header />
      <Sidebar />
      <Home />
      <Services />
      <CTA />
      <SocialProof />
      <ChatPopup>
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5588999453173"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-link"
        >
          <img src={wppImg} alt="whatsapp" />
          <div className="pulse-ring"></div>
          <div className="pulse-ring pulse-ring-delay"></div>
        </a>
      </ChatPopup>
      <Footer />
    </MainContainer>
  )
}
