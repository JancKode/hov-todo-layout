import React, { useState } from 'react';

import './AddTodo.styles.scss';

const AddTodo = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue('');
  };

  return (
    <section>
      <div className='todo'>
        <span className='todo--description'>
          <input
            className='todo--description'
            value={value}
            type='text'
            placeholder='+  Add a task'
            onChange={(e) => setValue(e.target.value)}
          />
        </span>
        <span className='todo--button' onClick={handleSubmit}>
          <p> Add</p>{' '}
        </span>
      </div>
    </section>
  );
};

export default AddTodo;
