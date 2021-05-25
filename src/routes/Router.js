import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import App from '../components/App';
import Home from '../components/Home';
import Quote from '../components/Quote';
import '../styles/test.css';

const Routes = () => (
  <BrowserRouter>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <a className="nav-test" href="/">Home</a>
        <a href="/calculator">Calculator</a>
        <a href="/quote">Quote</a>
      </nav>
    </header>
    <Switch>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </div>
    </Switch>
  </BrowserRouter>
);
export default Routes;
