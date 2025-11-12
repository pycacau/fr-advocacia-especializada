import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.gradientDark};
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(145, 145, 145, 0.3), transparent);
    animation: headerGlow 3s ease-in-out infinite;
  }

  @keyframes headerGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }

  @media (max-width: 600px) {
    height: 100px;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1224px;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 950px) {
    display: none;
  }
`

export const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    transition: all 0.4s ease;
    filter: drop-shadow(0 0 10px rgba(145, 145, 145, 0.3));
  }

  button {
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);

    img {
      filter: drop-shadow(0 0 15px rgba(145, 145, 145, 0.6));
    }
  }

  &.extended {
    img {
      opacity: 0;
      transform: translate(-100%, 0) scale(0.8);
      transition: all 0.6s ease;
      filter: drop-shadow(0 0 20px rgba(145, 145, 145, 0.5));
    }

    overflow: hidden;

    @media (max-width: 1240px) {
      display: none;
    }
  }

  @media (max-width: 360px) {
    img {
      width: 32px;
    }
  }
`
