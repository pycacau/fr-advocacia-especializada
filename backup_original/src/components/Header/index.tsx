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
              const element = document.getElementById('home')
              if (element)
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <SmallInvisibleButton>Home</SmallInvisibleButton>
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('services')
              if (element)
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <SmallInvisibleButton>Áreas de atuação</SmallInvisibleButton>
          </a>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('cta')
              if (element)
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <SmallInvisibleButton>Sobre mim</SmallInvisibleButton>
          </a>
          <a href="./Login Site/index.html">
            <SmallInvisibleButton>Meus processos</SmallInvisibleButton>
          </a>
          <a
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5588999453173"
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
