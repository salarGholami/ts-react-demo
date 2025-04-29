import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

type Props = {
  products: Product[];
};

const UserCard = ({ products }: Props) => {
  const [showInStock, setShowInStock] = useState(true);

  const handleToggleInStock = (): void => {
    setShowInStock(!showInStock);
  };

  const filteredProducts = showInStock
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <div>
      <ProductList
        handleState={handleToggleInStock}
        products={filteredProducts}
        showInStock={showInStock}
      />
    </div>
  );
};

export default UserCard;

type ProductListProps = {
  handleState: () => void;
  products: Product[];
  showInStock: boolean;
};

const ProductList = ({
  handleState,
  products,
  showInStock,
}: ProductListProps) => {
  return (
    <div>
      <button onClick={handleState}>
        Show {showInStock ? "All" : "Available"} Products
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price} -{" "}
            {product.inStock ? "In Stock" : "Out of Stock"}
          </li>
        ))}
      </ul>
    </div>
  );
};
