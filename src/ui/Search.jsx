import styled from "styled-components";
import HorRow from "./HorRow";
import { useContext } from "react";
import { AppContext } from "../services/AppContext";

const SearchBox = styled(HorRow)`
  background-color: #fff;
  padding: 0.6rem 0.8rem;
  border-radius: 0.2rem;
`;
const SearchBoxIcon = styled(HorRow)`
  color: #000;
  font-size: 2.3rem;
`;
const SearchElement = styled.input`
  width: 30rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
`;

function Search() {
  const { search, setSearch } = useContext(AppContext);
  return (
    <SearchBox>
      <SearchElement
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchBoxIcon>
        <ion-icon name="search"></ion-icon>
      </SearchBoxIcon>
    </SearchBox>
  );
}

export default Search;
