import { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../services/AppContext";
import { HashLink } from "react-router-hash-link";

const Styledcategory = styled.div`
  color: #000;
  ${(prop) => css`
    background-image: url(${prop.$image});
    ${prop.$active &&
    css`
      transform: scale(107%);
      color: #c7253e;
    `}
  `}

  /* background-size: cover; */
  background-size: 92%;
  position: relative;
  /* background-repeat: no-repeat; */
  background-position: bottom -4rem right 2.1rem;

  height: 30rem;
  border-radius: 10px;
  /* color: #000; */
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(105%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

const CategoryName = styled.h2`
  font-size: 2.4rem;
  text-transform: uppercase;
  position: absolute;
  opacity: 80%;
  top: 2rem;
  left: 2rem;
`;

// eslint-disable-next-line react/prop-types
function Category({ image, name, active }) {
  const { setCategoryFilter } = useContext(AppContext);

  function handleClick() {
    setCategoryFilter((activeCategory) =>
      name === activeCategory ? "" : name
    );
  }
  return (
    <HashLink smooth to={"#products"}>
      <Styledcategory
        $active={active}
        $image={image}
        onClick={() => handleClick()}
      >
        <CategoryName>{name}</CategoryName>
      </Styledcategory>
    </HashLink>
  );
}

export default Category;
