import styled from '@emotion/styled';

export const Form = styled.form`
  border: 2px solid rgba(33, 33, 33, 0.2);
  padding: 11px 12px;
`;
export const LabelForm = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  margin-bottom: 10px;
`;
export const InputForm = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 11px 12px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 4px;
  outline: transparent;
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: border-color, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const ButtonForm = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  overflow: hidden;
  border-radius: 4px;

  box-shadow: ${props => props.theme.shadows.medium};

  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.accent};
  font-weight: 600;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
    background-color: ${props => props.theme.colors.white};
  }
`;
