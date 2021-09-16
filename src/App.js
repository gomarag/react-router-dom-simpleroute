import React from 'react';
// 컴포넌트를 꺼내오기 위한 import 구문
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // Router 사용을 위한 설정
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              {/* Link는 주어진 경로로 이동 */}
              {/* <a>태그는 새로고침으로 페이지를 처음부터 렌더링, <Link>는 SPA */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mypage">MyPage</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        {/* 경로 매칭을 위한 Switch와 Route로 <Home/>, <MyPage/>,<Dashboard/> 컴포넌트 연결 */}
        {/* Switch는 위에서 아래로 경로를 차례로 실행. exact속성은 주어진 경로와 완전 일치를 검사 */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// Home 컴포넌트
function Home() {
  return <h1>Home</h1>;
}

// MyPage 컴포넌트
function MyPage() {
  return <h1>MyPage</h1>;
}

// Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default App;
