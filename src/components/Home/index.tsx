import { HomeContainer, HomeContent } from './style'
import homeImg from '../../assets/home_img.webp'
import { DefaultButton, InvisibleButton } from '../Buttons/Buttons'
import branchBgImg from '../../assets/branch_bg.png'
import { Parallax } from 'react-scroll-parallax'
import linkedinImg from '../../assets/linkedin_icon.svg'
import faceImg from '../../assets/face_icon.svg'
import instaImg from '../../assets/insta_icon.svg'

export function Home() {

  return (
    <HomeContainer id="home">
      <div className="floating-social-icons">
        <a href="http://linkedin.com/in/francisco-roney-de-sousa-ribeiro-33aa9185/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="LinkedIn" />
        </a>
        <a href="http://facebook.com/nsfadvogados/" target="_blank" rel="noopener noreferrer">
          <img src={faceImg} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/roneysousa/" target="_blank" rel="noopener noreferrer">
          <img src={instaImg} alt="Instagram" />
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
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5588999453173"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DefaultButton
              style={{ backgroundColor: '#a39185', color: '#fff' }}
            >
              Entrar em Contato
            </DefaultButton>
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
