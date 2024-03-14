import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px 12px 8px 12px;
  background-color: ${props => props.theme.colors.white};
`;
export const LabelForm = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const InputForm = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  padding: 11px 12px;
  margin-bottom: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
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
  border: 1px solid;
  border-radius: 3px;

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
