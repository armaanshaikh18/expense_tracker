import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/Expense.css";
import ExpenseFilter from "../ExpenseForm/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";
import ExpenseList from "../ExpenseForm/ExpenseList";

function Expenses(props) {
  const [selectedYear, setselectedYear] = useState("2026");

  const onFilterExpenseYear = (filterYear) => {
    setselectedYear(filterYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onSaveFilter={onFilterExpenseYear}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </>
  );
}

export default Expenses;
