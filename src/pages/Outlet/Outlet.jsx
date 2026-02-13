import { useDispatch, useSelector } from 'react-redux';
import { filtredProducts, selectIsFiltred, selectProducts } from 'redux/selectors';
import { ProductsList, Container, Filter } from 'components';
import { Empty } from 'pages/Favorites/Favorites.styled';
import { useEffect } from 'react';
import { allProducts } from 'redux/products/operations';
import data from 'bd/data.json';

export default function Outlet() {
  const dispatch = useDispatch();
  const isFiltred = useSelector(selectIsFiltred);
  const filter = useSelector(filtredProducts);
  const products = useSelector(selectProducts);

  const collection = data.outlet;

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  const visibleProducts = products.filter(product => product.season === collection.season);

  const sortedProducts = visibleProducts.sort((a, b) => {
    const articleA = parseInt(a.article.replace(/\D/g, '').substring(0, 4));
    const articleB = parseInt(b.article.replace(/\D/g, '').substring(0, 4));
    return articleB - articleA;
  });

  const sortedProductsFilter = filter.slice().sort((a, b) => {
    const articleA = parseInt(a.article.replace(/\D/g, '').substring(0, 4));
    const articleB = parseInt(b.article.replace(/\D/g, '').substring(0, 4));
    return articleB - articleA;
  });

  const filterOutlet = sortedProductsFilter.filter(product => product.season === collection.season);

  return (
    <Container>
      <Filter />
      <ProductsList products={isFiltred ? filterOutlet : sortedProducts} />
      {isFiltred && filter?.length === 0 && <Empty>{data.filterEmpty}</Empty>}
    </Container>
  );
}
