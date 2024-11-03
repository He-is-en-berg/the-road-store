import styled from "styled-components";
import HorRow from "../../ui/HorRow";
import VerRow from "../../ui/VerRow";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/AppContext";
import { deleteCartItem, updateCartItemQuantity } from "../../services/api";

const StyledCartBox = styled(HorRow)`
  height: 21rem;
  background-color: #f2f2f2;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 27rem;
  height: 21rem;
  margin-right: 1rem;
`;
const Detail = styled(VerRow)`
  /* padding: 1rem; */
  gap: 1rem;
`;
const Name = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;
const Category = styled.p`
  font-size: 1.6rem;
`;

const RightRow = styled(HorRow)`
  justify-content: space-between;
  /* padding: 2rem; */
  width: 50%;
`;
const Quantity = styled(HorRow)`
  /* padding: 2rem; */
`;
const IconCon = styled(HorRow)`
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
`;
const Count = styled.input`
  width: 3.5rem;
  height: 3.5rem;
  text-align: center;
  border: none;
  outline: none;
  font-size: 1.6rem;
  /* padding: 1.5rem; */
  /* text-transform: capitalize; */
`;
const Price = styled.p`
  font-size: 1.8rem;
`;
const RemoveItem = styled(HorRow)`
  font-size: 3.5rem;
  background-color: #ddd;
  height: 21rem;
  /* height: auto; */
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
function CartBox({ image, name, category, price, id, quantity }) {
  const { setCart } = useContext(AppContext);
  const [count, setCount] = useState(quantity);
  useEffect(
    function () {
      setCart((cartList) =>
        cartList.map((item) => {
          if (item.name === name) item.quantity = count;
          return item;
        })
      );
      updateCartItemQuantity(id, count);
    },
    [count, id, name, setCart]
  );

  function handleRemove() {
    setCart((cartList) => cartList.filter((item) => item.id !== id));
    deleteCartItem(id);
  }
  return (
    <StyledCartBox>
      <HorRow>
        <Image src={image} />
        <Detail>
          <Name>{name}</Name>
          <Category>{category}</Category>
        </Detail>
      </HorRow>
      <RightRow>
        <Quantity>
          <IconCon
            onClick={() => setCount((count) => (count > 1 ? count - 1 : count))}
          >
            <ion-icon name="remove-outline"></ion-icon>
          </IconCon>
          <Count value={count} />
          <IconCon onClick={() => setCount((count) => count + 1)}>
            <ion-icon name="add-outline"></ion-icon>
          </IconCon>
        </Quantity>
        <Price>₹{price}</Price>
        <Price>₹{price * count}</Price>
        <RemoveItem onClick={() => handleRemove()}>
          <ion-icon name="close-outline"></ion-icon>
        </RemoveItem>
      </RightRow>
    </StyledCartBox>
  );
}

export default CartBox;
