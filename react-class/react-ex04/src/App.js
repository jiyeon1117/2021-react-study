import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <MyComponent name="react" favoriteNumber = {1}>
      리액트 컴포넌트 사이
    </MyComponent>
  );
}

export default App;
