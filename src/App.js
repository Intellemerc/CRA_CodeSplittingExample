import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import asyncComponent from './AsyncComponent'
import './App.css';

const Page1 = asyncComponent(() => import('./Pages/Page1'));
const Page2 = asyncComponent(() => import('./Pages/Page2'));
const Page3 = asyncComponent(() => import('./Pages/Page3'));
const Page4 = asyncComponent(() => import('./Pages/Page4'));


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
          <li><Link to="/page3">Page 3</Link></li>
          <li><Link to="/page4">Page 4</Link></li>
        </ul>
        <div style={{border: '1px solid black', padding: 15, width: 400, margin: 'auto'}} >
            <Route exact path="/" component={Page1}/>
            <Route exact path="/page1" component={Page1}/>
            <Route exact path="/page2" component={Page2}/>
            <Route exact path="/page3" component={Page3}/>
            <Route exact path="/page4" component={Page4}/>
        </div>
      </div>
    );
  }
}

export default App;
