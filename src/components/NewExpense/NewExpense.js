import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
function NewExpense(props) {
  function saveExpenseData(EnteredExpenseData) {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.floor(Math.random() * 1000) + 1,
    };
    props.getAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData}></ExpenseForm>
    </div>
  );
}
export default NewExpense;
