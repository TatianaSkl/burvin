import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavUser = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const LinkNav = styled(NavLink)`
  padding: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  font-size: 14px;
  line-height: 128.571%;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &.active {
    border-color: ${props => props.theme.colors.white};
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
  @media (min-width: 1440px) {
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-color: ${props => props.theme.colors.accent};
    &.active {
      border: none;
      background-color: ${props => props.theme.colors.accent};
    }
  }
`;

export const LinkNavText = styled(NavLink)`
  font-family: 'Helvetica', sans-serif;
  font-size: 21px;
  letter-spacing: 2.1px;
  line-height: 25.2px;
  margin-bottom: 16px;
`;
