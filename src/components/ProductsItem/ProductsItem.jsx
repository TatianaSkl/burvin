import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearchPlus } from 'react-icons/fa';
import {
  ImageCar,
  Item,
  Text,
  Wrap,
  WrapperFlex,
  WrapperFoto,
  WrapperModel,
  Icon,
  IconPlus,
  WrapperText,
} from './ProductsItem.styled';
import { PopUp } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice';
import products from '../../bd/products.json';
import { imageMap } from '../../utils/imageSlider';
import { imageSlider } from '../../utils/imageSlider';

export const ProductsItem = ({ id, article, name, color, size, price, compound }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(selectFavorites);

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
    setShowModal(true);
  };

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  };

  return (
    <>
      <Item>
        <WrapperFoto>
          <ImageCar src={imageMap[article]} alt={name} loading="lazy" />
          <Icon isAdvertsInFavorites={isAdvertsInFavorites} onClick={handleFavorite}>
            <AiFillHeart />
          </Icon>
          <IconPlus onClick={onOpenModal}>
            <FaSearchPlus />
          </IconPlus>
        </WrapperFoto>
        <WrapperFlex>
          <Wrap>{name}</Wrap>
          <WrapperModel> {article}</WrapperModel>
          <div>{price} $</div>
        </WrapperFlex>
        <WrapperText>
          <Text>
            <span style={{ color: 'black' }}>Колір : </span>
            {color}
          </Text>
          <Text>
            <span style={{ color: 'black' }}>Розмір : </span>
            {size}
          </Text>
        </WrapperText>
        <Text style={{ textAlign: 'center', marginBottom: '6px' }}>
          <span style={{ color: 'black' }}>Склад : </span>
          {compound}
        </Text>
      </Item>
      {showModal && (
        <PopUp article={article} images={imageSlider[article]} onClose={onCloseModal} />
      )}
    </>
  );
};
