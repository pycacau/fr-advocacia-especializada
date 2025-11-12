import React, { useEffect, useRef } from 'react'
import { HeaderContainer, HeaderContent, LogoContainer, Nav, NavLink } from './style'
import logoSmallImg from '../../assets/logo_small.svg'
import logoExtendsImg from '../../assets/logo_extends.svg'
import { SmallInvisibleButton, SmallOutlineButton } from '../Buttons/Buttons'

export function Header() {
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const setScrollPadding = () => {
      const h = headerRef.current?.offsetHeight || 120
      try {
        document.documentElement.style.scrollPaddingTop = `${h}px`
      } catch {
        // fallback silencioso
      }
    }

    setScrollPadding()
    const onResize = () => setScrollPadding()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      try {
        document.documentElement.style.scrollPaddingTop = ''
      } catch {}
    }
  }, [])

  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

  const findElement = (id: string) =>
    document.getElementById(id) ||
    document.querySelector(`[name="${id}"]`) ||
    document.querySelector(`[data-section="${id}"]`) ||
    null

  const doScrollTo = (el: Element) => {
    const headerHeight = headerRef.current?.offsetHeight || 120
    const elementPosition = (el as HTMLElement).getBoundingClientRect().top + window.scrollY
    const target = elementPosition - headerHeight
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // tentativa imediata + retries (conteúdo assíncrono)
    for (let i = 0; i < 12; i++) {
      const el = findElement(id)
      if (el) {
        doScrollTo(el)
        return
      }
      // small delay antes da próxima tentativa
      await wait(60)
    }

    // fallback: atualiza hash e tenta novamente depois
    try {
      history.replaceState(null, '', `#${id}`)
    } catch {
      window.location.hash = `#${id}`
    }

    await wait(120)
    const el = findElement(id)
    if (el) doScrollTo(el)
  }

  return (
    <HeaderContainer ref={headerRef as any}>
      <HeaderContent>
        <LogoContainer>
          <NavLink href="#home" onClick={scrollToSection('home')}>
            <img src={logoSmallImg} alt="logomarca Antonio" />
          </NavLink>
          <NavLink href="#home" onClick={scrollToSection('home')} className="extended">
            <img src={logoExtendsImg} alt="Logomarca Antonio" />
          </NavLink>
        </LogoContainer>

        <Nav>
          <NavLink href="#home" onClick={scrollToSection('home')}>
            <SmallInvisibleButton>Home</SmallInvisibleButton>
          </NavLink>
          <NavLink href="#services" onClick={scrollToSection('services')}>
            <SmallInvisibleButton>Áreas de atuação</SmallInvisibleButton>
          </NavLink>
          <NavLink href="#cta" onClick={scrollToSection('cta')}>
            <SmallInvisibleButton>Sobre mim</SmallInvisibleButton>
          </NavLink>
          <NavLink href="#videos" onClick={scrollToSection('videos')}>
            <SmallInvisibleButton>Vídeos</SmallInvisibleButton>
          </NavLink>
          <NavLink
            href="https://api.whatsapp.com/send?phone=5588999453173"
            target="_blank"
            rel="noreferrer"
          >
            <SmallOutlineButton>Entrar em contato</SmallOutlineButton>
          </NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
