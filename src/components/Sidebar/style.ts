import styled from 'styled-components'

export const SidebarButton = styled.img`
  background: transparent;
  border: none;
  cursor: pointer;

  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 7;
  width: 24px;
  height: 24px;

  @media (min-width: 950px) {
    display: none;
  }
`

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  transition: display 5s;

  width: 100%;
  height: 100%;
  padding: 2rem;

  z-index: 6;

  a {
    display: block;
    width: 100%;

    button {
      width: 100%;
      text-align: left;
      justify-content: flex-start;
    }
  }

  p {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    color: ${(props) => props.theme.gray100};
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .socialNav {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;

    a {
      background: linear-gradient(
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.04)
          )
          padding-box,
        ${(props) => props.theme.gradientBorder} border-box;
      border-radius: 8px;
      border: 1px solid transparent;

      border-radius: 8px;

      cursor: pointer;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 0.5rem;

      &:hover {
        background: rgba(163, 145, 133, 0.1);
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    img {
      width: 120px;
      height: auto;
    }

    p {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 150%;

      color: ${(props) => props.theme.gray050};
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    nav {
      gap: 1rem;
    }

    .socialNav {
      gap: 1rem;
    }

    footer {
      gap: 0.75rem;

      img {
        width: 100px;
      }

      p {
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    nav {
      gap: 0.75rem;
    }

    .socialNav {
      gap: 0.75rem;
    }

    footer {
      gap: 0.5rem;

      img {
        width: 80px;
      }

      p {
        font-size: 0.625rem;
      }
    }
  }
`
