import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px 12px 8px 12px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 6px 6px 0 0;
  width: 280px;
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
  cursor: pointer;
  transition-property: border-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  background-color: ${props => props.theme.colors.white};
  &:hover {
    border-color: ${props => props.theme.colors.black};
  }
`;
export const ButtonForm = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 3px;
  transition-property: transform, background-color, border-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  background-color: ${props => props.theme.colors.accent};
  font-weight: 600;
  &:hover {
    transform: scale(1.02);
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.black};
  }
`;
