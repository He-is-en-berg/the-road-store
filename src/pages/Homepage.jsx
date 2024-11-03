import Hero from "../features/homepage/Hero";
import Footer from "../ui/Footer";
import Categories from "./Categories";
import Products from "./Products";

function Homepage() {
  return (
    <div>
      <Hero />

      <Categories />
      <div></div>
      <Products />
      <Footer />
    </div>
  );
}

export default Homepage;
