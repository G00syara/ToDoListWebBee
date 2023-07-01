import React from 'react';

import { TodoItem } from '../components/TodoItem';
import { TodoPanel } from '../components/TodoPanel';

interface TodoListProps {
  todoIdForEdit: Todo['id'] | null;
  todos: Todo[];
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
  changeTodo: ({ title }: Omit<Todo, 'id' | 'checked'>) => void;
  cancelTodo: ({}: Omit<Todo, 'id' | 'checked'>) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  todoIdForEdit,
  changeTodo,
  deleteTodo,
  checkTodo,
  cancelTodo,
  selectTodoIdForEdit,
}) => (
  <div>
    {todos.map((todo) => {
      if (todo.id === todoIdForEdit)
        return <TodoPanel mode="edit" changeTodo={changeTodo} editTodo={todo} cancelTodo={cancelTodo} />;
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
        />
      );
    })}
  </div>
);
