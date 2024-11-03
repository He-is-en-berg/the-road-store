import { createContext, useEffect, useState } from "react";
import { getCart, getCategory, getProduct } from "./api";

export const AppContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(
    function () {
      async function getContext() {
        const cat = await getCategory();
        const prod = await getProduct();
        const cart = await getCart();
        const userCart = cart.filter(
          (cartItem) => cartItem.user_id === user?.user.id
        );
        setCart(userCart);
        setCategories(cat);
        setAllProducts(prod);
        setProducts(prod);
      }
      getContext();
    },
    [user]
  );

  useEffect(
    function () {
      if (search.length > 0) {
        setProducts(
          allProducts.filter((product) =>
            product.fullName.toLowerCase().includes(search.toLowerCase())
          )
        );
      } else {
        setProducts(allProducts);
        setCategoryFilter("");
      }
    },
    [search, allProducts]
  );

  useEffect(
    function () {
      setSearch("");
      setProducts(() =>
        categoryFilter === ""
          ? allProducts
          : allProducts.filter(
              (product) => product.categoryName === categoryFilter
            )
      );
    },
    [categoryFilter, allProducts]
  );

  useEffect(
    function () {
      if (sortBy === "descending")
        setProducts((products) => [
          ...products.sort((p1, p2) => p2.price - p1.price),
        ]);
      else if (sortBy === "ascending")
        setProducts((products) => [
          ...products.sort((p1, p2) => p1.price - p2.price),
        ]);
      else {
        setCategoryFilter("");
        setSearch("");
        setProducts([...allProducts]);
      }
    },
    [sortBy, allProducts]
  );
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        categories,
        products,
        setCategoryFilter,
        categoryFilter,
        setSortBy,
        setSearch,
        search,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export default AppContextProvider;
