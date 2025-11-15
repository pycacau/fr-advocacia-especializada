import { CTA } from '../CTA'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Home } from '../Home'
import { Services } from '../Services'
import { SocialProof } from '../SocialProof'
import { Experience } from '../Experience'
import { MainContainer, SocialLinks } from './style'
import linkedinImg from '../../assets/linkedin_icon.svg'
import faceImg from '../../assets/face_icon.svg'
import instaImg from '../../assets/insta_icon.svg'
import branchBgImg from '../../assets/branch_bg.png'
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
      <Experience />
      <SocialProof />
      <img className="branchBg" src={branchBgImg} alt="ramo fundo" />
      <Footer />
    </MainContainer>
  )
}
