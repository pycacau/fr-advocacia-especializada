import { FooterContainer, FooterContent } from './style'
import logoImg from '../../assets/logo_gray.svg'
import linkedinImg from '../../assets/linkedin_icon.svg'
import faceImg from '../../assets/face_icon.svg'
import instaImg from '../../assets/insta_icon.svg'

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
            <img width={40} height={40} src={linkedinImg} alt="linkedin" />
          </a>
          <a
            target="_blank"
            href="http://facebook.com/nsfadvogados/"
            rel="noreferrer"
          >
            <img width={40} height={40} src={faceImg} alt="facebook" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/roneysousa/"
            rel="noreferrer"
          >
            <img width={40} height={40} src={instaImg} alt="instagram" />
          </a>
        </nav>
      </FooterContent>
    </FooterContainer>
  )
}
