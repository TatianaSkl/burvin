import { useEffect } from 'react';
import { Overlay, Wrapper, IconClose, ButtonClose, WrapperMobil } from './Menu.styled';
import { Searchbar, UserNav } from 'components';

export const Menu = ({ onCloseModal }) => {
  useEffect(() => {
    const handleClick = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [onCloseModal]);

  const onOverlayClickClose = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <Overlay className={'open'} onClick={onOverlayClickClose}>
      <Wrapper>
        <ButtonClose onClick={onCloseModal}>
          <IconClose />
        </ButtonClose>
        <WrapperMobil>
          <Searchbar onClose={onCloseModal} />
        </WrapperMobil>
        <UserNav onCloseModal={onCloseModal} />
      </Wrapper>
    </Overlay>
  );
};
