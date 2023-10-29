// Interface for props required by the EditTodoForm component
export interface EditTodoFormProps {
  // Function to edit a task with a new description and ID
  editTodo: (task: string, id: string) => void;

  // The task object containing task details
  task: {
    id: string; // Unique ID of the task
    task: string; // Description of the task
    completed: boolean; // Indicates if the task is completed
    isEditing: boolean; // Indicates if the task is in edit mode
  };
}

// Interface for props required by the Todo component
export interface TodoProps {
  // The task object containing task details
  task: {
    id: string; // Unique ID of the task
    task: string; // Description of the task
    completed: boolean; // Indicates if the task is completed
    isEditing: boolean; // Indicates if the task is in edit mode
  };

  // Function to delete a task by ID
  deleteTodo: (id: string) => void;

  // Function to toggle the editing mode of a task by ID
  editTodo: (id: string) => void;

  // Function to toggle the completion status of a task by ID
  toggleComplete: (id: string) => void;

  // Function to copy the task's description to the clipboard
  copyToClipboard: () => void;
}

// Interface for props required by the TodoForm component
export interface TodoFormProps {
  // Function to add a new task to the list
  addTodo: (todo: string) => void;
}

// Interface representing the structure of a single task item
export interface TodoItem {
  id: string; // Unique ID of the task
  task: string; // Description of the task
  completed: boolean; // Indicates if the task is completed
  isEditing: boolean; // Indicates if the task is in edit mode
}
