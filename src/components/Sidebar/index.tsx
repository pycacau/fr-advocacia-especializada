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
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(20px)',
          border: 'none',
          filter: 'drop-shadow(2px 10px 16px rgba(145, 145, 145, 0.3))',
          boxShadow: '0 0 15px rgba(145, 145, 145, 0.2), 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
        visible={visibleLeft}
        fullScreen
        onHide={() => setVisibleLeft(false)}
      >
        <SidebarContent>
          <nav>
            <a href="#home" onClick={() => setVisibleLeft(false)}>
              <SmallInvisibleButton>Home</SmallInvisibleButton>
            </a>
            <a href="#cta" onClick={() => setVisibleLeft(false)}>
              <SmallInvisibleButton>Sobre mim</SmallInvisibleButton>
            </a>
            <a href="#services" onClick={() => setVisibleLeft(false)}>
              <SmallInvisibleButton>Áreas de atuação</SmallInvisibleButton>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5588999453173"
              target="_blank"
              rel="noreferrer"
              onClick={() => setVisibleLeft(false)}
            >
              <SmallOutlineButton>Entrar em contato</SmallOutlineButton>
            </a>

            <nav className="socialNav">
              <a
                target="_blank"
                href="http://linkedin.com/in/francisco-roney-de-sousa-ribeiro-33aa9185/?originalSubdomain=br"
                rel="noreferrer"
              >
                <img width={40} height={40} src={linkedinImg} alt="linkedin" />
              </a>
              <a
                target="_blank"
                href="http://facebook.com/nsfadvogados/"
                rel="noreferrer"
              >
                <img width={40} height={40} src={faceImg} alt="facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/roneysousa/"
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
