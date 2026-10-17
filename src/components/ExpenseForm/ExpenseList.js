import React from "react";
import "./ExpenseList.css";

import ExpenseItem from "../Expenses/ExpenseItem";

const ExpenseList = (props) => {
  return (
    <ul className="expenses-list">
      {props.items.length > 0 ? (
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      ) : (
        <h2 className="expenses-list__fallback ">Found No Expenses!</h2>
      )}
    </ul>
  );
};

export default ExpenseList;
