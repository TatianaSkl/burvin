import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { filtredProducts, selectIsFiltred } from 'redux/selectors';
import { ProductsList, Container, Filter } from 'components';
import { ButtonLoadMore } from './Outlet.styled';
import { Empty } from 'pages/Favorites/Favorites.styled';
import products from '../../bd/products.json';
import { TbReload } from 'react-icons/tb';

export default function Outlet() {
  const isFiltred = useSelector(selectIsFiltred);
  const filter = useSelector(filtredProducts);
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem('page');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const itemsPerPage = 8;

  const visibleProducts = products
    .filter(product => product.season === 'outlet')
    .slice(0, page * itemsPerPage);

  const filterOutlet = filter.filter(product => product.season === 'outlet');

  useEffect(() => {
    localStorage.setItem('page', page.toString());
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <Filter />
      <ProductsList products={isFiltred ? filterOutlet : visibleProducts} />
      {isFiltred && filter?.length === 0 && (
        <Empty>
          На жаль, для вибраних фільтрів не знайдено результатів. Ви можете розглянути інші
          параметри пошуку, щоб знайти потрібний.
        </Empty>
      )}
      {visibleProducts.length < filterOutlet.length && !isFiltred && (
        <ButtonLoadMore onClick={handleLoadMore}>
          <TbReload style={{ marginRight: '6px' }} />
          Завантажити ще . . .
        </ButtonLoadMore>
      )}
    </Container>
  );
}
