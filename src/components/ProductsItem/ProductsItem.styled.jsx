import styled from '@emotion/styled';

export const Item = styled.li`
  width: 274px;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.small};
`;

export const WrapperFoto = styled.div`
  position: relative;
  height: 268px;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`;

export const ImageCar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  margin: 0 8px 8px 8px;
  @media (min-width: 768px) {
    margin: 0 12px 12px 12px;
  }
  @media (min-width: 1200px) {
    margin: 0 16px 16px 16px;
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
  max-width: 274px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PressButton = styled.button`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  padding: 12px;
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
  @media (min-width: 768px) {
    margin-top: 18px;
    margin-bottom: 18px;
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
  bottom: 8px;
  right: 8px;
  cursor: pointer;
  & svg {
    width: 18px;
    height: 18px;
    /* fill: ${props => (props.isAdvertsInFavorites ? '#c00808' : 'none')};
    stroke: ${props => (props.isAdvertsInFavorites ? 'none' : '#c00808')};
    stroke-width: ${props => (props.isAdvertsInFavorites ? '0' : '100px')};
    pointer-events: none; */
  }
`;
