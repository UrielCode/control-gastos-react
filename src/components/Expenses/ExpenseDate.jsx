import './ExpenseDate.css'

const ExpenseDate = ({ date }) => {
  

  const month = date.toLocaleString('es-Mx', { month: 'long' });
  const day = date.toLocaleString('es-Mx', { day: '2-digit',  timeZone: 'UTC' });
  const year = date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month} </div>
      <div className='expense-date__day'> {day} </div>
      <div className='expense-date__year'>{year} </div>
    </div>
  )
}

export default ExpenseDate