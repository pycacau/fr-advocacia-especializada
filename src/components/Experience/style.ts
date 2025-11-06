import styled from 'styled-components'

export const ExperienceContainer = styled.section`
  padding: 4rem 2rem;
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`

export const HeaderSection = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 5rem auto;

  .title {
    font-family: 'Lato', sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.gray100};
    margin-bottom: 1rem;
    line-height: 125%;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out 0.2s forwards;

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

    /* Brilho pulsante */
    animation:
      fadeInUp 0.8s ease-out 0.2s forwards,
      textGlow 3s ease-in-out infinite 1s;

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

  .description {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 29px;
    color: ${(props) => props.theme.gray200};
    opacity: 0.8;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out 0.4s forwards;

    max-width: 635px;
    margin: 0 auto;
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
`

export const SnakeContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    gap: 1rem;
  }
`

export const StatCard = styled.div`
  width: 100%;
  min-height: 18rem;
  z-index: 1;

  background: linear-gradient(
        rgba(31, 41, 55, 0.95),
        rgba(17, 24, 39, 0.95)
      )
      padding-box,
    linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.3)) border-box;
  border: 1px solid transparent;
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  overflow: hidden;
  cursor: pointer;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
      rgba(163, 145, 133, 0.05) 0%,
      transparent 50%,
      rgba(163, 145, 133, 0.02) 100%);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);

    &::before {
      opacity: 1;
    }
  }

  .stat-icon {
    font-size: 2.5rem;
    color: #a39185;
    transition: all 0.3s ease;
    margin-bottom: 0.5rem;
    opacity: 0.8;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      filter: drop-shadow(0 0 8px rgba(163, 145, 133, 0.4));
    }
  }

  .stat-value {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 1.1;
    color: ${(props) => props.theme.gray100};
    margin: 0;
    text-align: center;
    transition: all 0.3s ease;

    &.success {
      color: #10b981;
      text-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme.gray100};
    margin: 0.5rem 0 0.25rem 0;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      color: #a39185;
    }
  }

  .description {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.4;
    color: ${(props) => props.theme.gray300};
    margin: 0;
    text-align: center;
    opacity: 0.8;
    transition: all 0.3s ease;
    max-width: 90%;

    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.gray200};
    }
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
    min-height: 16rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-height: 14rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 12rem;
  }
`

// Add shimmer animation
export const globalAnimations = `
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

  @keyframes expandTitleLine {
    0% {
      width: 0;
    }
    100% {
      width: 120px;
    }
  }

  @keyframes fadeInLine {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes titleGlow {
    0%, 100% {
      text-shadow: 0 0 30px rgba(163, 145, 133, 0.4);
    }
    50% {
      text-shadow: 0 0 50px rgba(163, 145, 133, 0.8), 0 0 70px rgba(163, 145, 133, 0.6);
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

  @keyframes underlineFlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
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

  @keyframes lineShimmer {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  .animate-in {
    animation: fadeInUp 0.8s ease-out forwards !important;
  }
`
