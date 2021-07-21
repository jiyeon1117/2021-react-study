import React, { Fragment } from 'react';
import './App.css';

function App() {
  const name = "리액트";
  return (
    <div>
      {name === "리액트" ? (<h1>{name}입니다</h1>) : (<h1>{name}이 아닙니다</h1>)};
    </div>
  );
}

export default App;
