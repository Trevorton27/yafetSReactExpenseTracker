import React from 'react';
import ExpenseRow from './ExpenseRow';

const Table = ({ expenseList, setExpenseList }) => {
  const deleteExpense = (id) => {
    setExpenseList(expenseList.filter((expense) => id !== expense.id));
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Payment Type</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <ExpenseRow expenseList={expenseList} deleteExpense={deleteExpense} />
      </tbody>
    </table>
  );
};

export default Table;
