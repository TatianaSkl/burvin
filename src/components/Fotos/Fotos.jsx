import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { ArticleLabel, ImageItem, ImageWrapper } from './Fotos.styled';

export const Fotos = ({ article, fotos }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Zoom]}
      zoom={true}
      loop={true}
      grabCursor={true}
      navigation
      pagination={{ clickable: true }}
    >
      {fotos.map((foto, idx) => (
        <SwiperSlide key={idx}>
          <ImageWrapper>
            <div className="swiper-zoom-container">
              <ImageItem src={foto} alt={idx} />
            </div>
            <ArticleLabel>{article}</ArticleLabel>
          </ImageWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
