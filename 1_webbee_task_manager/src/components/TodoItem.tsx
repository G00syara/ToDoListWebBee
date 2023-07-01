import React from 'react';
import MyButton from '../components/UI/button/MyButton';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, checkTodo, selectTodoIdForEdit }) => (
  <>
    <div className="TodoItem">
      <div className="TodoItem">
        <div
          className="TodoItem_text"
          aria-hidden
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        >
          <input type="checkbox" onClick={() => checkTodo(todo.id)} />
          {todo.title}
        </div>
      </div>
      <div className="TodoItem">
        <MyButton onClick={() => selectTodoIdForEdit(todo.id)}>Edit</MyButton>
        <MyButton onClick={() => deleteTodo(todo.id)}>Delete</MyButton>
      </div>
    </div>
  </>
);
