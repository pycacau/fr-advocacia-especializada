import linkedinImg from '../../assets/in_white.svg'
import faceImg from '../../assets/face-white.svg'
import instaImg from '../../assets/insta-white.svg'
import logoSidebarImg from '../../assets/logo_small.svg'
import { Sidebar as SidebarContainer } from 'primereact/sidebar'
import { SidebarButton, SidebarContent } from './style'
import { SmallInvisibleButton, SmallOutlineButton } from '../Buttons/Buttons'
import { useState } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'
import hambImg from '../../assets/hamb.svg'

export function Sidebar() {
  const [visibleLeft, setVisibleLeft] = useState(false)

  return (
    <>
      <SidebarButton
        src={hambImg}
        onClick={() => setVisibleLeft(true)}
        alt="mostrar sidebar"
      ></SidebarButton>
      <SidebarContainer
        style={{
          background: 'rgba(28, 28, 28, 0.95)',
          backdropFilter: 'blur(10px)',
          border: 'none',
        }}
        visible={visibleLeft}
        fullScreen
        onHide={() => setVisibleLeft(false)}
      >
        <SidebarContent>
          <nav>
            <a href="#home">
              <SmallInvisibleButton>Home</SmallInvisibleButton>
            </a>
            <a href="#cta">
              <SmallInvisibleButton>Sobre mim</SmallInvisibleButton>
            </a>
            <a href="#services">
              <SmallInvisibleButton>Áreas de atuação</SmallInvisibleButton>
            </a>

            <a
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5588999453173"
              target="_blank"
              rel="noreferrer"
              onClick={() => setVisibleLeft(false)}
            >
              <SmallOutlineButton>Entrar em contato</SmallOutlineButton>
            </a>

            <nav className="socialNav">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/antonio-junior-adv/"
                rel="noreferrer"
              >
                <img width={40} height={40} src={linkedinImg} alt="linkedin" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/antoniojradv"
                rel="noreferrer"
              >
                <img width={40} height={40} src={faceImg} alt="facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/antoniojunioradvocacia/"
                rel="noreferrer"
              >
                <img width={40} height={40} src={instaImg} alt="instagram" />
              </a>
            </nav>
          </nav>
          <footer>
            <img src={logoSidebarImg} alt="logomarca Antonio" />
            <p>Empresa de advocacia especializada</p>
          </footer>
        </SidebarContent>
      </SidebarContainer>
    </>
  )
}
