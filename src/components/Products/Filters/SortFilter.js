import { useState } from "react";
import { useDispatch } from "react-redux";
import RadioButton from "../../UI/RadioButton";
import { productActions } from "../../../store/product-slice";

const sortArray = [
    "Price low to high",
    "Price high to low",
    "New to old",
    "Old to new",
  ];

const SortFilter = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleSort = (item) => {
    dispatch(productActions.sortFilter(item));
    setValue(item)
  };
 

  return sortArray.map((item) => (
    <RadioButton
      onChange={handleSort}
      value={value === item}
      label={item} 
      param={item}
    ></RadioButton>
  ));
};

export default SortFilter;
