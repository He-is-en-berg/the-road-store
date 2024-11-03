import styled from "styled-components";
import Header from "../features/products/Header";
import ProductsWrapper from "../features/products/ProductsWraper";

const StyledProducts = styled.main`
  /* background-color: #d6d6d6; */
  background-color: #c9c9c9;
  /* background: linear-gradient(#c9c9c9, #858585); */
  /* height: 100vh; */
  padding-bottom: 10rem;
`;

function Products() {
  return (
    <StyledProducts>
      <Header />
      <ProductsWrapper />
    </StyledProducts>
  );
}

export default Products;
