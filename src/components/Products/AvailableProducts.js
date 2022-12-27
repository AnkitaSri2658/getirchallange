import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../store/product-slice";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import Pagination from "../Pagination/Pagination";
import classes from "./AvailableProducts.module.css";
import Button from "../UI/Button";

const PageSize = 16;

const AvailableProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState();
  const dispatch = useDispatch();
  const defaultProducts = useSelector(
    (state) => state.product.selectedProducts
  );

  const HandleDataType = (e) => {
    const itemType = e.target.value;
    dispatch(productActions.showItemType(itemType));
    setActive(itemType);
  };

  //pagination logic for showing data
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return defaultProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, defaultProducts]);

  let productList;

  if (defaultProducts) {
    productList = currentTableData.map((product) => (
      <ProductItem
        key={product.added}
        id={product.added}
        name={product.name}
        price={product.price}
        type={product.itemType}
      />
    ));
  } else {
    productList = <p>No Items</p>;
  }
  const chipsets = ["mug", "shirt"];
  const buttons = chipsets.map((item) => (
    <Button
      key={item}
      onClick={HandleDataType}
      value={item}
      styleClass={active === item ? "active" : ""}
    >
      {item}
    </Button>
  ));

  return (
    <section className={classes.product}>
      <h2>Products</h2>

      <div className={classes.itemFilter}>{buttons}</div>

      <Card>
        <ul>{productList}</ul>
      </Card>

      <Pagination
        classname="pagination-bar"
        currentPage={currentPage}
        totalCount={defaultProducts.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};
export default AvailableProducts;
