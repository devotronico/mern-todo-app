import { combineReducers } from '@reduxjs/toolkit';

import counter from 'features/counter/counterSlice';
import todos from 'features/todoList/todoSlice';
import visibilityFilter from 'features/visibilityFilter/visibilityFilterSlice';

const rootReducer = combineReducers({
  counter,
  todos,
  visibilityFilter
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
