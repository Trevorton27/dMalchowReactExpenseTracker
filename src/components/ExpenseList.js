import React from 'react';
import ExpenseRow from './ExpenseRow';

const ExpenseList = ({ expenseArray, handleDeleteRow }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className='tableHeads'>Date</th>
            <th className='tableHeads'>Location</th>
            <th className='tableHeads'>Amount</th>
            <th className='tableHeads'>Description</th>
            <th className='tableHeads'>Remove</th>
          </tr>
        </thead>
        <tbody>
          <ExpenseRow
            expenseArray={expenseArray}
            handleDeleteRow={handleDeleteRow}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
