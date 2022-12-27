import Card from "../../UI/Card";
import BrandFilter from "./BrandFilter";
import classes from "./Filters.module.css";
import SortFilter from "./SortFilter";
import TagsFilter from "./TagsFilter";

const Filters = () => {
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filters}>
        <label>Sorting</label>
        <Card>
          <SortFilter />
        </Card>
      </div>
      <div className={classes.filters}>
        <label>Brands</label>
        <Card>
          <BrandFilter />
        </Card>
      </div>
      <div className={classes.filters}>
        <label>Tags</label>
        <Card>
          <TagsFilter />
        </Card>
      </div>
    </div>
  );
};

export default Filters;
