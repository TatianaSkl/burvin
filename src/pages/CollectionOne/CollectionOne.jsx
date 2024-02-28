import { useSelector } from 'react-redux';
import { filtredProducts, selectIsFiltred } from 'redux/selectors';
import { ProductsList, Container, Filter, TitlePage } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import products from '../../bd/products.json';
import { Wrapper } from 'pages/Collections/Collections.styled';

export default function CollectionOne() {
  const isFiltred = useSelector(selectIsFiltred);
  const filter = useSelector(filtredProducts);

  const visibleProducts = products.filter(product => product.season === 'aw23');

  const filterNew = filter.filter(product => product.season === 'aw23');

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
        <TitlePage text="ОСІНЬ-ЗИМА 23-24" />
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
