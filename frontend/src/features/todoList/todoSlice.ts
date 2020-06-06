import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from 'app/store';
import { RootState } from 'app/rootReducer';
import { apiAddTodo, readTodos, apiUpdateTodo } from 'api/jsonstore';
import { Todo } from 'features/todoList/types';

const initialState: Todo[] = [
  { _id: '1', completed: false, text: 'Lorem Ipsum 1', date: '' },
  { _id: '2', completed: true, text: 'Lorem Ipsum 2', date: '' },
  { _id: '3', completed: false, text: 'Lorem Ipsum 3', date: '' }
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    GET_ALL(state, action: PayloadAction<Todo[]>) {
      return [...state, ...action.payload];
      // state.push(action.payload);
      // return action.payload;
    },
    GET_ONE(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    UPDATE_ONE(state, action: PayloadAction<Todo>) {
      let todo = state.find((todo) => todo._id === action.payload._id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { UPDATE_ONE } = todoSlice.actions;

/// LOAD ALL TODOS
export const loadTodos = (): AppThunk => async (dispatch: AppDispatch) => {
  const response = await readTodos();
  dispatch(todoSlice.actions.GET_ALL(response.item));
};

/// TOGGLE TODO
export const toggleTodo = (todo: Todo): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(UPDATE_ONE(todo));
  await apiUpdateTodo(todo);
};

export const addTodo = (text: string): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const newTodo: Todo = {
    _id: '',
    completed: false,
    text: text
  };

  dispatch(todoSlice.actions.GET_ONE(newTodo));

  apiAddTodo(newTodo);
  // apiAddTodo(getState().todos);
};

/// ADD TODO
// export const addTodo = (text: string): AppThunk => async (
//   dispatch: AppDispatch
// ) => {
//   // dispatch(loader(true));
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//     }
//   };
//   const body = JSON.stringify({ text });

//   try {
//     const res = await axios.post(
//       `${process.env.REACT_APP_URL_API}/auth/login`,
//       body,
//       config
//     );
//     dispatch(LOGIN_SUCCESS(res.data));
//   } catch (err) {
//     const errors: any[] = err.response.data.errors;
//     if (errors) {
//       errors.forEach((error) =>
//         dispatch(
//           setAlert(error.severity, error.title, error.desc, error.timeout)
//         )
//       );
//     }
//     dispatch(LOGIN_FAIL({ token: null, isAuthenticated: false, user: null }));
//   }
//   dispatch(loader(false));
//   history.push('/');
// };

/* export const createTodoList = (): AppThunk => async (dispatch: AppDispatch) => {
  const id = Math.random().toString(36).substr(2, 9);
  window.history.pushState(null, document.title, `${id}`);
}; */

export default todoSlice.reducer;
