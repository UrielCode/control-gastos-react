import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpensive/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Veterinaria',
    amount: 994,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Seguro Medico',
    amount: 1494.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Comida',
    amount: 850,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <h2>Control de gastos</h2>
      
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  )


}

export default App
