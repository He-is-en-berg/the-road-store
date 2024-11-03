import styled from "styled-components";
import CartBox from "./CartBox";
import HorRow from "../../ui/HorRow";
import VerRow from "../../ui/VerRow";
import { useContext } from "react";
import { AppContext } from "../../services/AppContext";

const StyledMain = styled(VerRow)`
  padding: 5rem 6rem;
  padding-bottom: 3rem;
  height: 100vh;
  width: 70%;
  gap: 2.2rem;
`;
const HeadingContainer = styled(HorRow)`
  justify-content: space-between;
`;
const ShopingCart = styled.h1`
  font-size: 3.6rem;
`;
const ItemsCount = styled.h1`
  font-size: 3rem;
`;
const Hr = styled.div`
  /* margin: 2.7rem 0; */
  height: 2px;
  background-color: #bbb;
`;
const TitleRow = styled(HorRow)`
  justify-content: space-between;
`;
const TitleText = styled.p`
  font-size: 1.8rem;
  text-transform: uppercase;
  position: relative;
  font-weight: 300;
`;
const Quantity = styled(TitleText)`
  left: 17.5rem;
`;
const Price = styled(TitleText)`
  left: 2.3rem;
`;
const Total = styled(TitleText)`
  right: 14.7rem;
`;
const CartBoxWrapper = styled(VerRow)`
  gap: 2rem;
  overflow-y: scroll;
`;
function Main() {
  const { cart } = useContext(AppContext);
  console.log(cart);
  return (
    <StyledMain>
      <HeadingContainer>
        <ShopingCart>Shoping Cart</ShopingCart>
        <ItemsCount>{cart.length} Items</ItemsCount>
      </HeadingContainer>
      <Hr />
      <TitleRow>
        <TitleText>product detail</TitleText>
        <Quantity>quantity</Quantity>
        <Price>price</Price>
        <Total>total</Total>
      </TitleRow>
      <CartBoxWrapper>
        {cart.map((item) => (
          <CartBox
            key={item.id}
            image={item.image}
            name={item.name}
            category={item.category}
            price={item.price}
            quantity={item.quantity}
            id={item.id}
          />
        ))}
      </CartBoxWrapper>
    </StyledMain>
  );
}

export default Main;
