import styled from 'styled-components'

export const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  position: relative;
  overflow: visible;

  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  position: relative;
  width: 100%;
  max-width: 1400px;
  padding: 6rem 2rem;
  z-index: 1;

  .image-container {
    position: relative;
    opacity: 0;
    transform: translateX(-50px) scale(0.9);
    animation: slideInLeft 1s ease-out 0.3s forwards;

    .profile-image {
      border-radius: 30px;
      box-shadow:
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 0 100px rgba(163, 145, 133, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      border: 3px solid rgba(163, 145, 133, 0.3);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
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
          rgba(163, 145, 133, 0.1),
          transparent
        );
        animation: imageShimmer 4s ease-in-out infinite;
        pointer-events: none;
      }

      &:hover {
        box-shadow:
          0 35px 70px rgba(0, 0, 0, 0.4),
          0 0 150px rgba(163, 145, 133, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
        transform: scale(1.02) rotate(1deg);
        border-color: rgba(163, 145, 133, 0.6);
      }
    }

    .image-glow {
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: linear-gradient(135deg, rgba(163, 145, 133, 0.1), rgba(139, 125, 107, 0.05));
      border-radius: 25px;
      filter: blur(10px);
      opacity: 0.3;
      animation: pulseGlow 4s ease-in-out infinite;
      z-index: -1;
    }

    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;

      .justice-scale {
        position: absolute;
        font-size: 1.5rem;
        opacity: 0.4;
        animation: float 6s ease-in-out infinite;
        transition: all 0.3s ease;
        filter: drop-shadow(0 0 5px rgba(163, 145, 133, 0.3));

        &:hover {
          opacity: 0.8;
          transform: scale(1.2);
          filter: drop-shadow(0 0 10px rgba(163, 145, 133, 0.6));
        }

        &.scale-1 {
          top: 10px;
          right: 10px;
          animation-delay: 0s;
        }

        &.scale-2 {
          bottom: 30px;
          left: 10px;
          animation-delay: 2s;
        }

        &.scale-3 {
          top: 40%;
          left: 5px;
          animation-delay: 4s;
        }
      }
    }
  }

  .text-content {
    opacity: 0;
    transform: translateX(50px);
    animation: slideInRight 1s ease-out 0.5s forwards;

    .cta-title {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 3.5rem;
      line-height: 125%;
      margin-bottom: 2rem;

      background: linear-gradient(
        135deg,
        ${(props) => props.theme.gray100},
        #a39185,
        ${(props) => props.theme.gray100}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 30px rgba(163, 145, 133, 0.4);

      animation: titleGlow 4s ease-in-out infinite;
      position: relative;

      /* Efeito de brilho pulsante removido para evitar bug */

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 0;
        height: 4px;
        background: linear-gradient(90deg, #a39185, #8b7d70, #a39185);
        border-radius: 2px;
        animation: underlineExpand 2s ease-out 1s forwards;
        box-shadow: 0 0 10px rgba(163, 145, 133, 0.6);
      }
    }

    .text-block {
      margin-bottom: 2.5rem;

      .cta-description {
        font-family: 'Fira Sans', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 160%;
        color: ${(props) => props.theme.gray300};
        margin-bottom: 1.5rem;
        opacity: 0.9;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .credentials {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      .credential-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: rgba(163, 145, 133, 0.05);
        border-radius: 12px;
        border: 1px solid rgba(163, 145, 133, 0.1);
        backdrop-filter: blur(5px);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        cursor: pointer;

        /* Brilho no hover */
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
            rgba(163, 145, 133, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        &:hover {
          background: rgba(163, 145, 133, 0.1);
          transform: translateX(15px) scale(1.02);
          box-shadow:
            0 8px 25px rgba(163, 145, 133, 0.3),
            0 0 40px rgba(163, 145, 133, 0.2);

          &::before {
            left: 100%;
          }

          .credential-icon {
            transform: scale(1.1) rotate(5deg);
            filter: brightness(1) drop-shadow(0 0 8px rgba(163, 145, 133, 0.5));
          }

          span {
            color: #a39185;
            text-shadow: 0 0 8px rgba(163, 145, 133, 0.4);
          }
        }

        .credential-icon {
          width: 1.5rem;
          height: 1.5rem;
          min-width: 1.5rem;
          transition: all 0.3s ease;
          filter: brightness(0.7);
        }

        span {
          font-family: 'Fira Sans', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          color: ${(props) => props.theme.gray200};
          transition: all 0.3s ease;

          a {
            color: inherit;
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover {
              color: #a39185;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .branchBg {
    position: absolute;
    right: -5%;
    top: 20%;
    z-index: 0;
    opacity: 0.3;
    filter: blur(2px);
    transform: scaleX(-1) rotate(-15deg);
  }

  @media (max-width: 1200px) {
    gap: 4rem;
    padding: 4rem 2rem;

    .cta-title {
      font-size: 3rem;
    }
  }

  @media (max-width: 1024px) {
    gap: 3rem;

    .cta-title {
      font-size: 2.8rem;
    }

    .image-container .profile-image {
      width: 400px;
      height: 550px;
    }
  }

  @media (max-width: 940px) {
    .image-container .profile-image {
      width: 350px;
      height: 480px;
    }
  }

  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    text-align: center;

    .cta-title {
      font-size: 2.5rem;
    }

    .text-content {
      order: -1;
    }

    .image-container .profile-image {
      width: 300px;
      height: 410px;
    }

    .text-content .credentials {
      grid-template-columns: 1fr;
      align-items: center;

      .credential-item {
        &:hover {
          transform: translateY(-5px) translateX(0);
        }
      }
    }
  }

  @media (max-width: 670px) {
    padding: 3rem 1rem;

    .cta-title {
      font-size: 2rem;
    }

    .text-block .cta-description {
      font-size: 1.1rem;
    }

    .image-container .profile-image {
      width: 280px;
      height: 385px;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .cta-title {
      font-size: 1.75rem;
    }

    .text-block .cta-description {
      font-size: 1rem;
    }

    .image-container .profile-image {
      width: 250px;
      height: 344px;
    }

    .text-content .credentials .credential-item {
      padding: 0.8rem;
      gap: 0.8rem;

      span {
        font-size: 0.9rem;
      }
    }
  }

  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulseGlow {
    0%, 100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(5deg);
    }
  }

  @keyframes titleGlow {
    0%, 100% {
      text-shadow: 0 0 20px rgba(163, 145, 133, 0.5),
        0 0 40px rgba(163, 145, 133, 0.3);
    }
    50% {
      text-shadow: 0 0 30px rgba(163, 145, 133, 0.8),
        0 0 60px rgba(163, 145, 133, 0.6), 0 0 90px rgba(163, 145, 133, 0.4);
    }
  }

  @keyframes underlineExpand {
    0% {
      width: 0;
    }
    100% {
      width: 200px;
    }
  }

  @keyframes imageShimmer {
    0%, 100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    50% {
      opacity: 0.3;
      transform: translateX(50%) translateY(50%) rotate(180deg);
    }
  }

  @keyframes titleShimmer {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 0.4;
    }
  }

  @keyframes shimmer {
    0%, 100% {
      opacity: 0.3;
      transform: translateX(-100%) translateY(-100%);
    }
    50% {
      opacity: 0.6;
      transform: translateX(100%) translateY(100%);
    }
  }

  .animate-in {
    animation: fadeInUp 0.8s ease-out forwards !important;
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
`
