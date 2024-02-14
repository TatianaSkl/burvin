import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  margin-top: 40px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.colors.accent};
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
  transition-property: transform, color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    color: #0b44cd;
  }
  @media (min-width: 1440px) {
    margin-top: 79px;
  }
`;
