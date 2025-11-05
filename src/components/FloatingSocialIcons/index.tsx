import { FloatingContainer } from './style'
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

export function FloatingSocialIcons() {
  return (
    <FloatingContainer>
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
        href="https://www.instagram.com/roneyadvogado/"
        rel="noreferrer"
      >
        <FaInstagram size={24} color="white" />
      </a>
    </FloatingContainer>
  )
}
