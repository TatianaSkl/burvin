import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkNav, LinkNavText, NavUser, Wrap } from './UserNav.styled';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Modal } from 'components/Modal/Modal';
import data from 'bd/data.json';

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
        <LinkNavText to={data.collection.slug} onClick={onCloseModal}>
          {data.collection.title}
        </LinkNavText>
        <LinkNav to={data.collectionThree.slug} onClick={onCloseModal}>
          {data.collectionThree.title}
        </LinkNav>
        <LinkNav to={data.collectionTwo.slug} onClick={onCloseModal}>
          {data.collectionTwo.title}
        </LinkNav>
        <LinkNav to={data.collectionOne.slug} onClick={onCloseModal}>
          {data.collectionOne.title}
        </LinkNav>
        <LinkNav to={data.outlet.slug} onClick={onCloseModal}>
          {data.outlet.title}
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
