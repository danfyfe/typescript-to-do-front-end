export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ToDoList {
  toDos: ToDo[]
}