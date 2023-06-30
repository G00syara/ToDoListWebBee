import React, { FC, useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

interface TodoListListProps {
  children?: React.ReactChild | React.ReactNode;
}

interface item {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: FC<TodoListListProps> = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, title: 'Do something', completed: false },
    { id: 2, title: 'Just do it', completed: true },
    { id: 3, title: 'Yes of course', completed: false },
  ]);

  const [input, setInput] = useState<string>('');

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  const addTodo = () => {
    const newTodo: item = { id: todos[todos.length - 1].id + 1, title: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            value={todo.title}
          >
            {todo.id + ' '}
            {todo.title}
          </li>
        ))}
      </ul>
      <MyInput type="type" value={input} placeholder="Add to do" onChange={(e) => setInput(e.currentTarget.value)} />
      <MyButton onClick={addTodo}>Create new task</MyButton>
    </div>
  );
};

export default TodoItem;
