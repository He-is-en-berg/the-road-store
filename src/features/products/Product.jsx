import styled from "styled-components";
import HorRow from "../../ui/HorRow";
import VerRow from "../../ui/VerRow";
import { useContext } from "react";
import { AppContext } from "../../services/AppContext";
import { insertCartItem } from "../../services/api";

const StyledProduct = styled.div`
  background-color: #fff;
`;
const ProductPic = styled.img`
  width: 45rem;
  height: 36rem;
`;
const ProductFooter = styled(HorRow)`
  justify-content: space-between;
  padding: 0.5rem 1rem;
  padding-bottom: 0.8rem;
`;
const ProductInfo = styled(VerRow)`
  gap: 1px;
`;
const Name = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;
const Category = styled.p`
  font-size: 1.8rem;
  text-transform: capitalize;
  font-weight: 300;
`;
const Price = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #c7253e;
`;
const AddToCart = styled(HorRow)`
  font-size: 2.8rem;
  padding: 1rem;
  margin-right: 0.5rem;
  border-radius: 8px;
  background-color: #e7e7e7;
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;

// eslint-disable-next-line react/prop-types
function Product({ brand, name, category, image, price, product_id }) {
  const { setCart, user } = useContext(AppContext);

  function handleAddToCart() {
    const cartItem = {
      name: brand + " " + name,
      category,
      image,
      price,
      quantity: 1,
      user_id: user.user.id,
      product_id,
      id: user.user.id + product_id,
    };
    console.log(user.user);
    console.log(cartItem);
    setCart((cartList) => {
      if (cartList.find((item) => item.name === cartItem.name)) {
        return cartList;
      } else {
        insertCartItem(cartItem);
        return [...cartList, cartItem];
      }
    });
  }
  return (
    <StyledProduct>
      <ProductPic src={image} />
      <ProductFooter>
        <ProductInfo>
          <Name>{brand + " " + name}</Name>
          <Category>{category}</Category>
          <Price>{"Rs. " + price}</Price>
        </ProductInfo>
        <AddToCart onClick={() => handleAddToCart()}>
          <ion-icon name="cart-outline"></ion-icon>
        </AddToCart>
      </ProductFooter>
    </StyledProduct>
  );
}

export default Product;
