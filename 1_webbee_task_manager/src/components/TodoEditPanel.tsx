import React, { useState, useMemo } from 'react';
import MyButton from './UI/button/MyButton';
import { Todo } from '../Types';

interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Pick<Todo, 'title' | 'completed'>;
  changeTodo: ({ title }: Pick<Todo, 'title'>) => void;
  cancelTodo: ({}: Pick<Todo, 'title'>) => void;
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

  const saveTodo = () => {
    if (isEdit) {
      return props.changeTodo(todo);
    }
  };

  const cancelTodo = () => {
    if (isEdit) {
      return props.cancelTodo(props.editTodo);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, title } = event.target;
    setTodo({ ...todo, [title]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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
          {isEdit && <MyButton onClick={saveTodo}>Save</MyButton>}
          {isEdit && (
            <MyButton type="button" onClick={cancelTodo}>
              Cancel
            </MyButton>
          )}
        </div>
      </div>
    </form>
  );
};

export default React.memo(TodoEditPanel);
