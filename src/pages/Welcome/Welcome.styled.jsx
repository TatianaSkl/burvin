import styled from '@emotion/styled';

export const WrapperWelcom = styled.div`
  position: relative;
  margin-top: -66px;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 1s ease-in-out;
`;

export const ButtonGo = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  padding: 12px 52px;
  border: 1px solid;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: opacity, box-shadow, background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
    opacity: 1;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }
`;
