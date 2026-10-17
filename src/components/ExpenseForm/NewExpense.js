import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showExpense, setShowExpense] = useState(false);
  const onSaveExpenseHandler = (expenseFormData) => {
    const expenseData = {
      ...expenseFormData,
      id: Math.random(),
    };
    props.onSaveExpense(expenseData);
  };

  const openFormHandler = () => {
    setShowExpense(true);
  };

  const cancelFormHandler = () => {
    setShowExpense(false);
  };
  return (
    <div className="new-expense">
      {!showExpense && (
        <button type="button" onClick={openFormHandler}>
          Add New Expense
        </button>
      )}
      {showExpense && (
        <ExpenseForm
          close={cancelFormHandler}
          onSaveData={onSaveExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
