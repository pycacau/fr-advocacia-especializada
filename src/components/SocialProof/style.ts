import styled from 'styled-components'

export const SocialProofContainer = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: visible;

  .section-title {
    color: ${(props) => props.theme.gray100};
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;

    background: linear-gradient(
      135deg,
      ${(props) => props.theme.gray100},
      #a39185,
      ${(props) => props.theme.gray100}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    &::after {
      content: '';
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #a39185, #8b7d70);
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
      animation: expandTitleLine 1.2s ease-out 0.5s forwards;
    }

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(145, 145, 145, 0.4), transparent);
      border-radius: 1px;
      opacity: 0;
      animation: fadeInLine 1s ease-out 0.3s forwards;
    }
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    padding: 4rem 0;

    .section-title {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .testimonials-grid {
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .section-title {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }

    .testimonials-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .section-title {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }

    .testimonials-grid {
      gap: 1.5rem;
    }
  }
`

export const TestimonialCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(26, 24, 28, 0.95) 0%,
    rgba(28, 26, 30, 0.95) 100%
  );
  border: 1px solid rgba(145, 145, 145, 0.2);
  border-radius: 40px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 60px rgba(145, 145, 145, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.5),
      0 0 100px rgba(145, 145, 145, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);

    .card-decoration .decoration-line {
      width: 100%;
      background: linear-gradient(90deg, #a39185, #8b7d70);
      box-shadow: 0 0 15px rgba(145, 145, 145, 0.5);
    }

    .author-avatar {
      transform: scale(1.1);
      box-shadow: 0 0 25px rgba(163, 145, 133, 0.6);
    }

    .quote-icon {
      transform: scale(1.1) rotate(5deg);
      color: rgba(145, 145, 145, 0.6);
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;

    .quote-icon {
      font-size: 4rem;
      color: rgba(145, 145, 145, 0.3);
      font-family: 'Georgia', serif;
      line-height: 1;
      margin-top: -10px;
    }
  }

  .testimonial-content {
    margin-bottom: 2rem;

    .testimonial-text {
      color: ${(props) => props.theme.gray200};
      font-size: 1.1rem;
      line-height: 1.7;
      font-style: italic;
      margin: 0;
      position: relative;

      &::before {
        content: '"';
        font-size: 2rem;
        color: rgba(145, 145, 145, 0.2);
        position: absolute;
        top: -10px;
        left: -15px;
        font-family: 'Georgia', serif;
      }

      &::after {
        content: '"';
        font-size: 2rem;
        color: rgba(145, 145, 145, 0.2);
        position: absolute;
        bottom: -20px;
        right: -15px;
        font-family: 'Georgia', serif;
      }
    }
  }

  .author-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(145, 145, 145, 0.2), rgba(139, 125, 107, 0.2));
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(145, 145, 145, 0.3);
      backdrop-filter: blur(5px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(145, 145, 145, 0.4), rgba(139, 125, 107, 0.4));
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: -1;
      }

      .avatar-initials {
        font-size: 1.1rem;
        font-weight: 600;
        color: #a39185;
        text-transform: uppercase;
        transition: color 0.3s ease;
      }

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 25px rgba(145, 145, 145, 0.6);

        &::before {
          opacity: 1;
        }

        .avatar-initials {
          color: #ffffff;
        }
      }
    }

    .author-info {
      flex: 1;

      .author-name {
        display: block;
        color: ${(props) => props.theme.gray100};
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      .author-role {
        display: block;
        color: rgba(145, 145, 145, 0.8);
        font-size: 0.9rem;
        font-weight: 400;
      }
    }
  }

  .card-decoration {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .decoration-line {
      flex: 1;
      height: 2px;
      background: rgba(145, 145, 145, 0.2);
      border-radius: 1px;
      transition: all 0.3s ease;
    }

    .decoration-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a39185, #8b7d70);
      box-shadow: 0 0 10px rgba(145, 145, 145, 0.5);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    .card-header {
      margin-bottom: 1.25rem;

      .quote-icon {
        font-size: 3rem;
      }
    }

    .testimonial-content .testimonial-text {
      font-size: 1rem;
    }

    .author-section {
      gap: 0.8rem;

      .author-avatar {
        width: 45px;
        height: 45px;

        .avatar-initials {
          font-size: 1rem;
        }
      }

      .author-info {
        .author-name {
          font-size: 1rem;
        }

        .author-role {
          font-size: 0.85rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    .card-header .quote-icon {
      font-size: 2.5rem;
    }

    .testimonial-content .testimonial-text {
      font-size: 0.95rem;
    }
  }
`

export const StarRating = styled.div`
  display: flex;
  gap: 0.3rem;

  .star {
    color: rgba(163, 145, 133, 0.3);
    font-size: 1.3rem;
    transition: all 0.3s ease;

    &.filled {
      color: #a39185;
    }
  }
`

// Global animations
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

  .animate-in {
    animation: fadeInUp 0.8s ease-out forwards !important;
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
