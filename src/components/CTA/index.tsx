import { Content, CTAContainer } from './style'
import ctaImg from '../../assets/roney.png'
import { DefaultButton } from '../Buttons/Buttons'
import branchBgImg from '../../assets/branch_bg.png'
import scaleIcon from '../../assets/card_icon_1.svg'
import documentIcon from '../../assets/card_icon_2.svg'
import courtIcon from '../../assets/card_icon_3.svg'
import { useEffect, useRef } from 'react'

export function CTA() {
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

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

    if (contentRef.current) observer.observe(contentRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (textRef.current) observer.observe(textRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <CTAContainer id="cta">
      <Content ref={contentRef}>
        <div ref={imageRef} className="image-container">
          <img
            width={496}
            height={680}
            src={ctaImg}
            alt="Dr. Roney - Advogado Especialista"
            className="profile-image"
          />
          <div className="image-glow"></div>
          <div className="floating-elements">
            <div className="justice-scale scale-1">
              <img src={scaleIcon} alt="Balança da Justiça" />
            </div>
            <div className="justice-scale scale-2">
              <img src={documentIcon} alt="Documento Jurídico" />
            </div>
            <div className="justice-scale scale-3">
              <img src={courtIcon} alt="Tribunal" />
            </div>
          </div>
        </div>
        <div ref={textRef} className="text-content">
          <h1 className="cta-title">Sobre mim</h1>
          <div className="text-block">
            <p className="cta-description">
              Sou o Dr. Roney, advogado especializado em direito civil, trabalhista e previdenciário, 
              com mais de 10 anos de experiência. Sou formado pelo Centro Universitário INTA (UNINTA), 
              professor na VIASAPIENS
               e atualmente estou cursando mestrado na Universidade Estadual Vale do Acaraú (UVA).
            </p>
            <p className="cta-description">
              Atuo com dedicação em cada caso, oferecendo um atendimento personalizado e 
              soluções jurídicas eficazes para proteger os direitos e interesses de meus clientes.
               Com uma abordagem ética e transparente,
               busco sempre a melhor solução, garantindo justiça e proteção em todas as situações.
            </p>
          </div>
          <div className="credentials">
            <div className="credential-item">
              <img src={courtIcon} alt="Formado no UNINTA" className="credential-icon" />
              <span><a href="https://www.uninta.edu.br/" target="_blank" rel="noopener noreferrer">Formado no UNINTA</a></span>
            </div>
            <div className="credential-item">
              <img src={scaleIcon} alt="Experiência" className="credential-icon" />
              <span>+10 anos de experiência</span>
            </div>
            <div className="credential-item">
              <img src={documentIcon} alt="Mestrando na UVA" className="credential-icon" />
              <span><a href="https://www.uvace.edu.br/" target="_blank" rel="noopener noreferrer">Mestrando na UVA</a></span>
            </div>
            <div className="credential-item">
              <img src={courtIcon} alt="Professor na VIASAPIENS" className="credential-icon" />
              <span><a href="https://www.viasapiens.com.br/" target="_blank" rel="noopener noreferrer">Professor na VIASAPIENS</a></span>
            </div>
          </div>
        </div>
        <img className="branchBg" src={branchBgImg} alt="ramo de fundo" />
      </Content>
    </CTAContainer>
  )
}
