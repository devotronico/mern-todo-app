import axios from 'axios';
import { Todo, Message } from 'features/todoList/types';

// https://github.com/bluzi/jsonstore
// https://jsonbin.io/
const baseUrl = 'https://jsonbin.io';

interface Response {
  item: Todo[];
  message: Message[];
}

export async function readTodos(): Promise<Response> {
  const response = await axios.get<Response>(
    `${process.env.REACT_APP_URL_API}/todos`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
  console.log('RESULT', response.data);

  return response.data;
}

/// API ADD TODO
export async function apiUpdateTodo({ _id, completed }: Todo) {
  try {
    const response = await axios.put<Response>(
      `${process.env.REACT_APP_URL_API}/todo/${_id}`,
      { completed: !completed },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
    console.log('RESULT', response.data);
    // return response.data;
  } catch (err) {
    console.log('ERRORE', err);
    const errors: Message[] = err.response.data.message;
    if (errors) {
      errors.forEach((error) => console.log('ERRORE', error));
    }
  }
}

/// API ADD TODO
export async function apiAddTodo(todos: Todo) {
  try {
    const res = await axios.put<Todo>(
      `${process.env.REACT_APP_URL_API}/todo`,
      todos,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
    console.log('RESULT', res);
  } catch (err) {
    console.log('ERRORE', err);
    // const errors: any[] = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => console.log('ERRORE', error));
    // }
  }
}

///
/* export async function writeTodos(todos: Todo[]) {
  await axios.put<Todo[]>(baseUrl + window.location.pathname, todos, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
} */
