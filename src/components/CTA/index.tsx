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
              O Dr. Roney é um advogado especializado em direito civil, trabalhista e previdenciário,
              com mais de 10 anos de experiência. Formado pela Universidade de São Paulo,
              possui especialização em Direito Empresarial e é membro da OAB-SP.
            </p>
            <p className="cta-description">
              Atua com dedicação em cada caso, oferecendo atendimento personalizado e soluções
              jurídicas eficazes para proteger seus direitos e interesses. Com uma abordagem
              ética e transparente, o Dr. Roney busca sempre a melhor solução para seus clientes,
              garantindo justiça e proteção em todas as situações.
            </p>
          </div>
          <div className="credentials">
            <div className="credential-item">
              <img src={courtIcon} alt="Universidade" className="credential-icon" />
              <span>Universidade de São Paulo</span>
            </div>
            <div className="credential-item">
              <img src={documentIcon} alt="OAB" className="credential-icon" />
              <span>OAB-SP</span>
            </div>
            <div className="credential-item">
              <img src={scaleIcon} alt="Experiência" className="credential-icon" />
              <span>+10 anos de experiência</span>
            </div>
          </div>
        </div>
        <img className="branchBg" src={branchBgImg} alt="ramo de fundo" />
      </Content>
    </CTAContainer>
  )
}
