import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtredProducts, selectIsFiltred, selectProducts } from 'redux/selectors';
import { ProductsList, Container, Filter, TitlePage } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import { Wrapper } from 'pages/Collections/Collections.styled';
import { allProducts } from 'redux/products/operations';
import data from 'bd/data.json';

export default function CollectionOne() {
  const dispatch = useDispatch();
  const isFiltred = useSelector(selectIsFiltred);
  const filter = useSelector(filtredProducts);
  const products = useSelector(selectProducts);

  const collection = data.collectionOne;

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  const visibleProducts = products.filter(product => product.season === collection.season);

  const filterNew = filter.filter(product => product.season === collection.season);

  const sortedProducts = visibleProducts.sort((a, b) => {
    const articleA = parseInt(a.article.replace(/\D/g, '').substring(0, 4));
    const articleB = parseInt(b.article.replace(/\D/g, '').substring(0, 4));
    return articleA - articleB;
  });

  const sortedProductsFilter = filterNew.sort((a, b) => {
    const articleA = parseInt(a.article.replace(/\D/g, '').substring(0, 4));
    const articleB = parseInt(b.article.replace(/\D/g, '').substring(0, 4));
    return articleA - articleB;
  });

  return (
    <>
      <Wrapper>
        <TitlePage text={collection.title} />
        <Filter />
      </Wrapper>
      <Container>
        <ProductsList products={isFiltred ? sortedProductsFilter : sortedProducts} />
        {isFiltred && filter?.length === 0 && <Empty>{data.filterEmpty}</Empty>}
      </Container>
    </>
  );
}
