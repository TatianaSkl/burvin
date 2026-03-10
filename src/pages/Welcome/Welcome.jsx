import { useNavigate } from 'react-router-dom';
import { ButtonGo, WrapperWelcom } from './Welcome.styled';
import { useEffect, useState } from 'react';
import { getRandomImage } from 'utils/getRandomImage';
import data from 'bd/data.json';

export default function Welcome() {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(getRandomImage);

  const handleGo = () => {
    navigate(data.collectionThree.slug);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage(getRandomImage);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <WrapperWelcom style={{ backgroundImage: `url(${backgroundImage})` }} />
      <ButtonGo onClick={handleGo}>{data.centerButton}</ButtonGo>
    </>
  );
}
