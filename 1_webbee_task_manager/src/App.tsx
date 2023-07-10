import React from 'react';
import TodoForm from './components/TodoForm';
import './css/app.css';

const App = () => {
  return (
    <div className="app_container">
      <div className="container">
        <h1 className="TodoText"> Todoшка</h1>
        <TodoForm />
      </div>
    </div>
  );
};

//

export default React.memo(App);
