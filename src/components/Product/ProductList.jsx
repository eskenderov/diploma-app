import ProductCard from './ProductCard';

const ProductList = ({ data }) => {
  return (
    <div className="product-list">
      {data.map((prod) => (
        <ProductCard key={prod.id} title={prod.title} price={prod.price} />
      ))}
    </div>
  );
};

export default ProductList;
