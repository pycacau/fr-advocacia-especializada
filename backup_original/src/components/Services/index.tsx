import { ServiceCard, ServicesContainer, CardContainer } from './style'
import arrowImg from '../../assets/arrow.svg'
import branchBgImg from '../../assets/branch_bg.png'
import cardIconImg1 from '../../assets/card_icon_1.svg'
import cardIconImg2 from '../../assets/card_icon_2.svg'
import cardIconImg3 from '../../assets/card_icon_3.svg'
import cardIconImg4 from '../../assets/card_icon_4.svg'
import cardIconImg5 from '../../assets/card_icon_5.svg'
import cardIconImg6 from '../../assets/card_icon_6.svg'

export function Services() {
  return (
    <ServicesContainer id="services">
      <div className="headerContainer">
        <h2>Nossas áreas de atuação</h2>
        <p>
          Tratamos cada trabalho de forma abrangente e acreditamos na força da
          comunicação clara e fácil.
        </p>
      </div>
      <CardContainer>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg1}
                alt="Direito Empresarial do trabalho"
              />
              <h3>Direito Empresarial do trabalho</h3>
            </div>
            <p className="description">
              Oferecemos assessoria jurídica completa para empresas, incluindo
              contratos, negociações, fusões e aquisições, garantindo a proteção
              dos interesses empresariais e o cumprimento das leis trabalhistas.
            </p>
            <p className="casesCount">85 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg2}
                alt="Direito de família"
              />
              <h3>Direito de família</h3>
            </div>
            <p className="description">
              Atuamos em questões familiares como divórcio, guarda de filhos,
              pensão alimentícia e partilha de bens, buscando sempre soluções
              que preservem o bem-estar de todos os envolvidos.
            </p>
            <p className="casesCount">62 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg3}
                alt="Direito tributário"
              />
              <h3>Direito tributário</h3>
            </div>
            <p className="description">
              Prestamos consultoria especializada em planejamento tributário,
              defesa em autuações fiscais e recuperação de créditos, otimizando
              a carga tributária de empresas e pessoas físicas.
            </p>
            <p className="casesCount">47 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg4}
                alt="Direito digital"
              />
              <h3>Direito digital</h3>
            </div>
            <p className="description">
              Protegemos direitos digitais, incluindo privacidade de dados,
              propriedade intelectual online, contratos digitais e defesa contra
              crimes cibernéticos.
            </p>
            <p className="casesCount">33 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg5}
                alt="Registro de marcas e patentes"
              />
              <h3>Registro de marcas e patentes</h3>
            </div>
            <p className="description">
              Realizamos o registro e proteção de marcas, patentes e direitos
              autorais, assegurando a propriedade intelectual de empresas e
              criadores.
            </p>
            <p className="casesCount">54 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg6}
                alt="Cobrança extrajudicial"
              />
              <h3>Cobrança extrajudicial</h3>
            </div>
            <p className="description">
              Realizamos cobranças extrajudiciais eficientes, utilizando
              negociações e acordos para recuperar dívidas de forma rápida e
              econômica.
            </p>
            <p className="casesCount">71 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
      </CardContainer>

      <img className="branchBg" src={branchBgImg} alt="ramo de fundo" />
    </ServicesContainer>
  )
}
