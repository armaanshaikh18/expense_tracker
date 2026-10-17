import { useState } from "react";
import NewExpense from "./components/ExpenseForm/NewExpense";
import Expense from "./components/Expenses/Expense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const AddExpense = (expense) => {
    // console.log("expense", expense);
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpense={AddExpense} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
