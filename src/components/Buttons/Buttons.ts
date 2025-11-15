import styled from 'styled-components'

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primaryDefault};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${(props) => props.theme.gray100};

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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    background: ${(props) => props.theme.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(31, 41, 55, 0.4),
      0 0 50px rgba(31, 41, 55, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  &:hover::before {
    left: 100%;
  }

  /* Garantir que o texto fique acima do efeito de brilho */
  > * {
    position: relative;
    z-index: 2;
  }
`
export const InvisibleButton = styled(DefaultButton)`
  background: transparent;
`
export const SmallOutlineButton = styled(DefaultButton)`
  padding: 0.62rem 2rem;
  background: transparent;
  overflow: hidden;

  border: 1px solid #ffffff;
  border-radius: 6px;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }
`
export const SmallInvisibleButton = styled(DefaultButton)`
  padding: 0.62rem 2rem;
  background: ${(props) => props.theme.primaryDefault};
  overflow: hidden;

  border: 1px solid ${(props) => props.theme.primaryDefault};
  border-radius: 6px;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.primaryDark};
    border-color: ${(props) => props.theme.primaryDark};
    box-shadow: 0 4px 15px rgba(31, 41, 55, 0.3);
  }
`
