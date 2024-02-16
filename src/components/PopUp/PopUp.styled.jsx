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
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1200px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  overflow-y: auto;
  width: calc(100vw - 24px);
  height: calc(100vh - 24px);
  background-color: transparent;
  @media (min-width: 768px) {
    margin: 24px auto;
    width: auto;
    height: auto;
  }
`;

export const ImageItem = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  padding: 40px 0 40px;
  @media (min-width: 768px) {
    max-height: 100%;
  }
`;

export const IconClose = styled(AiOutlineClose)`
  color: ${props => props.theme.colors.white};
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
