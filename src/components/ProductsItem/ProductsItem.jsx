import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectProducts } from 'redux/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice';
import { selectUser } from 'redux/auth/selectors';
import { deleteProduct } from 'redux/products/operations';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearchPlus } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
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
  PressButton,
  TextDescription,
  SpanDescription,
  TextSpan,
  WrapperPct,
} from './ProductsItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ProductsItem = ({
  id,
  article,
  name,
  view,
  options,
  price,
  originalPrice,
  discount,
  priceR,
  originalPriceR,
  discountR,
  fotos,
  video,
  compound,
  description,
  season,
}) => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState({ type: null, props: {} });
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const favorites = useSelector(selectFavorites);
  const products = useSelector(selectProducts);
  const user = useSelector(selectUser);

  const isAdvertsInFavorites = favorites.find(product => product._id === id);

  const handleFavorite = () => {
    if (!isAdvertsInFavorites) {
      const product = products.find(product => product._id === id);
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(id));
    }
    setIsFavorite(!isFavorite);
  };

  const openModal = (type, props = {}) => {
    document.body.style.overflow = 'hidden';
    setModalState({ type, props });
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalState({ type: null, props: {} });
  };

  const handleDeleteProduct = e => {
    const productId = e.target.id;
    dispatch(deleteProduct(productId));
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Item key={id}>
        <div>
          <WrapperFoto>
            <Image src={fotos[0]} alt={name} loading="lazy" />
            <Icon isAdvertsInFavorites={isAdvertsInFavorites} onClick={handleFavorite}>
              <AiFillHeart />
            </Icon>
            {video && (
              <IconVideo onClick={() => openModal('video', { video })}>
                <IoLogoYoutube />
              </IconVideo>
            )}
            <IconPlus onClick={() => openModal('fotos', { article, fotos })}>
              <FaSearchPlus />
            </IconPlus>
          </WrapperFoto>
          <WrapperFlex>
            <Wrap>{name}</Wrap>
            <WrapperModel> {article}</WrapperModel>
            {discount ? (
              <div>
                <p style={{ fontSize: '18px', fontWeight: '500' }}>{price} $</p>
                <div style={{ display: 'flex' }}>
                  <TextSpan>{originalPrice} $</TextSpan>
                  <WrapperPct>- {discount} %</WrapperPct>
                </div>
              </div>
            ) : (
              <div>{price} $</div>
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
          <Text style={{ textAlign: 'center' }}>
            <span style={{ color: 'black' }}>Склад : </span>
            {compound}
          </Text>
          {description && (
            <>
              <SpanDescription onClick={toggleVisibility}>Опис...</SpanDescription>
              {isVisible && <TextDescription>{description}</TextDescription>}
            </>
          )}
        </div>
        {user.role === 'admin' && (
          <div style={{ display: 'flex', gap: '6px', margin: '6px' }}>
            <PressButton
              type="button"
              id={id}
              onClick={() =>
                openModal('productChange', {
                  id,
                  article,
                  name,
                  view,
                  options,
                  price,
                  originalPrice,
                  discount,
                  priceR,
                  originalPriceR,
                  discountR,
                  fotos,
                  video,
                  compound,
                  description,
                  season,
                })
              }
            >
              Змінити
            </PressButton>
            <PressButton type="button" id={id} onClick={handleDeleteProduct}>
              Видалити
            </PressButton>
          </div>
        )}
      </Item>
      {modalState.type && (
        <Modal type={modalState.type} props={modalState.props} onClose={closeModal} />
      )}
    </>
  );
};
