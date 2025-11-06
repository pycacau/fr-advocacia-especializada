import { HeaderContainer, HeaderContent, LogoContainer } from './style'
import logoSmallImg from '../../assets/logo_small.svg'
import logoExtendsImg from '../../assets/logo_extends.svg'
import linkedinImg from '../../assets/linkedin_icon.svg'
import faceImg from '../../assets/face_icon.svg'
import instaImg from '../../assets/insta_icon.svg'
import { SmallInvisibleButton, SmallOutlineButton } from '../Buttons/Buttons'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('home')
              if (element) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 120
                window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' })
              }
            }}
          >
            <img src={logoSmallImg} alt="logomarca Antonio" />
          </a>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('home')
              if (element) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 120
                window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' })
              }
            }}
          >
            <img src={logoExtendsImg} alt="Logomarca Antonio" />
          </a>
        </LogoContainer>
        <nav>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('home')
              if (element) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 120
                window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' })
              }
            }}
          >
            <SmallInvisibleButton>Home</SmallInvisibleButton>
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('services')
              if (element) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 120
                window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' })
              }
            }}
          >
            <SmallInvisibleButton>Áreas de atuação</SmallInvisibleButton>
          </a>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('cta')
              if (element) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 120
                window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' })
              }
            }}
          >
            <SmallInvisibleButton>Sobre mim</SmallInvisibleButton>
          </a>
          <a
            href="#videos"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('videos')
              if (element) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 120
                window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' })
              }
            }}
          >
            <SmallInvisibleButton>Vídeos</SmallInvisibleButton>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5588999453173"
            target="_blank"
            rel="noreferrer"
          >
            <SmallOutlineButton>Entrar em contato</SmallOutlineButton>
          </a>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
