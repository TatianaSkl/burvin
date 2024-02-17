import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import img from 'images/img';
const { logoD } = img;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0 8px 0;
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
  background: url(${logoD}) no-repeat 0 -50px;
  cursor: pointer;
  width: 210px;
  height: 50px;
`;

export const WrapperMobil = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
