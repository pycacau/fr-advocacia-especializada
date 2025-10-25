import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;

  padding: 0 1.5rem 0 1.5rem;

  background: linear-gradient(
        ${(props) => props.theme.gray800},
        ${(props) => props.theme.gray800}
      )
      padding-box,
    ${(props) => props.theme.gradientBorder} border-box;
  border-radius: 8px;
  border: 1px solid transparent;
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 1224px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    p {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;

      color: ${(props) => props.theme.gray500};
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

      background: linear-gradient(
            ${(props) => props.theme.gray700},
            ${(props) => props.theme.gray700}
          )
          padding-box,
        ${(props) => props.theme.gradientBorder} border-box;
      border-radius: 8px;
      border: 1px solid transparent;

      border-radius: 8px;

      cursor: pointer;

      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 15px 30px rgba(163, 145, 133, 0.5),
          0 0 40px rgba(163, 145, 133, 0.3);
      }
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0 0 0;

    div {
      flex-direction: column;
      flex-direction: column;
      align-items: flex-start;

      div {
        flex-direction: column;
        align-items: flex-start;
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
