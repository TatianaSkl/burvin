import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1200;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  overflow-y: auto;
  width: auto;
  max-height: 100%;
  background-color: transparent;
`;

export const IconClose = styled(AiOutlineClose)`
  color: ${props => props.theme.colors.black};
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
