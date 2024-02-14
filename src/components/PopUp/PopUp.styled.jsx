import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1200;
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: auto;
  width: calc(100vw - 24px);
  margin-top: 12px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 12px;
  @media (min-width: 768px) {
    width: auto;
    height: auto;
    margin-top: 32px;
  }
  @media (min-width: 1200px) {
    margin-top: 50px;
  }
`;

export const IconClose = styled(AiOutlineClose)`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  z-index: 2;
  top: 12px;
  right: 12px;
`;

export const WrapperFoto = styled.div`
  position: relative;
  border-radius: 12px;
`;

export const ImageCar = styled.img`
  object-fit: fill;
  border-radius: 12px 12px 0 0;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px;
  @media (min-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
  @media (min-width: 1200px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  font-weight: 500;
  line-height: 150%;
  @media (min-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
  @media (min-width: 1200px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
`;

export const Description = styled.p`
  margin: 8px 0 0 8px;
  font-size: 14px;
  line-height: 142.857%;
  @media (min-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
  @media (min-width: 1200px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

// export const LinkTel = styled.a`
//   margin-top: 16px;
//   display: inline-flex;
//   padding: 12px 50px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 12px;
//   background-color: ${props => props.theme.colors.accent};
//   color: ${props => props.theme.colors.white};
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 142.857%;
//   cursor: pointer;
//   box-shadow: ${props => props.theme.shadows.small};
//   transition-property: transform, box-shadow, background-color;
//   transition-duration: 0.25s;
//   transition-timing-function: ${props => props.theme.animation.cubicBezier};
//   &:hover {
//     transform: scale(1.02);
//     box-shadow: ${props => props.theme.shadows.medium};
//     background-color: #0b44cd;
//   }
// `;
