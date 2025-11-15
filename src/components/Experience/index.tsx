import React, { useState, useEffect, useRef } from 'react'
import { FaBalanceScale, FaUsers, FaStar, FaGraduationCap, FaComments, FaHandshake, FaFileContract, FaClock } from 'react-icons/fa'
import { ExperienceContainer, HeaderSection, SnakeContainer, StatCard } from './style'

interface StatData {
  value: string
  label: string
  description: string
  icon: React.ReactNode
  target: number
  suffix: string
}

function CountingNumber({ target, suffix, duration = 2000, className }: { target: number; suffix: string; duration?: number; className?: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasStarted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            let startTime: number
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime
              const progress = Math.min((currentTime - startTime) / duration, 1)
              const easeOut = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(easeOut * target))

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }
            requestAnimationFrame(animate)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [target, duration, hasStarted])

  return <span ref={elementRef} className={className}>{count}{suffix}</span>
}

export function Experience() {
  const stats: StatData[] = [
    {
      value: "99%",
      label: "Taxa de Sucesso",
      description: "Taxa de êxito em processos judiciais e negociações",
      icon: <FaBalanceScale />,
      target: 99,
      suffix: "%"
    },
    {
      value: "1000+",
      label: "Clientes Atendidos",
      description: "Famílias e empresas atendidas com dedicação",
      icon: <FaUsers />,
      target: 1000,
      suffix: "+"
    },
    {
      value: "98%",
      label: "Satisfação do Cliente",
      description: "Avaliação positiva dos nossos serviços",
      icon: <FaStar />,
      target: 98,
      suffix: "%"
    },
    {
      value: "15+",
      label: "Anos de Experiência",
      description: "Dedicação ao direito e justiça social",
      icon: <FaGraduationCap />,
      target: 10,
      suffix: "+"
    },
    {
      value: "300+",
      label: "Consultorias Jurídicas",
      description: "Orientação especializada em diversos ramos do direito",
      icon: <FaComments />,
      target: 300,
      suffix: "+"
    },
    {
      value: "250+",
      label: "Negociações Concluídas",
      description: "Acordos e mediações bem-sucedidas",
      icon: <FaHandshake />,
      target: 250,
      suffix: "+"
    },
    {
      value: "2000+",
      label: "Processos Jurídicos",
      description: "Casos conduzidos com expertise",
      icon: <FaFileContract />,
      target: 2000,
      suffix: "+"
    },
    {
      value: "24/7",
      label: "Suporte Jurídico",
      description: "Atendimento contínuo e emergencial",
      icon: <FaClock />,
      target: 24,
      suffix: "/7"
    }
  ]

  return (
    <ExperienceContainer id="experience">
      <HeaderSection>
        <h2 className="title">Nossa Experiência</h2>
        <p className="description">
          Mais de uma década de excelência jurídica, protegendo direitos e construindo justiça.
          Nossos números refletem o compromisso com resultados excepcionais.
        </p>
      </HeaderSection>

      <SnakeContainer>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            className="animate-in"
            style={{
              animationDelay: `${index * 0.1}s`
            } as React.CSSProperties}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">
              <CountingNumber
                target={stat.target}
                suffix={stat.suffix}
                className={stat.suffix === '%' ? 'success' : ''}
              />
            </div>
            <h3>{stat.label}</h3>
            <p className="description">{stat.description}</p>
          </StatCard>
        ))}
      </SnakeContainer>
    </ExperienceContainer>
  )
}
