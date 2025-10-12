import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkNav, LinkNavText, NavUser, Wrap } from './UserNav.styled';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Modal } from 'components/Modal/Modal';

export const UserNav = ({ onCloseModal }) => {
  const [modalState, setModalState] = useState({ type: null, props: {} });
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const openModal = (type, props = {}) => {
    document.body.style.overflow = 'hidden';
    setModalState({ type, props });
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalState({ type: null, props: {} });
  };

  return (
    <NavUser>
      <Wrap>
        <LinkNavText to="/collections" onClick={onCloseModal}>
          Колекції
        </LinkNavText>
        <LinkNav to="/collection-3" onClick={onCloseModal}>
          ОСІНЬ-ЗИМА 2025
        </LinkNav>
        <LinkNav to="/collection-2" onClick={onCloseModal}>
          ВЕСНА-ЛІТО 2025
        </LinkNav>
        <LinkNav to="/collection-1" onClick={onCloseModal}>
          ОСІНЬ-ЗИМА 2024
        </LinkNav>
        <LinkNav to="/outlet" onClick={onCloseModal}>
          АУТЛЕТ
        </LinkNav>
        <LinkNav to="/favorites" onClick={onCloseModal}>
          ВИБРАНЕ
        </LinkNav>
        <LinkNavText to="/news" onClick={onCloseModal}>
          Новини
        </LinkNavText>
        <LinkNavText to="/contacts" onClick={onCloseModal}>
          Контакти
        </LinkNavText>
      </Wrap>
      <div style={{ textAlign: 'end' }}>
        {!user.email ? (
          <button type="button" onClick={() => openModal('auth', {})}>
            Адмін
          </button>
        ) : (
          <button type="button" onClick={() => dispatch(logOut())}>
            Выйти
          </button>
        )}
      </div>
      {modalState.type && (
        <Modal type={modalState.type} props={modalState.props} onClose={closeModal} />
      )}
    </NavUser>
  );
};
