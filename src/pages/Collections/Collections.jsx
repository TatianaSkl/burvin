import { useDispatch, useSelector } from 'react-redux';
import { filtredProducts, selectIsFiltred, selectProducts } from 'redux/selectors';
import { ProductsList, Container, Filter } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import { useEffect, useState } from 'react';
import { allProducts } from 'redux/products/operations';
import { FiFilePlus } from 'react-icons/fi';
import { Button } from './Collections.styled';
import { selectUser } from 'redux/auth/selectors';
import { Modal } from 'components/Modal/Modal';
import data from 'bd/data.json';

export default function Collections() {
  const [modalState, setModalState] = useState({ type: null, props: {} });
  const dispatch = useDispatch();
  const isFiltred = useSelector(selectIsFiltred);
  const filter = useSelector(filtredProducts);
  const products = useSelector(selectProducts);
  const user = useSelector(selectUser);

  const collection = data.collectionThree;

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  const visibleProducts =
    user.role === 'admin'
      ? products
      : products.filter(product => product.season !== collection.season);

  const filterNew =
    user.role === 'admin' ? filter : filter.filter(product => product.season !== collection.season);

  const sortedProducts = visibleProducts.slice().sort((a, b) => {
    const articleA = parseInt(a.article.replace(/\D/g, '').substring(0, 5));
    const articleB = parseInt(b.article.replace(/\D/g, '').substring(0, 5));
    return articleB - articleA;
  });

  const sortedProductsFilter = filterNew.slice().sort((a, b) => {
    const articleA = parseInt(a.article.replace(/\D/g, '').substring(0, 5));
    const articleB = parseInt(b.article.replace(/\D/g, '').substring(0, 5));
    return articleB - articleA;
  });

  const openModal = (type, props = {}) => {
    document.body.style.overflow = 'hidden';
    setModalState({ type, props });
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalState({ type: null, props: {} });
  };

  return (
    <>
      <Container>
        <Filter />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {user.role === 'admin' && (
            <Button onClick={() => openModal('product', {})}>
              <FiFilePlus />
            </Button>
          )}
        </div>
        <ProductsList products={isFiltred ? sortedProductsFilter : sortedProducts} />
        {isFiltred && filter?.length === 0 && <Empty>{data.filterEmpty}</Empty>}
      </Container>
      {modalState.type && (
        <Modal type={modalState.type} props={modalState.props} onClose={closeModal} />
      )}
    </>
  );
}
