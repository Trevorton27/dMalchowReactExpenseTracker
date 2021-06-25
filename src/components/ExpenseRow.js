import React from 'react';

const ExpenseRow = ({ expenseArray, handleDeleteRow }) => {
  return expenseArray.map((expense) => {
    return (
      <tr key={expense.id}>
        <td>{expense.date}</td>
        <td>{expense.location}</td>
        <td>{expense.amount}</td>
        <td>{expense.description}</td>
        <td>
          <button id='deleteBtn' onClick={() => handleDeleteRow(expense.id)}>
            Remove
          </button>
        </td>
      </tr>
    );
  });
};

export default ExpenseRow;
