import { useEffect } from 'react';
import {
  Overlay,
  Wrapper,
  IconClose,
  ButtonClose,
  ImageItem,
  Wrap,
  WrapperText,
  Text,
  // LinkTel,
} from './PopUp.styled';

export const PopUp = ({ article, name, color, size, price, compound, url, alt, onClose }) => {
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
        <Wrap>
          <div>{name}</div>
          <div style={{ fontWeight: '800' }}>{article}</div>
          <div>{price} $</div>
        </Wrap>
        <WrapperText>
          <Text>
            <span style={{ color: 'black' }}>Колір :</span> {color}
          </Text>
          <Text>
            <span style={{ color: 'black' }}>Розмір :</span> {size}
          </Text>
          <Text>
            <span style={{ color: 'black' }}>Склад :</span> {compound}
          </Text>
        </WrapperText>
        {/* <LinkTel href="tel:+380730000000">Rental car</LinkTel> */}
      </Wrapper>
    </Overlay>
  );
};
