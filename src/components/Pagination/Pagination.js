import React from "react";
import classes from "./Pagination.module.css";
import { usePagination, DOTS } from "../../hooks/use-pagination";
import { ReactComponent as LeftArrow }  from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow }  from "../../assets/arrow-right.svg";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    classname,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={`${classes["pagination-container"]} ${classname}`}>
      <li
        className={
          currentPage === 1
            ? `${classes["pagination-item"]} ${classes.disabled}`
            : classes["pagination-item"]
        } 
        onClick={onPrevious}
      >
        <div className={`${classes.arrow} ${classes.left}`} ><LeftArrow/> Prev</div>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li  className={`${classes.dots} ${classes["pagination-item"]}`}>&#8230;</li>;
        }

        return (
          <li key={pageNumber} 
            className={
              pageNumber === currentPage
                ? `${classes["pagination-item"]} ${classes.selected}`
                : classes["pagination-item"]
            } 
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li key={"last"} 
        className={currentPage === lastPage ? `${classes["pagination-item"]} ${classes.disabled}` : classes["pagination-item"]} 
        onClick={onNext}
      >
        <div className={`${classes.arrow} ${classes.right}`} >Next <RightArrow /></div>
      </li>
    </ul>
  );
};

export default Pagination;
