import React from 'react';
import Todo from 'components/Todo';
import { useDispatch } from 'react-redux';
import { loadTodos } from 'features/todoList/todoSlice';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadTodos());

    /*     if (window.location.pathname === '/') {
      console.log('TEST 1', window.location.pathname);
      dispatch(createTodoList());
    } else {
      console.log('TEST 2', window.location.pathname);
      dispatch(loadTodos());
    } */
  }, [dispatch]);

  return (
    <div className="app">
      <Todo />
    </div>
  );
}
