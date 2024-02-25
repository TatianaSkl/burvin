import { useSelector } from 'react-redux';
import { ProductsList, Container, TitlePage } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import products from '../../bd/products.json';
import { selectSearch } from 'redux/selectors';
import { Wrapper } from 'pages/Collections/Collections.styled';

export default function Search() {
  const search = useSelector(selectSearch);

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
