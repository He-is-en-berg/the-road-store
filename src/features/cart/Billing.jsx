import styled from "styled-components";
import HorRow from "../../ui/HorRow";
import VerRow from "../../ui/VerRow";
import { useContext } from "react";
import { AppContext } from "../../services/AppContext";

const StyledBilling = styled(VerRow)`
  background-color: #eee;
  width: 30%;
  padding: 6rem;
  gap: 2.7rem;
  /* height: 100%; */
`;
const BillingHeading = styled.h1`
  font-size: 3.6rem;
`;
const Hr = styled.div`
  height: 2px;
  background-color: #bbb;
`;
const MapRow = styled(HorRow)`
  justify-content: space-between;
  /* flex: 0 1 5rem; */
`;
const Text = styled.p`
  font-size: 1.8rem;
  text-transform: uppercase;
`;
const PromoInput = styled.input`
  width: 30rem;
  height: 2.8rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  padding: 1.5rem;
  text-transform: capitalize;
`;
const Button = styled.button`
  /* text-decoration: none; */
  outline: none;
  border: none;
  display: inline-block;
  padding: 8px 12px;
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: 4px;
  font-family: sans-serif;
  cursor: pointer;
  color: #fff;
  /* border: 3px solid #000; */
  background-color: #c7253e;
  /* border: 5px solid #fff; */
  width: 10rem;
  &:hover {
    /* border: 2px solid #c7253e; */
    /* color: #c7253e; */
  }
`;
const CheckoutBtn = styled(Button)`
  width: auto;
  background-color: #000;
`;
function Billing() {
  const { cart } = useContext(AppContext);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = totalPrice ? 420 : 0;
  return (
    <StyledBilling as={"aside"}>
      <BillingHeading>Order Summary</BillingHeading>
      <Hr />
      <MapRow>
        <Text>Items {cart.length}</Text>
        <Text>₹{totalPrice}</Text>
      </MapRow>
      <MapRow>
        <Text>Shipping</Text>
        <Text>₹{shipping}</Text>
      </MapRow>
      <Text>Promo code</Text>
      <PromoInput placeholder="enter your code" />
      <Button>Apply</Button>
      <Hr />
      <MapRow>
        <Text>Total cost</Text>
        <Text>₹{totalPrice + shipping}</Text>
      </MapRow>
      <CheckoutBtn>Checkout</CheckoutBtn>
    </StyledBilling>
  );
}

export default Billing;
