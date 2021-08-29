import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  function textClick(e) {
    setTitle(e.target.value);
  }
  function amountClick(e) {
    setAmount(e.target.value);
  }
  function dateClick(e) {
    setDate(e.target.value);
  }
  function submitClick(e) {
    e.preventDefault();
    const expenseData = { title, amount, date: new Date(date) };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  }
  return (
    <form onSubmit={submitClick}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" onChange={textClick} value={title}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountClick}
            value={amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateClick}
            value={date}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
