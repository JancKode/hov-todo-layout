import React from 'react';

import './List.styles.scss';

const List = () => {
  return (
    <section className='list'>
      <div class='round'>
        <div className='checkbox--wrapper'>
          <input type='checkbox' id='checkbox' />
          <label for='checkbox'></label>
          <p className='text'>Sample 1</p>
        </div>
        <span className='delete'>Delete</span>
      </div>

      <div class='round'>
        <div className='checkbox--wrapper'>
          <input defaultChecked={true} type='checkbox' id='checkbox2' />
          <label for='checkbox2'></label>
          <strike className='text'>Sample 2</strike>
        </div>
        <span className='delete'>Delete</span>
      </div>

      <div class='round'>
        <div className='checkbox--wrapper'>
          <input type='checkbox' id='checkbox3' />
          <label for='checkbox3'></label>
          <p className='text'>Sample 3</p>
        </div>

        <span className='delete'>Delete</span>
      </div>
    </section>
  );
};

export default List;
