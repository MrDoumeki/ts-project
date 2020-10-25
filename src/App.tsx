import React,{FC} from 'react';
//yarn add @types/react-router-dom
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Layout from './pages/layout/layout'

const App:FC = ():any => {
  return (
    // <div className="App">
    //     <Button type="primary">Click me!</Button>
    // </div>
    <BrowserRouter>
    <Switch>
      <Route path='/layout' component={Layout}></Route>
      <Route path='/' component={Login}></Route>
      {/* 小坑，路由匹配由上至下，而Switch匹配完一个之后不再继续往下匹配，如果/写在前面，那么/xxx将会只匹配到/ */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
