import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearchPlus } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { ModalVideo, PopUp } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectProducts } from 'redux/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice';
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
  const products = useSelector(selectProducts);

  const isAdvertsInFavorites = favorites.find(product => product.id === id);

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
          {discount ? <div>{originalPrice} $</div> : <div>{price} $</div>}
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
