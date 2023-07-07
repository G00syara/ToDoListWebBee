import React, { useState, useMemo } from 'react';
import MyButton from './UI/button/MyButton';
import { Todo } from '../Types';

interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
  changeTodo: ({ title }: Omit<Todo, 'id' | 'checked'>) => void;
  cancelTodo: ({}: Omit<Todo, 'id' | 'checked'>) => void;
}

interface DefaultTodoProps {
  title: string;
  completed: boolean;
}

const TodoEditPanel: React.FC<EditTodoPanelProps> = (props) => {
  const isEdit = useMemo(() => {
    return props.mode === 'edit';
  }, []);

  const [todo, setTodo] = useState<DefaultTodoProps>(props.editTodo);

  const SaveTodo = () => {
    if (isEdit) {
      return props.changeTodo(todo);
    }
  };

  const CancelTodo = () => {
    if (isEdit) {
      return props.cancelTodo(props.editTodo);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, title } = event.target;
    setTodo({ ...todo, [title]: value });
  };

  return (
    <div className="TodoEditInputButton">
      <label htmlFor="title">
        <input
          autoComplete="off"
          id="title"
          value={todo.title.trimStart()}
          onChange={onChange}
          title="title"
          placeholder="А текст ;("
        />
      </label>
      <div className="buttons">
        {isEdit && <MyButton onClick={SaveTodo}>Save</MyButton>}
        {isEdit && <MyButton onClick={CancelTodo}>Cancel</MyButton>}
      </div>
    </div>
  );
};

export default React.memo(TodoEditPanel);
