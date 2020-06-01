import React from 'react';

import AddTodo from 'features/todoList/AddTodo';
import TodoList from 'features/todoList/TodoList';
import Footer from 'features/visibilityFilter/Footer';

import styles from './Todo.module.css';

function Todo() {
  return (
    <div className={styles.container}>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default Todo;
