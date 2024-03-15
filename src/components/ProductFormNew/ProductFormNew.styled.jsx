import styled from '@emotion/styled';

export const Form = styled.form`
  border: 2px solid rgba(33, 33, 33, 0.2);
  padding: 20px 12px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 6px;
  width: 280px;
  @media (min-width: 768px) {
    width: 584px;
  }
`;

export const Wrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const LabelForm = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  margin-bottom: 8px;
`;

export const InputForm = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  padding: 6px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSizes.small};
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
  @media (min-width: 768px) {
    width: 180px;
    margin-bottom: 0;
  }
`;

export const SelectForm = styled.select`
  display: block;
  width: 100%;
  height: 35px;
  padding: 6px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSizes.small};
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
  @media (min-width: 768px) {
    width: 180px;
    margin-bottom: 0;
  }
`;

export const ButtonColor = styled.button`
  position: absolute;
  top: 640px;
  right: 16px;
  padding: 2px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition-property: transform, background-color, border-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  background-color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  &:hover {
    transform: scale(1.02);
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.black};
  }
  @media (min-width: 768px) {
    top: 220px;
    right: 392px;
  }
`;

export const ButtonSize = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 4px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition-property: transform, background-color, border-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  background-color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  &:hover {
    transform: scale(1.02);
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.black};
  }
  @media (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const ButtonForm = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  padding: 8px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;
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
