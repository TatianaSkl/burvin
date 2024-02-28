import { useEffect, useState } from 'react';
import {
  Overlay,
  Wrapper,
  IconClose,
  ButtonClose,
  ImageItem,
  ButtonNext,
  ButtonPrev,
} from './PopUp.styled';
import { imageSlider } from 'utils/imageSlider';
import { GrCaretNext } from 'react-icons/gr';
import { GrCaretPrevious } from 'react-icons/gr';

export const PopUp = ({ article, video, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = imageSlider[article];

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
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const onPrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Overlay onClick={onOverlayClickClose}>
      <Wrapper>
        <ButtonClose onClick={onClose}>
          <IconClose />
        </ButtonClose>
        <ImageItem src={images[currentImageIndex]} alt={article} />
        {images.length > 1 && (
          <>
            <ButtonPrev onClick={onPrevImage}>
              <GrCaretPrevious />
            </ButtonPrev>
            <ButtonNext onClick={onNextImage}>
              <GrCaretNext />
            </ButtonNext>
          </>
        )}
        {video && (
          <iframe
            src={video}
            title="Video"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        )}
      </Wrapper>
    </Overlay>
  );
};
