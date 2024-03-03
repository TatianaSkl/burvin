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
          options={product.options}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          fotos={product.fotos}
          video={product.video}
          compound={product.compound}
        />
      ))}
    </List>
  );
};
