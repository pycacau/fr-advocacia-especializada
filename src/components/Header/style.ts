import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 120px;
  height: 120px;

  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  overflow: visible;
  pointer-events: auto;
  isolation: isolate;

  padding: 0 1rem 0 1rem;

  background: ${(props) => props.theme.gradientDark};
  filter: drop-shadow(2px 10px 16px rgba(145, 145, 145, 0.3));
  backdrop-filter: blur(20px);
  box-shadow:
    0 0 15px rgba(145, 145, 145, 0.2),
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  /* Brilho sutil no topo */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,
      transparent,
      rgba(145, 145, 145, 0.3),
      transparent
    );
    animation: headerGlow 3s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
  }

  /* Animação de entrada */
  animation: headerSlideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 600px) {
    max-height: 720px;
    padding: 0 1rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 10000;
  pointer-events: auto;

  img {
    height: 90%;
    width: 90%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 10px rgba(145, 145, 145, 0.3));
  }

  a:last-child {
    img {
      opacity: 0;
      transform: translate(-100%, 0) scale(0.8);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      filter: drop-shadow(0 0 20px rgba(145, 145, 145, 0.5));
    }
    overflow: hidden;

    /* Brilho no logo extendido */
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg,
        transparent,
        rgba(145, 145, 145, 0.4),
        transparent
      );
      border-radius: 8px;
      z-index: -1;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
  }

  &:hover {
    a:last-child {
      img {
        transform: translate(0, 0) scale(1);
        opacity: 1;
        filter: drop-shadow(0 0 25px rgba(145, 145, 145, 0.8));
      }

      &::before {
        opacity: 1;
      }
    }

    a:first-child img {
      transform: scale(1.05);
      filter: drop-shadow(0 0 15px rgba(145, 145, 145, 0.6));
    }
  }

  @media (max-width: 1240px) {
    a:last-child {
      display: none;
    }
  }

  @media (max-width: 360px) {
    a > img {
      width: 32px;
    }
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1224px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 10000;
  pointer-events: auto;
  isolation: isolate;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 10001;
    pointer-events: auto;
    isolation: isolate;
    overflow: visible;

    a {
      position: relative;
      z-index: 10002;
      pointer-events: auto;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-decoration: none;
      flex-shrink: 0;

      &:hover {
        transform: translateY(-2px);
      }

      button {
        position: relative;
        z-index: 10003;
        pointer-events: auto;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* Garantir que todos os botões funcionem */
      &:nth-last-child(1),
      &:nth-last-child(2) {
        z-index: 10004;
        
        button {
          z-index: 10005;
        }
      }
    }
  }

  @media (max-width: 950px) {
    nav {
      display: none;
    }
  }

  @keyframes headerSlideDown {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes headerGlow {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.8;
    }
  }

`
