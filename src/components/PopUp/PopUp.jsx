import { useEffect, useState } from 'react';
import { GrCaretNext } from 'react-icons/gr';
import { GrCaretPrevious } from 'react-icons/gr';
import {
  Overlay,
  Wrapper,
  IconClose,
  ButtonClose,
  ImageItem,
  ButtonNext,
  ButtonPrev,
} from './PopUp.styled';

export const PopUp = ({ article, fotos, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const onNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % fotos.length);
  };

  const onPrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + fotos.length) % fotos.length);
  };

  return (
    <Overlay onClick={onOverlayClickClose}>
      <Wrapper>
        <ButtonClose onClick={onClose}>
          <IconClose />
        </ButtonClose>
        <ImageItem src={fotos[currentImageIndex]} alt={article} />
        {fotos.length > 1 && (
          <>
            <ButtonPrev onClick={onPrevImage}>
              <GrCaretPrevious />
            </ButtonPrev>
            <ButtonNext onClick={onNextImage}>
              <GrCaretNext />
            </ButtonNext>
          </>
        )}
      </Wrapper>
    </Overlay>
  );
};
