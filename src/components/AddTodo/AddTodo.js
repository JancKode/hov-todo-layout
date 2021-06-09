import React from 'react';

import './AddTodo.styles.scss';

const AddTodo = (props) => {
  return (
    <section>
      <div className='todo'>
        <span className='todo--description'>
          <p>+ Add a new task</p>
        </span>
        <span className='todo--button'>
          <p> Add</p>{' '}
        </span>
      </div>
    </section>
  );
};

export default AddTodo;
