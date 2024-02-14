import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import {
  ImageCar,
  Item,
  PressButton,
  Text,
  Wrap,
  WrapperFlex,
  WrapperFoto,
  WrapperModel,
  Icon,
} from './ProductsItem.styled';
import { PopUp } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice';
import products from '../../bd/products.json';
import { imageMap } from '../../utils/imageMap';

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
        </WrapperFoto>
        <WrapperFlex>
          <Wrap>
            {name}
            <WrapperModel> {article}</WrapperModel>
          </Wrap>
          <div>{price} $</div>
        </WrapperFlex>

        <Text>Колір: {color}</Text>
        <Text>Розмір: {size}</Text>
        <PressButton type="button" onClick={onOpenModal}>
          Дізнатися більше
        </PressButton>
      </Item>
      {showModal && (
        <PopUp
          article={article}
          alt={name}
          name={name}
          color={color}
          size={size}
          url={imageMap[article]}
          price={price}
          compound={compound}
          onClose={onCloseModal}
        />
      )}
    </>
  );
};
