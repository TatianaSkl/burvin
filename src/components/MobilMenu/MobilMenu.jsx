import { useEffect } from 'react';
import { Overlay, Wrapper, IconClose, ButtonClose } from './MobilMenu.styled';
import { UserNav } from 'components';

export const MobilMenu = ({ onClose }) => {
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
      <Wrapper onClick={onClose}>
        <ButtonClose>
          <IconClose />
        </ButtonClose>
        <UserNav />
      </Wrapper>
    </Overlay>
  );
};
