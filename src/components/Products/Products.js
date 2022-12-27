import AvailableProducts from "./AvailableProducts";
import Filters from "./Filters/Filters";
import Cart from "../Cart/Cart";

const Products = () => {
  

  return (
    <div>
      <Filters />
      <AvailableProducts />
      <Cart />
    </div>
  );
};
export default Products;
