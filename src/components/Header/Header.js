import React from 'react';
import todoIcon from '../../assets/icons/todo-icon.png';
import './Header.styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <img className='header--icon' src={todoIcon} />
      <p className='header--title'>React Todo list</p>
    </header>
  );
};

export default Header;
