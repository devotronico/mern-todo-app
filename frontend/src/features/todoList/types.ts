export interface Todo {
  _id: string;
  completed: boolean;
  text: string;
  date: string;
}

export interface Message {
  severity: string;
  title: string;
  desc: string;
  timeout: number;
}
