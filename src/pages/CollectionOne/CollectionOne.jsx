import { useDispatch, useSelector } from 'react-redux';
import { filtredProducts, selectIsFiltred, selectProducts } from 'redux/selectors';
import { ProductsList, Container, Filter, TitlePage } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import { Wrapper } from 'pages/Collections/Collections.styled';
import { useEffect } from 'react';
import { allProducts } from 'redux/products/operations';

export default function CollectionOne() {
  const dispatch = useDispatch();
  const isFiltred = useSelector(selectIsFiltred);
  const filter = useSelector(filtredProducts);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  const visibleProducts = products.filter(product => product.season === 'vl24');

  const filterNew = filter.filter(product => product.season === 'vl24');

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
        <TitlePage text="ВЕСНА-ЛІТО 2024" />
        <Filter />
      </Wrapper>
      <Container>
        <ProductsList products={isFiltred ? sortedProductsFilter : sortedProducts} />
        {isFiltred && filter?.length === 0 && (
          <Empty>
            На жаль, для вибраних фільтрів не знайдено результатів. Ви можете розглянути інші
            параметри пошуку, щоб знайти потрібний.
          </Empty>
        )}
      </Container>
    </>
  );
}
