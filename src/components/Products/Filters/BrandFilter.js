import { useState, useEffect, useMemo } from "react";
import { useSelector,useDispatch } from "react-redux";
import { productActions } from "../../../store/product-slice";
import Checkbox from "../../UI/CheckBox";

const BrandFilter = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const defaultProducts = useSelector((state) => state.product.products);

  const defaultBrands = useMemo(() => {
    const brandArray = defaultProducts.map((item) => item.manufacturer);
    return [...new Set(brandArray)];
  }, [defaultProducts]);

  useEffect(() => {
    setBrands(defaultBrands);
  }, [defaultBrands]);

  const handleChange = (e) => {
    setChecked(!checked);
    let checkedBrands = selectedBrands;
    const check = e.target.checked;
    const checkValue = e.target.value;

    if (check) {
      checkedBrands = [...checkedBrands, checkValue];
      setSelectedBrands(checkedBrands);
      setChecked(true);
    } else {
      var index = checkedBrands.indexOf(checkValue);
      if (index > -1) {
        checkedBrands.splice(index, 1);
        setSelectedBrands(checkedBrands);
      }
      setChecked(false);
    }
    dispatch(productActions.brandFilter(checkedBrands));
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const result = defaultBrands.filter((item) => {
      return item.toLowerCase().indexOf(value) !== -1;
    });
    setBrands(result);
  };

 
  const checkBoxCmp = brands.map((item,i) => (
    <Checkbox label={item} checked={checked} onChange={handleChange} ></Checkbox>
  ));
  return (
    <div>
      <form>
        <input
          type="text"
          onKeyDown={handleSearch}
          placeholder="Search Brands"
        />
      </form>
      <section>{checkBoxCmp}</section>
    </div>
  );
};

export default BrandFilter;
