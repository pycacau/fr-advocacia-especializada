import { Content, CTAContainer } from './style'
import ctaImg from '../../assets/roney.png'
import { DefaultButton } from '../Buttons/Buttons'
import branchBgImg from '../../assets/branch_bg.png'

export function CTA() {
  return (
    <CTAContainer id="cta">
      <Content>
        <img
          width={496}
          height={680}
          src={ctaImg}
          alt="balança simbolo da justiça"
        />
        <div>
          <h1>Sobre mim</h1>
          <p>
            O Dr. Roney é um advogado especializado em direito civil, trabalhista e previdenciário,
            com mais de 10 anos de experiência. Formado pela Universidade de São Paulo,
            possui especialização em Direito Empresarial e é membro da OAB-SP.
            Atua com dedicação em cada caso, oferecendo atendimento personalizado e soluções
            jurídicas eficazes para proteger seus direitos e interesses. Com uma abordagem
            ética e transparente, o Dr. Roney busca sempre a melhor solução para seus clientes,
            garantindo justiça e proteção em todas as situações.
          </p>
        </div>
        <img className="branchBg" src={branchBgImg} alt="ramo de fundo" />
      </Content>
    </CTAContainer>
  )
}
