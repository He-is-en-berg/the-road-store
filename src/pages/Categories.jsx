import styled from "styled-components";
import Category from "../features/categories/Category";
import { useContext } from "react";
import { AppContext } from "../services/AppContext";

const StyledCategories = styled.div`
  padding: 8rem 10rem;
  padding-top: 6rem;
  background: linear-gradient(#2e2e2e, #c9c9c9);
  background-color: #28070c;
`;
const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7rem;
  margin-top: 3rem;
  /* padding: 8rem; */
  /* margin-bottom: 10rem; */
`;
const Heading = styled.h1`
  font-size: 6.2rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: -1px;
  /* margin: 3rem 7rem; */
  color: #fff;
  /* text-align: center; */
`;

// const categories = ["running", "casual", "formal", "sneaker", "gym", "boot"];

function Categories() {
  const { categories, categoryFilter } = useContext(AppContext);

  return (
    <StyledCategories>
      <Heading>Categories</Heading>
      <CategoriesContainer>
        {categories.map((category) => (
          <Category
            key={category.id}
            image={category.image}
            name={category.name}
            active={categoryFilter === category.name}
          />
        ))}
      </CategoriesContainer>
      {/* for in-page navigation */}
      <div id="products"></div>
    </StyledCategories>
  );
}

export default Categories;
