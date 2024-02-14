import { ProductsItem } from 'components';
import { List } from './ProductsList.styled';

export const ProductsList = ({ products }) => {
  return (
    <List>
      {products.map(product => (
        <ProductsItem
          key={product.id}
          id={product.id}
          article={product.article}
          name={product.name}
          color={product.color}
          size={product.size}
          price={product.price}
          compound={product.compound}
        />
      ))}
    </List>
  );
};
