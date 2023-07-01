import React from 'react';

import MyButton from '../components/UI/button/MyButton';

const DEFAULT_TODO = { title: '', completed: false };

interface AddTodoPanelProps {
  mode: 'add';
  addTodo: ({ title }: Omit<Todo, 'id' | 'checked'>) => void;
}

interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
  changeTodo: ({ title }: Omit<Todo, 'id' | 'checked'>) => void;
  cancelTodo: ({}: Omit<Todo, 'id' | 'checked'>) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';
  const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);
  const backcolor = '';

  const onClick = () => {
    if (!todo.title) {
      return alert('Не оставляй строку пустой)');
    }
    if (isEdit) {
      return props.changeTodo(todo);
    }
    props.addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

  const CancelTodo = () => {
    if (isEdit) {
      return props.cancelTodo(todo);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, title } = event.target;
    setTodo({ ...todo, [title]: value });
  };

  return (
    <div className="TodoEditInputButton">
      <div className="TodoAddInputButton">
        <div>
          <label htmlFor="title">
            <input
              autoComplete="off"
              id="title"
              value={todo.title.trimStart()}
              onChange={onChange}
              title="title"
              placeholder=""
            />
          </label>
          {!isEdit && <MyButton onClick={onClick}>Create new task</MyButton>}
        </div>
      </div>
      <div className="buttons">
        {isEdit && <MyButton onClick={onClick}>Save</MyButton>}
        {isEdit && <MyButton onClick={CancelTodo}>Cancel</MyButton>}
      </div>
    </div>
  );
};
