import { useDispatch, useSelector } from 'react-redux';
import { ProductsList, Container, TitlePage } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import { selectProducts, selectSearch } from 'redux/selectors';
import { Wrapper } from 'pages/Collections/Collections.styled';
import { useEffect } from 'react';
import { allProducts } from 'redux/products/operations';

export default function Search() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  let visibleSearchProducts = [];

  if (search.trim() !== '') {
    visibleSearchProducts = products.filter(product => product.article.includes(search));
  }

  return (
    <>
      <Wrapper>
        <TitlePage text={search} />
      </Wrapper>
      <Container>
        {visibleSearchProducts.length === 0 ? (
          <Empty>На жаль, за пошуком результатів не знайдено.</Empty>
        ) : (
          <ProductsList products={visibleSearchProducts} />
        )}
      </Container>
    </>
  );
}
