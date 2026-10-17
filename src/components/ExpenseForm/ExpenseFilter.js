import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const onChangeHandler = (e) => {
    props.onSaveFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={onChangeHandler}>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
