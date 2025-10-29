import styled from 'styled-components'

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primaryDefault};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;

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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: ${(props) => props.theme.primaryDark};
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 25px rgba(163, 145, 133, 0.6),
      0 0 50px rgba(163, 145, 133, 0.3);
  }

  &:hover::before {
    left: 100%;
  }
`
export const InvisibleButton = styled(DefaultButton)`
  background: transparent;
`
export const SmallOutlineButton = styled(DefaultButton)`
  padding: 0.62rem 2rem;
  background: transparent;

  border: 1px solid #ffffff;
  border-radius: 6px;

  &:hover {
    border: 1px solid transparent;
  }
`
export const SmallInvisibleButton = styled(DefaultButton)`
  padding: 0.62rem 2rem;
  background: transparent;

  border: 1px solid transparent;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme.primaryDark};
  }
`
