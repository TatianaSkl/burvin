import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import img from 'images/img';
const { logoD, logoM } = img;

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  margin: 0 auto;
  background-color: ${props => (props.backGround ? 'transparent' : 'white')};
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    padding: 8px 25px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 8px 10%;
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconMenu = styled(HiMenuAlt1)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.black};
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  @media (min-width: 768px) {
    margin-left: 16px;
  }
`;

export const WrapperLogo = styled(Link)`
  background: ${props =>
    props.backGround ? `url(${logoD}) no-repeat 0 -50px` : `url(${logoM}) no-repeat 0 -40px`};
  cursor: pointer;
  width: 210px;
  height: 50px;
`;

export const WrapperMobil = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
