import { useEffect } from 'react';
import { Overlay, Wrapper, IconClose, ButtonClose, WrapperMobil } from './Menu.styled';
import { Searchbar, UserNav } from 'components';

export const Menu = ({ onClose }) => {
  useEffect(() => {
    const handleClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [onClose]);

  const onOverlayClickClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay className={'open'} onClick={onOverlayClickClose}>
      <Wrapper>
        <ButtonClose onClick={onClose}>
          <IconClose />
        </ButtonClose>
        <WrapperMobil>
          <Searchbar onClose={onClose} />
        </WrapperMobil>
        <UserNav onClose={onClose} />
      </Wrapper>
    </Overlay>
  );
};
