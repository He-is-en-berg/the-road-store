import styled from "styled-components";
import Search from "../../ui/Search";
import HorRow from "../../ui/HorRow";
import { useContext } from "react";
import { AppContext } from "../../services/AppContext";

const StyledHeader = styled(HorRow)`
  justify-content: space-between;
  padding: 3rem 4rem;
  margin-bottom: 1rem;
`;
const SortBox = styled(HorRow)`
  font-size: 1.6rem;
  gap: 1rem;
  & ion-icon {
    font-size: 2rem;
  }
`;
const Text = styled.p``;
const Select = styled.select`
  font-size: 1.4rem;
  background-color: inherit;
  text-align: center;
  border-radius: 9px;
  height: 3rem;
  color: #444;
  /* width: 8rem; */
`;
const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: 800;
  color: #5f5f5f;
  letter-spacing: -1px;
  text-transform: capitalize;
`;
const ColorHeading = styled.h1`
  font-weight: 800;
  letter-spacing: -1px;
  font-size: 5.2rem;
  text-transform: capitalize;
  color: #c7253e;
  display: inline;
`;
function Header() {
  const { setSortBy } = useContext(AppContext);
  return (
    <StyledHeader>
      <SortBox>
        <Text>Sort By:</Text>
        {/* <ion-icon name="bar-chart-outline"></ion-icon> */}
        <Select
          onChange={(e) => {
            // console.log(e.target.value);
            setSortBy(e.target.value);
          }}
        >
          <option value="default">--default--</option>
          <option value="descending">Price: High to Low</option>
          <option value="ascending">Price: Low to High</option>
        </Select>
      </SortBox>
      <Heading>
        find <ColorHeading>your</ColorHeading> type
      </Heading>
      <Search />
    </StyledHeader>
  );
}

export default Header;
