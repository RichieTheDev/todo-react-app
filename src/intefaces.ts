export interface EditTodoFormProps {
  editTodo: (task: string, id: string) => void;
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
}

export interface TodoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
  copyToClipboard: () => void; // Function to copy to clipboard
}

export interface TodoFormProps {
  addTodo: (todo: string) => void;
}

export interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

export interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}
