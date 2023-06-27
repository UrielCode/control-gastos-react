import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData, onCalcel }) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  // const titleChangeHandler = (e) => {
  //   setEnteredTitle(e.target.value)
  // }
  // const amountChangeHandler = (e) => {
  //   setEnteredAmount(e.target.value)
  // }
  // const dateChangeHandler = (e) => {
  //   setEnteredDate(e.target.value)
  // }

  const inputChangeHandle = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value)
    } else if (identifier === 'date') {
      setEnteredDate(value)
    } else {
      setEnteredAmount(value)
    }
  }

  const submitHandle = (e) => {
    e.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate) 
    }

    onSaveExpenseData(expenseDate)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandle}>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Nombre:</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(e) => inputChangeHandle('title', e.target.value)}
          />
        </div>

        <div className='new-expense__controls'>
          <label>Gasto:</label>
          <input
            type="number"
            min="0.01" step="0.01"
            value={enteredAmount}
            onChange={(e) => inputChangeHandle('amount', e.target.value)}
          />
        </div>

        <div className='new-expense__controls'>
          <label>Fecha:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-03"
            value={enteredDate}
            onChange={(e) => inputChangeHandle('date', e.target.value)}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={onCalcel}>Cancelar</button>
        <button type='submit'>Añadir gasto</button>
      </div>
    </form>
  )
}

export default ExpenseForm