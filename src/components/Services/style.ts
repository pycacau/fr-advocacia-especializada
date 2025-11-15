import styled from 'styled-components'

export const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  padding: 100px 1.5rem 0 1.5rem;

  position: relative;
  overflow: visible;

  margin-bottom: 0;

  /* Fundo com gradiente sutil */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(163, 145, 133, 0.02) 0%,
      transparent 70%
    );
    z-index: 0;
  }

  .branchBg {
    position: absolute;
    right: -25%;
    top: -8%;

    transform: scaleX(-1);
    rotate: -10deg;
    opacity: 0.4;
    filter: blur(1px) drop-shadow(0 0 20px rgba(163, 145, 133, 0.2));
    z-index: 0;

    /* Animação sutil de flutuação */
    animation: branchFloat 6s ease-in-out infinite;
  }

  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    max-width: 1224px;
    width: 100%;
    position: relative;
    z-index: 1;

    &.animate-in .services-title {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    &.animate-in .services-subtitle {
      animation: fadeInUp 0.8s ease-out 0.4s forwards;
    }

    .services-title {
      color: ${(props) => props.theme.gray100};
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 2.5rem;
      line-height: 125%;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);

      background: linear-gradient(
        135deg,
        ${(props) => props.theme.gray100},
        #a39185,
        ${(props) => props.theme.gray100}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 30px rgba(163, 145, 133, 0.5);

      position: relative;

      /* Brilho pulsante removido */

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, #a39185, #8b7d70, #a39185);
        border-radius: 2px;
        animation: expandLine 1s ease-out 0.8s forwards;
        box-shadow: 0 0 10px rgba(163, 145, 133, 0.6);
      }

      @media (max-width: 580px) {
        font-size: 1.5rem;
      }
    }

    .services-subtitle {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 29px;
      color: ${(props) => props.theme.gray200};
      opacity: 0.8;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);

      max-width: 635px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(163, 145, 133, 0.5), transparent);
        border-radius: 1px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 80px 1.5rem 0 1.5rem;
    margin-bottom: 0;
  }

  @media (max-width: 580px) {
    padding: 60px 1rem 0 1rem;
    margin-bottom: 0;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  max-width: 1224px;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out 0.6s forwards;

  @media (max-width: 1150px) {
    gap: 1rem;
  }
  @media (max-width: 1120px) {
    gap: 1rem;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const ServiceCard = styled.div`
  width: 24rem;
  min-height: 18rem;
  z-index: 1;

  background: linear-gradient(
        rgba(31, 41, 55, 0.95),
        rgba(17, 24, 39, 0.95)
      )
      padding-box,
    linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.3)) border-box;
  border-radius: 48px;
  border: 1px solid transparent;

  padding: 1.5rem;
  overflow: hidden;
  cursor: pointer;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  backdrop-filter: blur(15px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 60px rgba(31, 41, 55, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;

  /* Brilho sutil no hover removido */

  @media (max-width: 1120px) {
    transform: scale(0.85);
  }
  @media (max-width: 1150px) {
    transform: scale(0.9);
  }

  &:hover,
  &:active {
    transform: translateY(-15px) scale(1.08) rotateX(8deg) rotateY(5deg);
    box-shadow:
      0 25px 60px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);

    .description {
      opacity: 1;
      transform: translateX(0);
    }

    .cases-badge {
      opacity: 1;
      transform: scale(1.08);
    }

    .header {
      transform: translateY(0);
    }

    .arrow-container {
      transform: translate(0, 0) scale(1.2) rotate(10deg);
    }

    .icon-wrapper {
      transform: scale(1.15) rotate(8deg);
    }
  }

  .service-card {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
    animation-play-state: paused;
  }

  h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 150%;
    color: ${(props) => props.theme.gray100};
    margin: 0;
    transition: color 0.3s ease;
  }

  .description {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 140%;
    color: ${(props) => props.theme.gray300};
    margin: 0;
    opacity: 0.8;
    transition: all 0.3s ease;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

    .cases-badge {
      position: relative;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transform: scale(1);

      .cases-number {
        font-family: 'Fira Sans', sans-serif;
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 150%;
        color: ${(props) => props.theme.gray500};
        background: linear-gradient(135deg, #a39185, #8b7d70);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        position: relative;
        z-index: 1;
      }

      .badge-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 120px;
        height: 25px;
        background: radial-gradient(
          ellipse,
          rgba(163, 145, 133, 0.3) 0%,
          rgba(163, 145, 133, 0.1) 50%,
          transparent 80%
        );
        opacity: 0;
        transition: all 0.4s ease;
        border-radius: 12px;
      }

      &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(135deg, rgba(163, 145, 133, 0.2), rgba(139, 125, 107, 0.2));
        border-radius: 16px;
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 0;
      }

      &:hover .badge-glow {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1);
      }

      &:hover::before {
        opacity: 1;
      }
    }

  .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    width: 100%;
  }

  .arrow-container {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    transform: translate(0, 0) scale(1);
    transition: all 0.3s ease;

    .arrow {
      width: 20px;
      height: 20px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: transform 0.3s ease;
    }

    &:hover .arrow {
      transform: rotate(45deg) scale(1.1);
    }
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    width: 100%;
    transform: translateY(0);
    transition: all 0.3s ease;

    .icon-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      background: linear-gradient(135deg, rgba(163, 145, 133, 0.1), rgba(139, 125, 107, 0.1));
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(163, 145, 133, 0.2);
      transition: all 0.3s ease;

      img {
        width: 32px;
        height: 32px;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        transition: transform 0.3s ease;
      }

      &:hover {
        background: linear-gradient(135deg, rgba(163, 145, 133, 0.2), rgba(139, 125, 107, 0.2));
        transform: scale(1.05);

        img {
          transform: scale(1.1);
        }
      }
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(-120%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInUp {
    0% {
      transform: translateY(200%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bounceIn {
    0% {
      transform: translate(-50%, 50%) scale(0.8);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 50%) scale(1.1);
      opacity: 1;
    }
    100% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeInUpScale {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes expandLine {
    0% {
      width: 0;
    }
    100% {
      width: 100px;
    }
  }

  @keyframes branchFloat {
    0%, 100% {
      transform: scaleX(-1) rotate(-10deg) translateY(0px);
    }
    50% {
      transform: scaleX(-1) rotate(-10deg) translateY(-10px);
    }
  }

  @keyframes textGlow {
    0%, 100% {
      text-shadow: 0 0 30px rgba(163, 145, 133, 0.5);
    }
    50% {
      text-shadow: 0 0 40px rgba(163, 145, 133, 0.8), 0 0 60px rgba(163, 145, 133, 0.4);
    }
  }

  .animate-in {
    animation: fadeInUp 0.8s ease-out forwards !important;
  }
`
