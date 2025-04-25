import styled from '@emotion/styled';

export const Item = styled.li`
  width: 274px;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.small};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const WrapperFoto = styled.div`
  position: relative;
  height: 330px;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 150%;
`;

export const WrapperModel = styled.span`
  font-weight: 800;
`;

export const Wrap = styled.div`
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Text = styled.div`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
`;

export const TextDescription = styled.div`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
  text-align: justify;
  padding: 8px 8px 0 8px;
`;

export const SpanDescription = styled.span`
  color: blue;
  text-decoration: underline;
  font-size: 14px;
  margin-left: 14px;
`;

export const PressButton = styled.button`
  width: 100%;
  padding: 8px;
  border: 1px solid;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow, background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.medium};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  & svg {
    width: 18px;
    height: 18px;
    fill: ${props => (props.isAdvertsInFavorites ? '#c00808' : 'none')};
    stroke: ${props => (props.isAdvertsInFavorites ? 'none' : '#c00808')};
    stroke-width: ${props => (props.isAdvertsInFavorites ? '0' : '100px')};
    pointer-events: none;
  }
`;
export const IconPlus = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  & svg {
    width: 18px;
    height: 18px;
  }
`;
export const IconVideo = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  & svg {
    color: red;
    width: 18px;
    height: 18px;
  }
`;

export const TextSpan = styled.span`
  color: rgba(8, 8, 8, 0.5);
  font-size: 13px;
  text-decoration: line-through;
`;

export const WrapperPct = styled.div`
  font-size: 12px;
  color: #f993b9;
  border: 1px solid #f993b9;
  margin-left: 8px;
  padding: 0 3px;
  height: 20px;
  min-width: 45px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const TextStatus = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: ${props => props.theme.colors.white};
  font-size: 12px;
  border-radius: 4px;
  padding: 2px 4px 2px 4px;
  color: ${({ children }) =>
    children === 'В наявності'
      ? '#0cb96e'
      : children === 'Доставимо за тиждень'
      ? '#a30505'
      : children === 'Очікуємо'
      ? '#f3f709'
      : 'inherit'};
  font-weight: 600;
  box-shadow: ${props => props.theme.shadows.small};
  text-shadow: 1px 1px 2px rgba(92, 95, 94, 0.5);
`;
