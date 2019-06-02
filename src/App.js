import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/posts" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
