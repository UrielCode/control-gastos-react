import { useState } from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = ({onChangeFilter, selected}) => {

  const dropDownChangeHandler = (e) => {

    onChangeFilter(e.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filtrar por año</label>

        <select value={selected}  onChange={dropDownChangeHandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter
