import { useContext, useState } from "react";
import styled from "styled-components";
import HorRow from "../../ui/HorRow";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AppContext } from "../../services/AppContext";

const StyledHeader = styled(HorRow)`
  justify-content: space-between;
  padding: 1.5rem 3rem;
  background-color: #000;
  position: fixed;
  width: 100%;
  z-index: 100;
`;
const Brand = styled(HorRow)`
  gap: 1rem;
`;
const BrandLogo = styled.div``;
const BrandName = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 3.6rem;
  font-weight: 600;
`;

const ColoredBrandName = styled(BrandName)`
  color: #c7253e;
`;

const Nav = styled(HorRow)`
  gap: 2rem;
  /* width: 27rem; */
  justify-content: space-between;
  padding-right: 2rem;
`;
const IconBox = styled(Link)`
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const CartCount = styled(HorRow)`
  color: #000;
  border-radius: 50%;
  width: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 2px 1px;
  justify-content: center;
  position: absolute;
  right: 3.8rem;
  top: 2.2rem;
  background-color: #fff;
`;

const Navtext = styled(HashLink)`
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;
function Header() {
  const [cartState, setCartState] = useState(false);
  const { cart, setUser } = useContext(AppContext);
  function handleLogout() {
    sessionStorage.removeItem("user");
    setUser(false);
  }
  return (
    <StyledHeader as="header">
      <Brand>
        <BrandLogo>
          <img
            src="https://lfangmppnowruujdynrw.supabase.co/storage/v1/object/public/app/logo.png"
            height={"50px"}
            alt="logo"
          />
        </BrandLogo>
        <HorRow>
          <BrandName>Road</BrandName>
          <ColoredBrandName>store</ColoredBrandName>
        </HorRow>
      </Brand>
      <Nav as="nav">
        <Navtext smooth to={"#products"}>
          products
        </Navtext>
        <Navtext smooth to={"#categories"}>
          categories
        </Navtext>
        <Navtext as={"p"} onClick={handleLogout}>
          logout
        </Navtext>
        <IconBox
          to={"/cart"}
          onMouseEnter={() => setCartState(true)}
          onMouseLeave={() => setCartState(false)}
        >
          {cartState ? (
            <ion-icon name="cart"></ion-icon>
          ) : (
            <ion-icon name="cart-outline"></ion-icon>
          )}
        </IconBox>
        <CartCount>{cart.length}</CartCount>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
