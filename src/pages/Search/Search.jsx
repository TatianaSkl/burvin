import { useDispatch, useSelector } from 'react-redux';
import { ProductsList, Container, TitlePage } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import { selectProducts, selectSearch } from 'redux/selectors';
import { Wrapper } from 'pages/Collections/Collections.styled';
import { useEffect } from 'react';
import { allProducts } from 'redux/products/operations';
import data from 'bd/data.json';

export default function Search() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const products = useSelector(selectProducts);

  const collection = data.collectionThree;

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  let visibleSearchProducts = [];

  if (search.trim() !== '') {
    visibleSearchProducts = products
      .filter(product => product.article.includes(search))
      .filter(product => product.season !== collection.season);
  }

  return (
    <>
      <Wrapper>
        <TitlePage text={search} />
      </Wrapper>
      <Container>
        {visibleSearchProducts.length === 0 ? (
          <Empty>{data.searchEmpty}</Empty>
        ) : (
          <ProductsList products={visibleSearchProducts} />
        )}
      </Container>
    </>
  );
}
