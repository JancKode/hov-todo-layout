import React, { useEffect } from 'react';

import './List.styles.scss';

const List = ({ tasks, index, completeTask, removeTask }) => {
  useEffect(() => {}, [tasks]);
  return (
    <section className='list'>
      {tasks.map((task, index) => {
        return (
          <div className='round' key={`${task.title}${index}`}>
            <div className='checkbox--wrapper'>
              <input
                onClick={() => completeTask(index)}
                type='checkbox'
                id={task.title}
                defaultChecked={task.completed ? true : false}
              />
              <label htmlFor={task.title}></label>
              {!task.completed ? (
                <p className='text'>{task.title}</p>
              ) : (
                <strike>{task.title}</strike>
              )}
            </div>
            <span className='delete' onClick={() => removeTask(index)}>
              Delete
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default List;
