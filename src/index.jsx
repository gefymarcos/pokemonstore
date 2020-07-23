import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store/configure-store';
import Thanks from './components/Thanks/thanks';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/thanks" component={Thanks} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
