import styled from "styled-components";
import Product from "./Product";
import { useContext } from "react";
import { AppContext } from "../../services/AppContext";

// const path = [
//   { path: "gucci", name: "Gucci Ace sneaker", category: "Sneaker" },
//   { path: "adidas", name: "Adidas VS Pace 2.0", category: "Casual" },
//   { path: "puma", name: "Puma Skyrocket Lite", category: "Running" },
//   { path: "nike", name: "Nike Air Max 90 LV8", category: "Sneaker" },
// ];
const StyledProducts = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

function ProductsWrapper() {
  const { products } = useContext(AppContext);
  return (
    <StyledProducts>
      {products.map((product) => (
        <Product
          key={product.id}
          product_id={product.id}
          image={product.image}
          brand={product.brand}
          price={product.price}
          name={product.name}
          category={product.categoryName}
        />
      ))}
    </StyledProducts>
  );
}

export default ProductsWrapper;
