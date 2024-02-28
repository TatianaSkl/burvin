import { useSelector } from 'react-redux';
import { filtredProducts, selectIsFiltred } from 'redux/selectors';
import { ProductsList, Container, Filter } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import products from '../../bd/products.json';

export default function Collections() {
  const isFiltred = useSelector(selectIsFiltred);
  const filter = useSelector(filtredProducts);

  const sortedProducts = products.sort((a, b) => {
    const articleA = parseInt(a.article.replace(/\D/g, '').substring(0, 4));
    const articleB = parseInt(b.article.replace(/\D/g, '').substring(0, 4));
    return articleB - articleA;
  });

  const sortedProductsFilter = filter.sort((a, b) => {
    const articleA = parseInt(a.article.replace(/\D/g, '').substring(0, 4));
    const articleB = parseInt(b.article.replace(/\D/g, '').substring(0, 4));
    return articleB - articleA;
  });

  return (
    <Container>
      <Filter />
      <ProductsList products={isFiltred ? sortedProductsFilter : sortedProducts} />
      {isFiltred && filter?.length === 0 && (
        <Empty>
          На жаль, для вибраних фільтрів не знайдено результатів. Ви можете розглянути інші
          параметри пошуку, щоб знайти потрібний.
        </Empty>
      )}
    </Container>
  );
}
