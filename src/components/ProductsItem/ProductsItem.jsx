import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearchPlus } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { ModalVideo, PopUp } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice';
import products from '../../bd/products.json';
import {
  Image,
  Item,
  Text,
  Wrap,
  WrapperFlex,
  WrapperFoto,
  WrapperModel,
  Icon,
  IconPlus,
  WrapperText,
  TextSpan,
  WrapperPct,
  IconVideo,
} from './ProductsItem.styled';

export const ProductsItem = ({
  id,
  article,
  name,
  options,
  price,
  originalPrice,
  discount,
  fotos,
  video,
  compound,
}) => {
  const dispatch = useDispatch();
  const [showModalImage, setShowModalImage] = useState(false);
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(selectFavorites);

  const isAdvertsInFavorites = favorites.find(product => product.id === id);

  const priceUa = Math.ceil((price * 2 * 39) / 100) * 100;
  const originalPriceUa = Math.ceil((originalPrice * 2 * 39) / 100) * 100;
  const priceSale = Math.ceil((originalPriceUa - (originalPriceUa * discount) / 100) / 100) * 100;

  const handleFavorite = () => {
    if (!isAdvertsInFavorites) {
      const product = products.find(product => product.id === id);
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(id));
    }
    setIsFavorite(!isFavorite);
  };

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setShowModalImage(true);
  };

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setShowModalImage(false);
  };

  const onOpenModalVideo = () => {
    document.body.style.overflow = 'hidden';
    setShowModalVideo(true);
  };

  const onCloseModalVideo = () => {
    document.body.style.overflow = 'auto';
    setShowModalVideo(false);
  };

  return (
    <>
      <Item>
        <WrapperFoto>
          <Image src={fotos[0]} alt={name} loading="lazy" />
          <Icon isAdvertsInFavorites={isAdvertsInFavorites} onClick={handleFavorite}>
            <AiFillHeart />
          </Icon>
          {video && (
            <IconVideo onClick={onOpenModalVideo}>
              <IoLogoYoutube />
            </IconVideo>
          )}
          <IconPlus onClick={onOpenModal}>
            <FaSearchPlus />
          </IconPlus>
        </WrapperFoto>
        <WrapperFlex>
          <Wrap>{name}</Wrap>
          <WrapperModel> {article}</WrapperModel>
          {discount ? (
            <div>
              <p style={{ fontSize: '18px', fontWeight: '500' }}>{priceSale} грн</p>
              <div style={{ display: 'flex' }}>
                <TextSpan>{originalPriceUa} грн</TextSpan>
                <WrapperPct>- {discount} %</WrapperPct>
              </div>
            </div>
          ) : (
            <div>{priceUa} грн</div>
          )}
        </WrapperFlex>
        <WrapperText>
          <div>
            {options.map(option => (
              <Text key={`${option.color}-${option.sizes}`}>
                <span style={{ color: 'black' }}>Колір : </span>
                {option.color}
              </Text>
            ))}
          </div>
          <div>
            {options.map(option => (
              <Text key={`${option.color}-${option.sizes}`}>
                <span style={{ color: 'black' }}>Розмір : </span>
                {option.sizes.join(', ')}
              </Text>
            ))}
          </div>
        </WrapperText>
        <Text style={{ textAlign: 'center', marginBottom: '6px' }}>
          <span style={{ color: 'black' }}>Склад : </span>
          {compound}
        </Text>
      </Item>
      {showModalImage && <PopUp article={article} fotos={fotos} onClose={onCloseModal} />}
      {showModalVideo && <ModalVideo video={video} onClose={onCloseModalVideo} />}
    </>
  );
};
