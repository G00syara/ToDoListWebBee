import React, { useMemo, PureComponent, useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import { Todo } from '../Types';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, checkTodo, selectTodoIdForEdit }) => {
  console.log('Render item ' + todo.id);

  return (
    <>
      <div className="TodoItem">
        <div className="TodoItem">
          {todo.id}
          <div
            className="TodoItem_text"
            aria-hidden
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            <input type="checkbox" checked={todo.completed} onClick={() => checkTodo(todo.id)} />
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
};

export default React.memo(TodoItem);
