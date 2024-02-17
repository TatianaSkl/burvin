import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
  opacity: 0;
  transition: opacity 2500ms cubic-bezier(0.4, 0, 0.2, 1);
  &.open {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 100vh;
  padding: 55px 20px 20px 20px;
  background-color: ${props => props.theme.colors.white};
  @media (min-width: 768px) {
    width: 350px;
    padding: 80px 32px 32px 32px;
  }
`;

export const IconClose = styled(AiOutlineClose)`
  color: ${props => props.theme.colors.black};
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  @media (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;

export const WrapperMobil = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
