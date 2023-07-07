import React, { useState, useMemo } from 'react';
import MyButton from './UI/button/MyButton';
import { Todo } from '../Types';

interface DefaultTodoProps {
  title: string;
  completed: boolean;
}

interface AddTodoPanelProps {
  addTodo: ({ title }: Pick<Todo, 'title'>) => void;
}

const DEFAULT_TODO: DefaultTodoProps = { title: '', completed: false };

const TodoAddPanel: React.FC<AddTodoPanelProps> = (props) => {
  const [todo, setTodo] = useState<DefaultTodoProps>(DEFAULT_TODO);

  const addTodo = () => {
    if (!todo.title) {
      return alert('Не оставляй строку пустой)');
    }
    props.addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, title } = event.target;
    setTodo({ ...todo, [title]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="TodoAddInputButton">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            <input
              autoComplete="off"
              id="title"
              value={todo.title.trimStart()}
              onChange={onChange}
              title="title"
              placeholder="Вписать новую Todo"
            />
          </label>
          <MyButton onClick={addTodo}>Create new task</MyButton>
        </form>
      </div>
    </div>
  );
};

export default React.memo(TodoAddPanel);
