import React from 'react';
// 컴포넌트를 꺼내오기 위한 import 구문
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <MyPage />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
