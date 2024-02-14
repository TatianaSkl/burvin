import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from 'images/img';
const { t1, t2, t3, t4 } = img;

const images = [t1, t2, t3, t4];

const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props} style={{ display: 'none' }} />
);

export const BackgroundSlideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};
