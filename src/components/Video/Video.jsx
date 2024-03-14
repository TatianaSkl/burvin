import { Iframe } from './Video.styled';

export const Video = ({ video }) => {
  return (
    <Iframe
      src={video}
      title="Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      allowfullscreen
      modestbranding="1"
      rel="0"
    ></Iframe>
  );
};
