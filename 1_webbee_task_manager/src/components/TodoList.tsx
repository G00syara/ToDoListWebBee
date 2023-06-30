import React, { FC, useState } from 'react';
import TodoItem from './TodoItem';
import MySelect from './UI/select/MySelect';

interface TodoListListProps {
  children?: React.ReactChild | React.ReactNode;
}

const TodoList: FC<TodoListListProps> = () => {
  return (
    <div className="TodoList">
      <h1 className="TodoHeader">Todo Шки</h1>
      <div className="TodoText">
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
