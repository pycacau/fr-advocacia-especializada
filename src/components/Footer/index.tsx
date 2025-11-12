import { FooterContainer, FooterContent } from './style'
import logoImg from '../../assets/logo_gray.svg'
import { FaLinkedin, FaFacebookF, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (logoRef.current) observer.observe(logoRef.current)
    if (contentRef.current) observer.observe(contentRef.current)
    if (socialRef.current) observer.observe(socialRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <FooterContainer ref={footerRef}>
      <FooterContent>
        <div ref={contentRef} className="footer-main">
          <div ref={logoRef} className="brand-section">
            <div className="logo-container">
              <img width={54} height={48} src={logoImg} alt="Francisco Roney Advocacia" className="footer-logo" />
              <div className="brand-glow"></div>
            </div>
            <div className="brand-info">
              <h3 className="brand-name">Francisco Roney</h3>
              <p className="brand-tagline">Advocacia Especializada</p>
              <div className="brand-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-accent"></div>
              </div>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-section company-info">
              <h4 className="section-title">
                <FaMapMarkerAlt className="section-icon" />
                Escritório
              </h4>
              <div className="info-content">
                <p className="info-text">Francisco Rôney Advogado - Ubajara, CE</p>
                <p className="info-text">CNPJ: 12.345.678/0001-90</p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.google.com/maps/place/Francisco+R%C3%B4ney+Advogados/@-3.921149,-40.8885908,17z/data=!3m1!4b1!4m6!3m5!1s0x84aea0e66822c679:0x7189654a910d6333!8m2!3d-3.921149!4d-40.8885908!16s%2Fg%2F11trsrqq1d?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D', '_blank', 'width=600,height=400');
                  }}
                  className="info-link"
                >
                  Ver no mapa →
                </a>
              </div>
            </div>

            <div className="info-section contact-info">
              <h4 className="section-title">
                <FaPhone className="section-icon" />
                Contato
              </h4>
              <div className="info-content">
                <a href="tel:+5588999453173" className="contact-link">
                  <FaPhone className="contact-icon" />
                  (88) 99945-3173
                </a>
                <a href="mailto:contato@franciscoroney.adv.br" className="contact-link">
                  <FaEnvelope className="contact-icon" />
                  contato@franciscoroney.adv.br
                </a>

              </div>
            </div>

            <div className="info-section legal-info">
              <h4 className="section-title">Legal</h4>
              <div className="info-content">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('./termos de uso/public/terms.html', '_blank', 'width=800,height=600,scrollbars=yes');
                  }}
                  className="legal-link"
                >
                  Termos de Uso
                </a>
                <p className="license-text">Licença: MIT</p>
                <div className="oab-badge">
                  <span className="oab-number">OAB/CE 23.123</span>
                </div>
              </div>
            </div>

            <div className="info-section dev-info">
              <h4 className="section-title">Desenvolvimento</h4>
              <div className="info-content">
                <p className="dev-text">Desenvolvido por</p>
                <a href="https://github.com/pycacau" target="_blank" rel="noopener" className="dev-link">
                  @pycacau
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav ref={socialRef} className="social-nav">
          <div className="social-title">
            <span>Conecte-se</span>
            <div className="social-underline"></div>
          </div>
          <div className="social-links">
            <a
              target="_blank"
              href="http://linkedin.com/in/francisco-roney-de-sousa-ribeiro-33aa9185/?originalSubdomain=br"
              rel="noreferrer"
              className="social-link linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a
              target="_blank"
              href="http://facebook.com/nsfadvogados/"
              rel="noreferrer"
              className="social-link facebook"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
              <span className="social-tooltip">Facebook</span>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/roneysousa/"
              rel="noreferrer"
              className="social-link instagram"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
              <span className="social-tooltip">Instagram</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2024 Francisco Roney Advocacia Especializada. Todos os direitos reservados.</p>
          </div>
        </nav>
      </FooterContent>
    </FooterContainer>
  )
}
