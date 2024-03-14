import { useState } from 'react';
import { GrCaretNext } from 'react-icons/gr';
import { GrCaretPrevious } from 'react-icons/gr';
import { ImageItem, ButtonNext, ButtonPrev } from './Fotos.styled';

export const Fotos = ({ article, fotos }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % fotos.length);
  };

  const onPrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + fotos.length) % fotos.length);
  };

  return (
    <>
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
    </>
  );
};
