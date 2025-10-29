import { FooterContainer, FooterContent } from './style'
import logoImg from '../../assets/logo_gray.svg'
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <div>
            <img width={54} height={48} src={logoImg} alt="logomarca antonio" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <p>Francisco Roney ©</p>
              <p>Advocacia Especializada</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
            <div>
              <p><strong>Empresa:</strong></p>
              <p>CNPJ: 12.345.678/0001-90</p>
              <p>Localização: <a href="#" onClick={(e) => { e.preventDefault(); window.open('https://www.google.com/maps?q=CE-187,+235+-+Ubajara,+Ceará,+Brazil', '_blank', 'width=600,height=400'); }}>CE-187, 235 - Ubajara</a></p>
              <p>Contato: (85) 99999-9999</p>
            </div>
            <div>
              <p><strong>Legal:</strong></p>
              <p><a href="#" onClick={(e) => { e.preventDefault(); window.open('./terms.html', '_blank', 'width=800,height=600,scrollbars=yes'); }} style={{ color: 'inherit' }}>Termos de Uso</a></p>
              <p>Licença: MIT</p>
            </div>
            <div>
              <p><strong>Desenvolvimento:</strong></p>
              <p>Desenvolvido por <a href="https://github.com/pycacau" target="_blank" rel="noopener">@pycacau</a></p>
            </div>
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
