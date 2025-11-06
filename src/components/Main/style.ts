import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0;

  min-height: 100vh;
  position: relative;
  width: 100%;
  overflow: visible;

  > * {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .branchBg {
    position: fixed;
    right: -25%;
    top: -8%;
    transform: scaleX(-1);
    rotate: -10deg;
    opacity: 0.3;
    filter: blur(1px) drop-shadow(0 0 20px rgba(145, 145, 145, 0.2));
    z-index: 0;
    animation: branchFloat 6s ease-in-out infinite;
  }

  @keyframes branchFloat {
    0%, 100% {
      transform: scaleX(-1) rotate(-10deg) translateY(0);
    }
    50% {
      transform: scaleX(-1) rotate(-10deg) translateY(-10px);
    }
  }

  @media (max-width: 820px) {
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    gap: 0;
  }

  @media (max-width: 480px) {
    gap: 0;
  }
`

export const SocialLinks = styled.div`
  max-width: 1224px;
  width: 100%;

  position: sticky;
  bottom: 200px;

  margin: 0 0 0 1rem;

  @media (max-width: 820px) {
    display: none;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    a {
      background: linear-gradient(
            ${(props) => props.theme.gray700},
            ${(props) => props.theme.gray700}
          )
          padding-box,
        ${(props) => props.theme.gradientBorder} border-box;
      border-radius: 8px;
      border: 1px solid transparent;
      z-index: 3;

      border-radius: 8px;

      cursor: pointer;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ChatPopup = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;

  display: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    display: none;
  }

  .whatsapp-link {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 50%;
    width: 64px;
    height: 64px;

    background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
    box-shadow:
      0 8px 32px rgba(37, 211, 102, 0.3),
      0 0 60px rgba(37, 211, 102, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(12px);
    border: 2px solid rgba(255, 255, 255, 0.1);

    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: left 0.6s ease;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow:
        0 12px 40px rgba(37, 211, 102, 0.4),
        0 0 80px rgba(37, 211, 102, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    &:active {
      transform: scale(0.95);
    }

    img {
      width: 28px;
      height: 28px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }

    .pulse-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border: 2px solid #25d366;
      border-radius: 50%;
      opacity: 0;
      animation: pulse 2s infinite;
    }

    .pulse-ring-delay {
      animation-delay: 1s;
    }
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.7;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }
`
