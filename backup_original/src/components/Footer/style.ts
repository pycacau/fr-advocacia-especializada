import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;

  padding: 0 1.5rem 0 1.5rem;

  background: linear-gradient(135deg, ${(props) => props.theme.gray800} 0%, ${(props) => props.theme.gray900} 100%);
  border-radius: 16px;
  border: 1px solid rgba(163, 145, 133, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  max-width: 1224px;
  margin: 0 auto;
  padding: 2rem 0;

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;

    div:first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      img {
        width: 54px;
        height: 48px;
      }

      div {
        text-align: left;

        p {
          font-family: 'Fira Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 150%;

          color: ${(props) => props.theme.gray500};
          margin: 0;
        }
      }
    }

    div:last-child {
      display: flex;
      gap: 2rem;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;

        p {
          font-family: 'Fira Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 150%;

          color: ${(props) => props.theme.gray500};
          margin: 0;
        }

        strong {
          color: ${(props) => props.theme.gray300};
        }

        a {
          color: ${(props) => props.theme.gray500};
          text-decoration: none;
          text-shadow: 0 0 8px rgba(163, 145, 133, 0.3);
          transition: all 0.3s ease;

          &:hover {
            color: ${(props) => props.theme.gray300};
            text-shadow: 0 0 12px rgba(163, 145, 133, 0.6), 0 0 20px rgba(163, 145, 133, 0.4);
          }
        }
      }
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.5rem 0 2.5rem 0;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background: linear-gradient(135deg, rgba(163, 145, 133, 0.1) 0%, rgba(163, 145, 133, 0.05) 100%);
      border-radius: 12px;
      border: 1px solid rgba(163, 145, 133, 0.3);
      padding: 0.5rem;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(163, 145, 133, 0.3);
        background: linear-gradient(135deg, rgba(163, 145, 133, 0.2) 0%, rgba(163, 145, 133, 0.1) 100%);
      }
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;

    div:first-child {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      div:first-child {
        align-items: flex-start;
      }

      div:last-child {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      gap: 1.5rem;
      padding: 2rem 0 2rem 0;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1rem 0 1rem;

    nav {
      gap: 1rem;
      padding: 1.5rem 0 1.5rem 0;
    }
  }
`
