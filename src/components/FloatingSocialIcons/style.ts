import styled from 'styled-components'

export const FloatingContainer = styled.div`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1000;
  pointer-events: auto;

  a {
    display: block;
    background: linear-gradient(
      135deg,
      rgba(163, 145, 133, 0.15),
      rgba(139, 125, 107, 0.15)
    );
    border: 1px solid rgba(163, 145, 133, 0.3);
    border-radius: 50%;
    padding: 0.75rem;
    transition: all 0.4s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 0 20px rgba(163, 145, 133, 0.1);
    backdrop-filter: blur(10px);

    &:hover {
      background: linear-gradient(
        135deg,
        rgba(163, 145, 133, 0.25),
        rgba(139, 125, 107, 0.25)
      );
      border-color: rgba(163, 145, 133, 0.5);
      box-shadow: 0 8px 25px rgba(163, 145, 133, 0.4),
        0 0 40px rgba(163, 145, 133, 0.2);
    }

    img {
      display: block;
      border-radius: 50%;
      filter: brightness(0.7) contrast(1.2);
      transition: all 0.4s ease;
    }

    &:hover img {
      filter: brightness(1) contrast(1.3) saturate(1.1);
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
    left: 10px;
    gap: 0.8rem;

    a {
      padding: 0.5rem;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`
