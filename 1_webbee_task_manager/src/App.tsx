import React, { useState, useMemo } from 'react';

import { TodoList } from './components/TodoList';

import './css/app.css';

import { TodoPanel } from './components/TodoPanel';

const DEFAULT_TODO_LIST = [
  { id: 1, title: 'task 1', completed: false },
  { id: 2, title: 'task 2', completed: false },
  { id: 3, title: 'task 3', completed: false },
  { id: 4, title: 'tttask 3', completed: false },
];

export const App = () => {
  const [todoIdForEdit, setTodoIdForEdit] = useState<number | null>(null);
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const sortedTodos = useMemo(() => {
    if (searchQuery) {
      return [...todos].sort(() => searchQuery.localeCompare(searchQuery));
    }
    return todos;
  }, [searchQuery, todos]);

  const sortedTodos2 = useMemo(() => {
    return sortedTodos.filter((todos) => todos.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedTodos]);

  const selectTodoIdForEdit = (id: Todo['id']) => {
    setTodoIdForEdit(id);
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = ({ title }: Omit<Todo, 'id' | 'completed'>) => {
    console.log(todos);

    setTodos([...todos, { id: todos.length == 0 ? 1 : todos[todos.length - 1].id + 1, title, completed: false }]);
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  const changeTodo = ({ title }: Omit<Todo, 'id' | 'completed'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, title, completed: todo.completed ? !todo.completed : todo.completed };
        }
        return todo;
      }),
    );
    setTodoIdForEdit(null);
  };

  const cancelTodo = () => {
    setTodos(
      todos.map((todo) => {
        return { ...todo, completed: todo.completed };
      }),
    );
    setTodoIdForEdit(null);
  };

  return (
    <div className="app_container">
      <div className="container">
        <h1 className="TodoText"> Todoшка</h1>
        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="simple_input"
        />
        <TodoList
          todoIdForEdit={todoIdForEdit}
          todos={sortedTodos2}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          changeTodo={changeTodo}
          cancelTodo={cancelTodo}
        />
        <TodoPanel mode="add" addTodo={addTodo} />
      </div>
    </div>
  );
};
