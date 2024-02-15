import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.colors.grey};
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  transition-property: transform, color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    color: ${props => props.theme.colors.black};
  }
  @media (min-width: 1200px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
