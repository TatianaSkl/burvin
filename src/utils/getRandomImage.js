import img from 'images/img';
const { t1, t2, t3, t4, t5 } = img;

export const getRandomImage = () => {
  const images = [t1, t2, t3, t4, t5];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
