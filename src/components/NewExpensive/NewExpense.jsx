import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredSaveExpenseData) => {
    const expenseData = {
      ...enteredSaveExpenseData,
      id: Math.random().toString()
    };
    onAddExpense(expenseData)
    setIsEditing(false);
  }

  const isEditingHanlder = () => {
    setIsEditing(true)
  };

  const stopEditingHander = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing
        && (
          <button onClick={isEditingHanlder}>Añadir nuevo gasto</button>
        )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCalcel={stopEditingHander} />
      )}
    </div>
  )
}

export default NewExpense
