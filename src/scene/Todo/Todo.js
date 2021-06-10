import React, { useState } from 'react';
import AddTodo from '../../components/AddTodo/AddTodo';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';

const Todo = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: 'Grab some Pizza',
      completed: true,
    },
    {
      title: 'Do your workout',
      completed: true,
    },
    {
      title: 'Hangout with friends',
      completed: false,
    },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <Header />
      <AddTodo addTask={addTask} />
      <List tasks={tasks} completeTask={completeTask} removeTask={removeTask} />
    </div>
  );
};

export default Todo;
