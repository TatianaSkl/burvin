import { LinkNav, NavUser } from './UserNav.styled';

export const UserNav = ({ onClose }) => {
  return (
    <NavUser>
      <LinkNav to="/catalog" onClick={onClose}>
        Каталог
      </LinkNav>
      <LinkNav to="/outlet" onClick={onClose}>
        Аутлет
      </LinkNav>
      <LinkNav to="/favorites" onClick={onClose}>
        Вибране
      </LinkNav>
    </NavUser>
  );
};
