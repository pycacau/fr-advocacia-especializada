import styled from 'styled-components'

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  overflow: visible;

  width: 100%;
  max-width: 1224px;
  min-height: 100vh;
  height: 100vh;

  padding: 0 2rem 0 2rem;

  /* Ícones sociais fixados na seção Home */
  .floating-social-icons {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 10;
    pointer-events: auto;

    a {
      display: block;
      background: linear-gradient(
        135deg,
        rgba(145, 145, 145, 0.2),
        rgba(107, 107, 107, 0.2)
      );
      border: 1px solid rgba(145, 145, 145, 0.3);
      border-radius: 50%;
      padding: 0.5rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.1),
        0 0 15px rgba(145, 145, 145, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
      position: relative;
      overflow: hidden;

      /* Brilho sutil */
      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          45deg,
          transparent,
          rgba(255, 255, 255, 0.1),
          transparent
        );
        transform: rotate(45deg);
        transition: all 0.6s ease;
        opacity: 0;
      }

      &:hover {
      background: linear-gradient(
        135deg,
        rgba(145, 145, 145, 0.35),
        rgba(107, 107, 107, 0.35)
      );
      border-color: rgba(145, 145, 145, 0.6);
      box-shadow:
        0 4px 15px rgba(145, 145, 145, 0.2),
        0 0 25px rgba(145, 145, 145, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        transform: translateY(-2px) scale(1.02);

        &::before {
          opacity: 1;
          animation: iconShine 1.5s ease-in-out;
        }
      }

      img {
        display: block;
        border-radius: 50%;
        filter: brightness(0.8) contrast(1.1) saturate(0.9);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        z-index: 1;
      }

      &:hover img {
        filter: brightness(1.05) contrast(1.2) saturate(1.1);
        transform: scale(1.05);
      }
    }

    @media (max-width: 768px) {
      left: 15px;
      gap: 1rem;

      a {
        padding: 0.6rem;

        img {
          width: 28px;
          height: 28px;
        }
      }
    }

    @media (max-width: 480px) {
      display: none;
    }
  }

  /* Efeitos de fundo profissional sutis */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(145, 145, 145, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(145, 145, 145, 0.01) 0%, transparent 50%);
    animation: backgroundPulse 20s ease-in-out infinite;
    z-index: 0;
  }

  .branchBg {
    position: absolute;
    left: -9%;
    top: 0.15%;
    z-index: 0;
    transform: scaleX(-1);
    filter: drop-shadow(0 0 20px rgba(145, 145, 145, 0.3));
    animation: branchFloat 6s ease-in-out infinite;
  }

  .parallaxImg {
    height: 100%;
    width: 100%;
    max-width: 350px;
    border-radius: 30px;
    box-shadow:
      0 0 30px rgba(163, 145, 133, 0.3),
      0 0 60px rgba(163, 145, 133, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    position: relative;
  }

  .paralaxContainer {
    position: absolute;
    right: 10.5%;
    top: 0;
    z-index: 1;

    animation: showElementLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-style: preserve-3d;
  }

  .paralaxItem {
    position: absolute;
    width: 300px;
    height: 110px;
    right: -40%;
    top: 70%;

    animation: showElementTop 1.4s cubic-bezier(0.4, 0, 0.2, 1);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    gap: 6px;

    background:
      linear-gradient(135deg, rgba(163, 145, 133, 0.95), rgba(139, 125, 107, 0.9)),
      ${(props) => props.theme.gradientBorder};
    filter: drop-shadow(29px 4px 56px rgba(20, 20, 21, 0.25));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    border-radius: 18px;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;

    /* Brilho interno sutil */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 50%,
        rgba(255, 255, 255, 0.01) 100%
      );
      border-radius: 18px;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    &:hover {
      transform: translateY(-15px) scale(1.08) rotateX(8deg) rotateY(5deg);
      filter: drop-shadow(29px 4px 56px rgba(163, 145, 133, 0.9));
      background: linear-gradient(
        135deg,
        rgba(163, 145, 133, 1),
        rgba(139, 125, 107, 1)
      );
      box-shadow:
        0 0 50px rgba(163, 145, 133, 0.8),
        0 20px 40px rgba(0, 0, 0, 0.3);

      &::before {
        opacity: 1;
      }
    }

    p {
      font-family: 'Lato';
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.4;
      color: ${(props) => props.theme.gray200};
      opacity: 0.9;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    strong {
      font-family: 'Lato';
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.2;
      color: ${(props) => props.theme.gray100};
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &:hover p,
    &:hover strong {
      color: #fff;
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: 1024px) or (max-height: 690px) {
    .parallaxImg {
      width: 400px;
    }

    .paralaxContainer {
      right: 5%;
    }
  }

  @media (max-width: 850px) {
    .parallaxImg {
      width: 350px;
    }

    .paralaxContainer {
      top: 10%;
    }
  }

  @media (max-width: 821px) {
    .parallaxImg {
      width: 311px;
    }

    .paralaxContainer {
      top: 10%;

      .paralaxItem {
        width: 280px;
        min-height: 100px;
        padding: 1.5rem;
        gap: 0.5rem;

        p {
          font-size: 1.1rem;
          line-height: 1.4;
        }

        strong {
          font-size: 1.5rem;
          line-height: 1.2;
        }
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    min-height: auto;
    height: auto;
    padding: 0 1rem;

    .homeBg {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    }

    .paralaxContainer {
      position: relative;
      margin-top: 2rem;
      right: 0;
    }

    .branchBg {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1rem;

    .paralaxContainer {
      margin-top: 1.5rem;
    }
  }

  @keyframes showElementLeft {
    0% {
      transform: translateX(500px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes showElementTop {
    0% {
      transform: translateY(500px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes backgroundPulse {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.6;
    }
  }

  @keyframes branchFloat {
    0%, 100% {
      transform: translateY(0px) rotate(0deg) scaleX(-1);
    }
    25% {
      transform: translateY(-5px) rotate(1deg) scaleX(-1);
    }
    50% {
      transform: translateY(0px) rotate(0deg) scaleX(-1);
    }
    75% {
      transform: translateY(5px) rotate(-1deg) scaleX(-1);
    }
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }

  @keyframes iconShine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
`
export const HomeContent = styled.div`
  margin: 9rem 0 0 16%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  position: relative;

  max-width: 550px;
  max-height: 566px;
  width: 44%;

  h1 {
    animation: showElementRight 1s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    cursor: pointer;

    background: linear-gradient(
      135deg,
      ${(props) => props.theme.gray100} 0%,
      #a39185 50%,
      ${(props) => props.theme.gray100} 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 15px rgba(163, 145, 133, 0.2);
    animation: textShimmer 5s ease-in-out infinite;

    /* Brilho animado no texto sutil - removido para evitar retângulo */

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0;
      height: 4px;
      background: linear-gradient(90deg, #a39185, #8b7d6b, #a39185);
      background-size: 200% 200%;
      animation: underlineFlow 2s ease-in-out infinite;
      transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 3px;
    }

    &:hover::after {
      width: 100%;
      box-shadow: 0 0 20px rgba(163, 145, 133, 0.6);
    }
  }

  p {
    font-family: 'Fira Sans';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;
    color: #a8a8aa;
    opacity: 0.9;

    animation: showElementRight 1.1s cubic-bezier(0.4, 0, 0.2, 1);

    width: 100%;
    max-width: 350px;

    margin: 6.81rem 0 2rem 0;
    padding: 0 1.5rem 0 0;

    /* Sombra de texto sutil */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .buttonContainer {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    animation: showElementRight 1.3s cubic-bezier(0.4, 0, 0.2, 1);

    width: 90%;
    max-width: 350px;

    a {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: translateY(-8px) scale(1.02);
      }

      button {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        border-radius: 8px;

        /* Brilho sutil */
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          transition: left 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:hover::before {
          left: 100%;
        }

        /* Efeito de brilho adicional sutil */
        &::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg,
            transparent,
            rgba(163, 145, 133, 0.05),
            transparent
          );
          border-radius: 10px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        &:hover::after {
          opacity: 1;
        }
      }
    }

    a:last-child:hover button {
      background: linear-gradient(135deg, #a39185, #8b7d6b);
      color: #fff;
      box-shadow:
        0 8px 25px rgba(163, 145, 133, 0.3),
        0 0 30px rgba(163, 145, 133, 0.15);
      transform: translateY(-8px) scale(1.02);
    }
  }
  @media (max-width: 1024px) or (max-height: 690px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-height: 690px) {
    p {
      margin: 2.7rem 0 2rem 0;
    }
  }

  @media (max-width: 1120px) {
    margin: 9rem 0 0 10%;
  }

  @media (max-width: 1105px) {
    margin: 9rem 0 0 9%;
  }

  @media (max-width: 895px) {
    margin: 6rem 0 0 6%;

    .buttonContainer {
      width: 100%;
    }
  }

  @media (max-width: 821px) {
    margin: 7rem 0 0 0;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.125rem;
    }

    .buttonContainer {
      flex-direction: column;
      gap: 1rem;

      button {
        width: 90%;
      }
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    gap: 2rem;

    p {
      max-width: 100%;

      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }

    .buttonContainer {
      display: none;
    }
  }

  @keyframes showElementRight {
    0% {
      transform: translateX(-500px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes textShimmer {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes textGlow {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 0.6;
    }
  }

  @keyframes underlineFlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes textFade {
    0%, 100% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
  }
`
