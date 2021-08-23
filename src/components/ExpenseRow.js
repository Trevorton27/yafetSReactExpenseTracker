import React from 'react';

function ExpenseRow({ expenseList, deleteExpense }) {
  return expenseList.map((expense) => (
    <tr key={expense.id}>
      <td>{expense.name}</td>
      <td>{expense.type}</td>
      <td>{expense.date}</td>
      <td>{expense.amount}</td>
      <td>{expense.location}</td>
      <td>
        <button
          className='deleteButton'
          onClick={(e) => deleteExpense(expense.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
}

export default ExpenseRow;
