import React, { useState } from 'react';

const ExpenseForm = ({ expenseList, setExpenseList }) => {
  const [type, setType] = useState(' ');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [location, setLocation] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: Date.now(),
      type,
      name,
      date,
      amount,
      location
    };

    setExpenseList([...expenseList, expense]);
    resetForm();
    console.log('expenseList: ', expenseList);
  };

  const resetForm = () => {
    setType('');
    setName('');
    setDate('');
    setAmount('');
    setLocation('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <select
          value={type}
          className='col-5 p-2 mt-sm-2 mb-sm-3 '
          onChange={(e) => setType(e.target.value)}
        >
          <option value='Select'> Select Payment Type</option>
          <option value='card'> Card </option>
          <option value='cash'> Cash </option>
          <option value='cryptocurrency'> Crypto Currency </option>
          <option value='other'> Other </option>
        </select>

        <input
          type='text'
          placeholder='What did you spend on?'
          value={name}
          className='col-5 p-2  mt-sm-2 mb-sm-3 '
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='date'
          className='col-5 p-2 mt-sm-2 mb-sm-3 '
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type='number'
          placeholder='How much?'
          value={amount}
          className='col-5 p-2 mt-sm-2 mb-sm-3'
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type='text'
          placeholder='Where?'
          value={location}
          className='col-5 p-2 mt-sm-2 mb-sm-3'
          onChange={(e) => setLocation(e.target.value)}
        />
        <div>
          <button type='submit' className='btn btn-primary'>
            {' '}
            Add a new expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
