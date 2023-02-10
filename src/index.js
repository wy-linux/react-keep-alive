import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './component/Home'
import UserList from './component/UserList'
import UserAdd from './component/UserAdd'
import {KeepAliveProvider, withKeepAlive} from './keep-alive-component'
// import {KeepAliveProvider, withKeepAlive} from 'keepalive-react-component'
let keepAliveHome = withKeepAlive(Home, {cacheId: 'Home'})
let keepAliveUserList = withKeepAlive(UserList, {cacheId: 'UserList', scroll: true})
let keepAliveUserAdd = withKeepAlive(UserAdd, {cacheId: 'UserAdd'})
const App = () => {
  return (
    <BrowserRouter>
      <KeepAliveProvider>
        <ul>
          <li><Link replace to="/">首页</Link></li>
          <li><Link replace to="/list">用户列表</Link></li>
          <li><Link replace to="/add">添加用户</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={keepAliveHome}/>
          <Route path="/list" component={keepAliveUserList}/>
          <Route path="/add" component={keepAliveUserAdd}/>
        </Switch>
      </KeepAliveProvider>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <App />
);
