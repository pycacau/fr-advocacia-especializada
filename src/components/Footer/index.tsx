import { FooterContainer, FooterContent } from './style'
import logoImg from '../../assets/logo_gray.svg'
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <img width={54} height={48} src={logoImg} alt="logomarca antonio" />
          <div>
            <p>Francisco Roney ©</p>
            <p>Advocacia Especializada</p>
          </div>
        </div>
        <nav>
          <a
            target="_blank"
            href="http://linkedin.com/in/francisco-roney-de-sousa-ribeiro-33aa9185/?originalSubdomain=br"
            rel="noreferrer"
          >
            <FaLinkedin size={24} color="white" />
          </a>
          <a
            target="_blank"
            href="http://facebook.com/nsfadvogados/"
            rel="noreferrer"
          >
            <FaFacebookF size={24} color="white" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/roneysousa/"
            rel="noreferrer"
          >
            <FaInstagram size={24} color="white" />
          </a>
        </nav>
      </FooterContent>
    </FooterContainer>
  )
}
