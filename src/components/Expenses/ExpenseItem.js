import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function clickBtn() {
    setTitle("Updated!");
  }
  return (
    <Card className="expense-item">
      {/* className is for basic html elements not custom ones so its done through props.className */}
      <ExpenseDate date={props.date} />
      {/* here card wraps custom elements even! */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickBtn}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
