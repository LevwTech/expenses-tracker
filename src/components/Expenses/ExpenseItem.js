import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      {/* className is for basic html elements not custom ones so its done through props.className */}
      <ExpenseDate date={props.date} />
      {/* here card wraps custom elements even! */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
