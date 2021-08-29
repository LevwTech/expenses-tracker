import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card.js";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const expenses = [];

function App() {
  const [myExpenses, setExpense] = useState(expenses);
  function addExpenseHandler(expense) {
    setExpense([expense, ...myExpenses]);
    // setExpense((prevExpenses) => [expense, ...prevExpenses]); // better method!
  }
  return (
    <Card>
      <NewExpense getAddExpense={addExpenseHandler}></NewExpense>
      {myExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default App;
