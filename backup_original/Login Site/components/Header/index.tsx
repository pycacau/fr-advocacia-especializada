import { HeaderContainer, HeaderContent, LogoContainer } from './style'
import logoSmallImg from '../../assets/logo_small.svg'
import logoExtendsImg from '../../assets/logo_extends.svg'
import { SmallInvisibleButton, SmallOutlineButton } from '../Buttons/Buttons'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <a href="#home">
            <img src={logoSmallImg} alt="logomarca Antonio" />
          </a>
          <a href="#home">
            <img src={logoExtendsImg} alt="Logomarca Antonio" />
          </a>
        </LogoContainer>
        <nav>
          <a href="#home">
            <SmallInvisibleButton>Home</SmallInvisibleButton>
          </a>
          <a href="#cta">
            <SmallInvisibleButton>Sobre mim</SmallInvisibleButton>
          </a>
          <a href="#services">
            <SmallInvisibleButton>Áreas de atuação</SmallInvisibleButton>
          </a>
          <a href="#depoimentos">
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
