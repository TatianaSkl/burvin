import { LinkNav, NavUser } from './UserNav.styled';

export const UserNav = () => {
  return (
    <NavUser>
      <LinkNav to="/catalog">Каталог</LinkNav>
      <LinkNav to="/outlet">Аутлет</LinkNav>
      <LinkNav to="/favorites">Вибране</LinkNav>
    </NavUser>
  );
};
