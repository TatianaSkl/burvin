import { ProductsList, Container } from 'components';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { Empty } from './Favorites.styled';

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length === 0 ? (
        <Empty>Ваші вибрані пусті.</Empty>
      ) : (
        <ProductsList products={favorites} />
      )}
    </Container>
  );
}
