import React, { useState, useMemo, useCallback } from 'react';
import TodoList from './TodoList';
import TodoAddPanel from './TodoAddPanel';
import { Todo } from '../Types';

const DEFAULT_TODO_LIST: Array<Todo> = [
  { id: 1, title: 'task 1', completed: false },
  { id: 2, title: 'task 2', completed: false },
  { id: 3, title: 'task 3', completed: false },
  { id: 4, title: 'tttask 3', completed: false },
];

const TodoForm = () => {
  const [todoIdForEdit, setTodoIdForEdit] = useState<number | null>(null);
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [lastId, setlastId] = useState<number>(todos[todos.length - 1]?.id + 1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTodos = useMemo(() => {
    if (searchQuery) {
      return [...todos].filter((todo) => todo.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return todos;
  }, [searchQuery, todos]);

  const selectTodoIdForEdit = useCallback((id: Todo['id']) => {
    setTodoIdForEdit(id);
  }, []);

  const deleteTodo = useCallback((id: Todo['id']) => {
    setTodos((delTodo) => delTodo.filter((todo) => todo.id !== id));
  }, []);

  const addTodo = ({ title }: Pick<Todo, 'title'>) => {
    setTodos((todos) => [...todos, { id: lastId, title, completed: false }]);
    setlastId((x) => x + 1);
  };

  const checkTodo = useCallback((id: Todo['id']) => {
    setTodos((checkCompletedTodo) =>
      checkCompletedTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  }, []);

  const changeTodo = ({ title }: Pick<Todo, 'title'>) => {
    if (!title) {
      return alert('Не оставляй поле пустым');
    }
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

  const cancelTodo = useCallback(() => {
    setTodoIdForEdit(null);
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="simple_input"
      />
      <TodoList
        todoIdForEdit={todoIdForEdit}
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        checkTodo={checkTodo}
        selectTodoIdForEdit={selectTodoIdForEdit}
        changeTodo={changeTodo}
        cancelTodo={cancelTodo}
      />
      <TodoAddPanel addTodo={addTodo} />
    </>
  );
};

//

export default React.memo(TodoForm);
