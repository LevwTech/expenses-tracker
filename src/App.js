import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card.js";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import "./App.css";
const expenses = [];
function App() {
  const [myExpenses, setExpense] = useState(expenses);
  function addExpenseHandler(expense) {
    setExpense([expense, ...myExpenses]);
    // setExpense((prevExpenses) => [expense, ...prevExpenses]); // better method!
  }
  const expensesMsg = <p className="center">No expenses found.</p>;
  // if (expensesMsg.length > 0) {   // ANOTHER WAY
  //   expensesMsg = myExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id} // must have in lists for better memory performance and to avoid bugs
  //       title={expense.title}
  //       date={expense.date}
  //       amount={expense.amount}
  //     ></ExpenseItem>
  //   ));
  // }
  return (
    <Card>
      <NewExpense getAddExpense={addExpenseHandler}></NewExpense>
      {myExpenses.length === 0
        ? expensesMsg
        : myExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id} // must have in lists for better memory performance and to avoid bugs
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            ></ExpenseItem>
          ))}
    </Card>
  );
}

export default App;
