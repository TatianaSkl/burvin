import { useEffect } from 'react';
import { Overlay, Wrapper, IconClose, ButtonClose, Video } from './ModalVideo.styled';

export const ModalVideo = ({ video, onClose }) => {
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
        <Video
          src={video}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowfullscreen
          modestbranding="1"
          rel="0"
        ></Video>
      </Wrapper>
    </Overlay>
  );
};
