import { ServiceCard, ServicesContainer, CardContainer } from './style'
import arrowImg from '../../assets/arrow.svg'
import branchBgImg from '../../assets/branch_bg.png'
import cardIconImg1 from '../../assets/card_icon_1.svg'
import cardIconImg2 from '../../assets/card_icon_2.svg'
import cardIconImg3 from '../../assets/card_icon_3.svg'
import cardIconImg4 from '../../assets/card_icon_4.svg'
import cardIconImg5 from '../../assets/card_icon_5.svg'
import cardIconImg6 from '../../assets/card_icon_6.svg'
import { useEffect, useRef } from 'react'

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
      // Trigger animation immediately for header if it's in view
      headerRef.current.classList.add('animate-in')
    }

    // Observe each service card individually
    const cards = document.querySelectorAll('.service-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: cardIconImg1,
      title: 'Direito Empresarial do trabalho',
      description: 'Oferecemos assessoria jurídica completa para empresas, incluindo contratos, negociações, fusões e aquisições, garantindo a proteção dos interesses empresariais e o cumprimento das leis trabalhistas.',
      cases: '85 Casos solucionados',
      alt: 'Direito Empresarial do trabalho'
    },
    {
      icon: cardIconImg2,
      title: 'Direito de família',
      description: 'Atuamos em questões familiares como divórcio, guarda de filhos, pensão alimentícia e partilha de bens, buscando sempre soluções que preservem o bem-estar de todos os envolvidos.',
      cases: '62 Casos solucionados',
      alt: 'Direito de família'
    },
    {
      icon: cardIconImg3,
      title: 'Direito tributário',
      description: 'Prestamos consultoria especializada em planejamento tributário, defesa em autuações fiscais e recuperação de créditos, otimizando a carga tributária de empresas e pessoas físicas.',
      cases: '47 Casos solucionados',
      alt: 'Direito tributário'
    },
    {
      icon: cardIconImg4,
      title: 'Direito digital',
      description: 'Protegemos direitos digitais, incluindo privacidade de dados, propriedade intelectual online, contratos digitais e defesa contra crimes cibernéticos.',
      cases: '33 Casos solucionados',
      alt: 'Direito digital'
    },
    {
      icon: cardIconImg5,
      title: 'Registro de marcas e patentes',
      description: 'Realizamos o registro e proteção de marcas, patentes e direitos autorais, assegurando a propriedade intelectual de empresas e criadores.',
      cases: '54 Casos solucionados',
      alt: 'Registro de marcas e patentes'
    },
    {
      icon: cardIconImg6,
      title: 'Cobrança extrajudicial',
      description: 'Realizamos cobranças extrajudiciais eficientes, utilizando negociações e acordos para recuperar dívidas de forma rápida e econômica.',
      cases: '71 Casos solucionados',
      alt: 'Cobrança extrajudicial'
    }
  ]

  return (
    <ServicesContainer id="services">
      <div ref={headerRef} className="headerContainer">
        <h2 className="services-title">Nossas áreas de atuação</h2>
        <p className="services-subtitle">
          Tratamos cada trabalho de forma abrangente e acreditamos na força da
          comunicação clara e fácil.
        </p>
      </div>
      <CardContainer ref={cardsRef}>
        {services.map((service, index) => (
          <ServiceCard key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="contentContainer">
              <div className="header">
                <div className="icon-wrapper">
                  <img
                    width={40}
                    height={40}
                    src={service.icon}
                    alt={service.alt}
                  />
                </div>
                <h3>{service.title}</h3>
              </div>
              <p className="description">
                {service.description}
              </p>
              <div className="cases-badge">
                <span className="cases-number">{service.cases}</span>
                <div className="badge-glow"></div>
              </div>
            </div>
            <div className="arrow-container">
              <img
                className="arrow"
                src={arrowImg}
                alt="ocultar mostrar conteudo"
              />
            </div>
          </ServiceCard>
        ))}
      </CardContainer>

      <img className="branchBg" src={branchBgImg} alt="ramo de fundo" />
    </ServicesContainer>
  )
}
