import React from 'react';

const Form = ({ handleChange, handleSubmit, state }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='inputs'
        type='date'
        name='date'
        value={state.date}
        onChange={handleChange}
        required
      />
      <input
        className='inputs'
        type='text'
        name='location'
        value={state.location}
        placeholder='Input location'
        onChange={handleChange}
        required
      />
      <input
        className='inputs'
        type='number'
        name='amount'
        value={state.amount}
        placeholder='Input amount'
        onChange={handleChange}
        required
      />
      <input
        className='inputs'
        type='text'
        name='description'
        value={state.description}
        placeholder='Input item description'
        onChange={handleChange}
        required
      />
      <button id='submitButton'>ADD TO LIST</button>
    </form>
  );
};

export default Form;
