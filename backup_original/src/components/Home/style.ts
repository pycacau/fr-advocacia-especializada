import styled from 'styled-components'

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;

  width: 100%;
  max-width: 1224px;

  padding: 0 2rem 0 2rem;

  .branchBg {
    position: absolute;
    left: -9%;
    top: 0.15%;
    z-index: 0;
  }

  .parallaxImg {
    height: 100%;
    width: 100%;
    max-width: 350px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(163, 145, 133, 0.2);
  }

  .paralaxContainer {
    position: absolute;
    right: 10.5%;
    top: 0;
    z-index: 1;

    animation: showElementLeft 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-style: preserve-3d;
  }

  .paralaxItem {
    position: absolute;
    width: 396px;
    height: 139px;
    right: -40%;
    top: 70%;

    animation: showElementTop 1s;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 8px;

    background: ${(props) => props.theme.gradientBorder};
    filter: drop-shadow(29px 4px 56px rgba(20, 20, 21, 0.25));
    backdrop-filter: blur(12px);

    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease;
    transform-style: preserve-3d;

    &:hover {
      transform: translateY(-10px) scale(1.05) rotateX(5deg);
      filter: drop-shadow(29px 4px 56px rgba(163, 145, 133, 0.8));
      background: linear-gradient(
        135deg,
        rgba(163, 145, 133, 0.9),
        rgba(139, 125, 107, 0.9)
      );
      box-shadow: 0 0 30px rgba(163, 145, 133, 0.6);
    }

    p {
      font-family: 'Lato';
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 29px;
      color: ${(props) => props.theme.gray200};
      opacity: 0.8;
      transition: color 0.5s ease;
    }

    strong {
      font-family: 'Lato';
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.37rem;
      color: ${(props) => props.theme.gray100};
      transition: color 0.5s ease;
    }

    &:hover p,
    &:hover strong {
      color: #fff;
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
        width: 273px;
        height: 96px;
        padding: 1.37rem;
        gap: 5.5px;

        p {
          font-size: 1rem;
          line-height: 20px;
        }

        strong {
          font-size: 1.37rem;
          line-height: 1.32rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .homeBg {
      display: flex;
      justify-content: center;
    }

    .paralaxContainer {
      position: relative;
      margin-top: 2rem;
      right: 0;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1rem 0 1rem;

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
`
export const HomeContent = styled.div`
  margin: 9rem 0 0 16%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  max-width: 550px;
  max-height: 566px;
  width: 44%;

  h1 {
    animation: showElementRight 1s;
    position: relative;
    cursor: pointer;

    background: linear-gradient(
      135deg,
      ${(props) => props.theme.gray100},
      #a39185
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 20px rgba(163, 145, 133, 0.3);

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #a39185, #8b7d6b);
      transition: width 0.5s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  p {
    font-family: 'Fira Sans';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;
    color: #a8a8aa;
    opacity: 0.8;

    animation: showElementRight 1.1s, fadeIn 2s ease-in-out infinite alternate;

    width: 100%;
    max-width: 350px;

    margin: 6.81rem 0 2rem 0;
    padding: 0 1.5rem 0 0;
  }

  .buttonContainer {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    animation: showElementRight 1.3s;

    width: 90%;
    max-width: 350px;

    a {
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      button {
        transition: all 0.3s ease;
        position: relative;
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
          transition: left 0.5s ease;
        }

        &:hover::before {
          left: 100%;
        }
      }
    }

    a:last-child:hover button {
      background: #a39185;
      color: #fff;
      box-shadow: 0 5px 15px rgba(163, 145, 133, 0.4);
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
    margin: 7rem 0 0 0%;

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
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;
      max-width: 100%;

      a {
        width: 100%;
        max-width: 306px;
      }

      button {
        width: 100%;
        max-width: 100%;
      }
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
`
