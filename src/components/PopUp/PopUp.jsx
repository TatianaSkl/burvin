import { useEffect } from 'react';
import { Overlay, Wrapper, IconClose, ButtonClose, ImageItem } from './PopUp.styled';

export const PopUp = ({ url, alt, onClose }) => {
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
    <Overlay onClick={onOverlayClickClose}>
      <Wrapper>
        <ButtonClose onClick={onClose}>
          <IconClose />
        </ButtonClose>
        <ImageItem src={url} alt={alt} />
      </Wrapper>
    </Overlay>
  );
};
