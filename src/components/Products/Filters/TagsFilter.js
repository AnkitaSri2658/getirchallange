import { useState, useEffect, useMemo } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { productActions } from "../../../store/product-slice";
import Checkbox from "../../UI/CheckBox";

const TagsFilter = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const defaultProducts = useSelector((state) => state.product.products);

  const defaulttags = useMemo(() => {
    let tags = defaultProducts.map((i) => i.tags);
    tags = [].concat.apply([], tags);
    tags = [...new Set(tags)];
    return tags;
  }, [defaultProducts]);

  const handleChange = (e) => {
    setChecked(!checked);
    let checkedTags = selectedTags;
    const check = e.target.checked;
    const checkValue = e.target.value;

    if (check) {
      checkedTags = [...checkedTags, checkValue];
      setSelectedTags(checkedTags);
      setChecked(true);
    } else {
      var index = checkedTags.indexOf(checkValue);
      if (index > -1) {
        checkedTags.splice(index, 1);
        setSelectedTags(checkedTags);
      }
      setChecked(false);
    }
    dispatch(productActions.tagFilter(checkedTags));
  };

  useEffect(() => {
    setTags(defaulttags);
  }, [defaulttags]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const result = defaulttags.filter((item) => {
      return item.toLowerCase().indexOf(value) !== -1;
    });
    setTags(result);
  };

  const checkBoxCmp = tags.map((item,i) => (
    <Checkbox label={item} checked={checked} onChange={handleChange}></Checkbox>
  ));

  return (
    <div>
      <form>
        <input
          type="text"
          onKeyDown={handleSearch}
          placeholder="Search Tags"
        />
      </form>
      <section>{checkBoxCmp}</section>
    </div>
  );
};

export default TagsFilter;
