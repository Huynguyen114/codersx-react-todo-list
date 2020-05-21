import React from 'react';
import './App.css';

const todos = ['Go to market', 'Buy food', 'Make dinner'];

const list = todos.map((todo) => <li>{todo}</li>);

const listTodo = <ul>{list}</ul>;

function App() {
  return <div className='App'>{listTodo}</div>;
}

export default App;
