import styled from 'styled-components'

export const SocialProofContainer = styled.section`
  padding: 4rem 0;

  h2 {
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 300;
    position: relative;

    &:after {
      content: '';
      width: 60px;
      height: 2px;
      background: #a39185;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2rem;
    }

    .testimonials-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`

export const TestimonialCard = styled.div`
  background: linear-gradient(135deg, rgba(163, 145, 133, 0.1), rgba(28, 28, 28, 0.9));
  border: 1px solid rgba(163, 145, 133, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(163, 145, 133, 0.2);
  }

  p {
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .author {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    strong {
      color: #a39185;
      font-size: 1rem;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    p {
      font-size: 1rem;
    }
  }
`

export const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  margin-bottom: 1rem;

  .star {
    color: rgba(163, 145, 133, 0.3);
    font-size: 1.2rem;

    &.filled {
      color: #a39185;
    }
  }
`


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  z-index: 1;


  p {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;

    color: ${(props) => props.theme.gray300};
    max-width: 392px;
  }

  a {
    display: flex;
    justify-content: flex-start;
  }

  button {
    max-width: 195px;
    margin-top: 1.5rem;
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 1024px) {
    a {
      justify-content: center;
      max-width: 100%;
      width: 100%;
    }
    button {
      max-width: 100%;
      width: 100%;
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  position: relative;

  .currentCard {
    transform: scale(1);
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 670px) {
    flex-direction: column;

    gap: 2rem;
    width: 100%;

    .currentCard {
      position: static;
      z-index: 0;
    }
  }
`

export const SocialProofCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: scale(0.7);

  background: linear-gradient(
        ${(props) => props.theme.gray700},
        ${(props) => props.theme.gray700}
      )
      padding-box,
    ${(props) => props.theme.gradientBorder} border-box;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 16px 0px 48px #a39185, -16px 0px 48px #a39185;

  padding: 2rem;
  gap: 2rem;

  width: 24.43rem;
  height: 16.75rem;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;

    width: 100%;

    .name {
      align-self: center;

      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 150%;

      color: ${(props) => props.theme.gray050};
    }
  }

  .content {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    color: ${(props) => props.theme.gray300};
  }

  @media (max-width: 670px) {
    transform: scale(1);
  }
`

export const TestimonialSection = styled.div`
  .testimonial-content {
    padding: 1rem;
    margin: 0;
  }
`

export const TestimonialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  .testimonial-content {
    text-align: center;
    max-width: 800px;

    p {
      color: #fff;
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    strong {
      color: #a39185;
      font-size: 1.1rem;
      display: block;
    }
  }
`
