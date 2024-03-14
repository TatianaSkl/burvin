import styled from '@emotion/styled';

export const ImageItem = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 100%;
  padding: 40px 0 40px;
  margin: 0 auto;
`;

export const ButtonNext = styled.button`
  position: absolute;
  z-index: 2;
  top: 48%;
  right: 12px;
  & svg {
    width: 18px;
    height: 18px;
    fill: ${props => props.theme.colors.black};
    @media (min-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;

export const ButtonPrev = styled.button`
  position: absolute;
  z-index: 2;
  top: 48%;
  left: 12px;
  & svg {
    width: 18px;
    height: 18px;
    fill: ${props => props.theme.colors.black};
    @media (min-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;
