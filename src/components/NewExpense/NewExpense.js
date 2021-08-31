import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
function NewExpense(props) {
  function saveExpenseData(EnteredExpenseData) {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.floor(Math.random() * 999999) + 1,
    };
    props.getAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}
export default NewExpense;
