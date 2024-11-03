import styled from "styled-components";
import Header from "../features/cart/Header";
import Main from "../features/cart/Main";
import Billing from "../features/cart/Billing";
import HorRow from "../ui/HorRow";

const StyledCart = styled.div`
  height: 100vh;
`;
const MainContainer = styled(HorRow)`
  /* align-items: flex-start; */
  padding-right: 4rem;
  height: 91vh;
`;

function Cart() {
  return (
    <StyledCart>
      <Header />
      <MainContainer>
        <Main />
        <Billing />
      </MainContainer>
    </StyledCart>
  );
}

export default Cart;
