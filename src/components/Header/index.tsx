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
              if (element)
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <img src={logoSmallImg} alt="logomarca Antonio" />
          </a>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('home')
              if (element)
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
              e.stopPropagation()
              const element = document.getElementById('home')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            <SmallInvisibleButton onClick={(e) => e.stopPropagation()}>Home</SmallInvisibleButton>
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              const element = document.getElementById('services')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            <SmallInvisibleButton onClick={(e) => e.stopPropagation()}>Áreas de atuação</SmallInvisibleButton>
          </a>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              const element = document.getElementById('cta')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            <SmallInvisibleButton onClick={(e) => e.stopPropagation()}>Sobre mim</SmallInvisibleButton>
          </a>
          <a
            href="#videos"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              const element = document.getElementById('videos')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            <SmallInvisibleButton onClick={(e) => e.stopPropagation()}>Vídeos</SmallInvisibleButton>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5588999453173"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <SmallOutlineButton onClick={(e) => e.stopPropagation()}>Entrar em contato</SmallOutlineButton>
          </a>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
