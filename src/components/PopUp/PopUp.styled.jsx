import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1200;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 12px auto 0 auto;
  overflow-y: auto;
  width: calc(100vw - 24px);
  max-width: 500px;
  height: auto;
  max-height: 100vh;
  background-color: ${props => props.theme.colors.white};
  border-radius: 12px;
  @media (min-width: 768px) {
    margin: 24px auto 0 auto;
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

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
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

export const ImageItem = styled.img`
  /* object-fit: cover; */
  border-radius: 12px 12px 0 0;
  width: auto;
  max-width: 100%;
  height: auto;
  @media (min-width: 768px) {
  }
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px 8px 8px;
  @media (min-width: 768px) {
    margin: 0 12px 12px 12px;
  }
  @media (min-width: 1200px) {
    margin: 0 16px 16px 16px;
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.grey};
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
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
