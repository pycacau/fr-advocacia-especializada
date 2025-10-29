import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 100px;
  height: 100px;

  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;
  overflow: visible;

  padding: 0 1rem 0 1rem;

  background: ${(props) => props.theme.gradientDark};
  filter: drop-shadow(4px 21px 32px #a39185);
  backdrop-filter: blur(20px);
  box-shadow:
    0 0 30px rgba(163, 145, 133, 0.4),
    0 8px 32px rgba(0, 0, 0, 0.3),
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
      rgba(163, 145, 133, 0.6),
      transparent
    );
    animation: headerGlow 3s ease-in-out infinite;
  }

  /* Animação de entrada */
  animation: headerSlideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 600px) {
    max-height: 72px;
    padding: 0 1rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 100%;
    width: 100%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 10px rgba(163, 145, 133, 0.3));
  }

  a:last-child {
    img {
      opacity: 0;
      transform: translate(-100%, 0) scale(0.8);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      filter: drop-shadow(0 0 20px rgba(163, 145, 133, 0.5));
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
        rgba(163, 145, 133, 0.4),
        transparent
      );
      border-radius: 8px;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  &:hover {
    a:last-child {
      img {
        transform: translate(0, 0) scale(1);
        opacity: 1;
        filter: drop-shadow(0 0 25px rgba(163, 145, 133, 0.8));
      }

      &::before {
        opacity: 1;
      }
    }

    a:first-child img {
      transform: scale(1.05);
      filter: drop-shadow(0 0 15px rgba(163, 145, 133, 0.6));
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

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    a {
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: translateY(-2px);

        button {
          background: linear-gradient(135deg, #a39185, #8b7d6b);
          color: #fff;
          box-shadow: 0 4px 15px rgba(163, 145, 133, 0.4);
          transform: scale(1.02);
        }

        /* Efeito de brilho no hover */
        &::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg,
            transparent,
            rgba(163, 145, 133, 0.3),
            transparent
          );
          border-radius: 8px;
          z-index: -1;
          opacity: 0;
          animation: navGlow 0.6s ease-out;
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

  @keyframes navGlow {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
`
