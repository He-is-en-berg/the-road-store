import styled from "styled-components";
import HorRow from "../../ui/HorRow";
import { Link } from "react-router-dom";

const StyledHeader = styled(HorRow)`
  justify-content: space-around;
  background-color: #111;
  padding: 1rem;
`;
const Brand = styled(Link)`
  text-decoration: none;
  outline: none;
  display: flex;
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

function Header() {
  return (
    <StyledHeader as={"header"}>
      <Brand to={"/homepage"}>
        <BrandLogo>
          <img
            alt="logo"
            src="https://lfangmppnowruujdynrw.supabase.co/storage/v1/object/public/app/logo.png"
            height={"50px"}
          />
        </BrandLogo>
        <HorRow>
          <BrandName>Road</BrandName>
          <ColoredBrandName>store</ColoredBrandName>
        </HorRow>
      </Brand>
    </StyledHeader>
  );
}

export default Header;
