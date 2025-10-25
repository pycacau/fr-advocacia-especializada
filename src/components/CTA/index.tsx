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
            Sou advogado com mais de 10 anos de experiência em diversas áreas do
            direito. Graduado pela Universidade Federal, pós-graduado em Direito
            Empresarial e Tributário. Atuo com dedicação para garantir justiça,
            proteção e soluções eficazes aos meus clientes, sempre priorizando a
            ética e a transparência em cada caso.
          </p>
        </div>
        <img className="branchBg" src={branchBgImg} alt="ramo de fundo" />
      </Content>
    </CTAContainer>
  )
}
