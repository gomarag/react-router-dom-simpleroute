import React from 'react';
import ReactDOM from 'react-dom';
// Router 컴포넌트 사용을 위한 import
// 새로고침 없이 주소를 변경할 수 있도록 함
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>
  ,document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
