import React from 'react';
import TodoList from './components/TodoList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './css/app.css';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
