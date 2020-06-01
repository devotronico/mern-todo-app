import axios from 'axios';
import { Todo } from 'features/todoList/types';

// https://github.com/bluzi/jsonstore
// https://jsonbin.io/
const baseUrl = 'https://jsonbin.io';

interface GetTodosResponse {
  result: Todo[];
  ok: boolean;
}

export async function readTodos(): Promise<Todo[]> {
  const response = await axios.get<GetTodosResponse>(
    baseUrl + window.location.pathname,
    {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  );

  return response.data.result;
}

export async function writeTodos(todos: Todo[]) {
  await axios.put<Todo[]>(baseUrl + window.location.pathname, todos, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
}
