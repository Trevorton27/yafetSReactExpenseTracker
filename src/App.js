import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Table from './components/Table';

function App() {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('list')) {
      setExpenseList(JSON.parse(localStorage.getItem('list')));
    }
  }, []);

  useEffect(() => {
    if (expenseList) {
      localStorage.setItem('list', JSON.stringify(expenseList));
    }
  }, [expenseList]);

  return (
    <div className='App'>
      <h1 className='text-primary mt-sm-2 mb-sm-4'>Expense Tracker</h1>

      <ExpenseForm expenseList={expenseList} setExpenseList={setExpenseList} />
      <Table expenseList={expenseList} setExpenseList={setExpenseList} />
    </div>
  );
}

export default App;
