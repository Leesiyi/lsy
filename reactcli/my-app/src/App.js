import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,  
  Link,
  Switch,
  Redirect
 } from "react-router-dom";
 import Test1 from "./component/Test1";
 import Test2 from "./component/Test2";
 import Test6 from "./component/Test6";
 import {Provider} from 'react-redux'
 const Foo=({match})=>{
    return(
      <h1>hello{match.params.id}</h1>
    )
 }
function App() {
  return (
    <div className="App">
      
      <Router>
        <Link to="/123">test1</Link> |
        <Link to="/test2">test2</Link> |
        <Link to="/foo/444">foo</Link> |
        <Link to="/test6">test6</Link> |
        <Switch>
        <Route path="/test6" component={Test6}></Route>
          <Route path="/foo/:id" component={Foo}></Route>
          <Route path="/test2" component={Test2}></Route>
          <Route path="/:id" component={Test1}></Route>
        </Switch>
      </Router>
  
    </div>
  );
}
export default App;
