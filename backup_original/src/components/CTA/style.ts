import styled from 'styled-components'

export const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  position: relative;

  background: ${(props) => props.theme.gradientSection};
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8rem;

  position: relative;
  width: 100%;
  max-width: 1224px;

  padding: 0 2rem 0 2rem;

  .branchBg {
    position: absolute;
    right: -2%;
    top: 15%;
    z-index: 0;

    transform: scaleX(-1);
    rotate: -10deg;
  }

  h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 125%;

    color: ${(props) => props.theme.gray100};

    background: linear-gradient(
      135deg,
      ${(props) => props.theme.gray100},
      #a39185
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 20px rgba(163, 145, 133, 0.3);

    animation: glow 3s ease-in-out infinite;
  }

  p {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;

    max-width: 418px;

    color: ${(props) => props.theme.gray300};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    z-index: 1;

    max-width: 500px;
    width: 100%;
  }

  button {
    max-width: 195px;
    margin-top: 1.5rem;
  }

  img {
    margin-top: -4.25rem;
    margin-left: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 3rem;

    h1 {
      font-size: 3rem !important;
    }
  }

  @media (max-width: 940px) {
    img:first-child {
      width: 250px;
      height: 344px;
    }
  }

  @media (max-width: 768px) {
    gap: 2rem;

    h1 {
      font-size: 2.5rem !important;
    }

    p {
      font-size: 1.125rem;
    }

    img:first-child {
      width: 280px;
      height: 385px;
    }
  }

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2rem !important;
    }

    p {
      font-size: 1rem;
    }

    img:first-child {
      margin-top: 0;
      margin-left: 0;

      z-index: 1;
    }

    div {
      align-items: center;
      padding-top: 2rem;

      button {
        width: 100%;
        max-width: 428px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0 1rem 0 1rem;

    h1 {
      font-size: 1.75rem !important;
    }

    p {
      font-size: 0.875rem;
    }

    img:first-child {
      width: 250px;
      height: 344px;
    }
  }

  @keyframes glow {
    0%,
    100% {
      text-shadow: 0 0 15px rgba(163, 145, 133, 0.7),
        0 0 30px rgba(163, 145, 133, 0.4);
    }
    50% {
      text-shadow: 0 0 25px rgba(163, 145, 133, 1),
        0 0 50px rgba(163, 145, 133, 0.8), 0 0 75px rgba(163, 145, 133, 0.5);
    }
  }
`
