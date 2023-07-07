import React from 'react';
import TodoItem from '../components/TodoItem';
import TodoEditPanel from './TodoEditPanel';
import { Todo } from '../Types';

interface TodoListProps {
  todoIdForEdit: Todo['id'] | null;
  todos: Todo[];
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
  changeTodo: ({ title }: Pick<Todo, 'title'>) => void; //
  cancelTodo: ({}: Pick<Todo, 'title'>) => void;
}

const TodoList: React.FC<TodoListProps> = ({
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
        return (
          <TodoEditPanel key={todo.id} mode="edit" changeTodo={changeTodo} editTodo={todo} cancelTodo={cancelTodo} />
        );
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

export default React.memo(TodoList);
