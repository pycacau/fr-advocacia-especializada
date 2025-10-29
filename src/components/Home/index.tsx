import { HomeContainer, HomeContent } from './style'
import homeImg from '../../assets/home_img.webp'
import { DefaultButton, InvisibleButton } from '../Buttons/Buttons'
import branchBgImg from '../../assets/branch_bg.png'
import { Parallax } from 'react-scroll-parallax'

export function Home() {

  return (
    <HomeContainer id="home">
      <div className="floating-social-icons">
        <a href="https://www.linkedin.com/company/fr-advocacia-especializada" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/linkedin_icon.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com/fradvocaciaespecializada" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/face_icon.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/fradvocaciaespecializada" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/insta_icon.svg" alt="Instagram" />
        </a>
      </div>
      <HomeContent>
        <h1>Resolvemos seus problemas jurídicos com advogados experientes</h1>
        <p>
          Estamos aqui para ajudar a cuidar da sua legalidade com o melhor
          atendimento especialmente para você
        </p>
        <div className="buttonContainer">
          <a
            href="Login Site/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DefaultButton
              style={{ backgroundColor: '#a39185', color: '#fff' }}
            >
              Meus Processos
            </DefaultButton>
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('services')
              if (element)
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <InvisibleButton>Saber mais</InvisibleButton>
          </a>
        </div>
      </HomeContent>

      <div className="homeBg">
        <div className="paralaxContainer">
          <img
            width={452}
            height={716}
            className="parallaxImg"
            src={homeImg}
            alt="estatua justiça"
          />
          <Parallax className="paralaxItem" speed={-10}>
            <p>Trabalhamos em prol da</p>
            <strong>Justiça</strong>
          </Parallax>
        </div>
      </div>

      <img className="branchBg" src={branchBgImg} alt="ramo fundo" />
    </HomeContainer>
  )
}
