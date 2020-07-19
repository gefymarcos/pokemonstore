import React from 'react';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Gateway from '../components/Gateway/gateway';

const dragon = require('../assets/dragon.png');
const water = require('../assets/water.png');
const fire = require('../assets/fire.png');
const eletric = require('../assets/eletric.png');

export default function Routes() {
  return (
    <Router>
      <div>
        <Button>
          <img src={dragon} alt="dragão" />
          <Link to="/dragon" />
        </Button>
        <Button>
          <img src={water} alt="água" />
          <Link to="/water" />
        </Button>
        <Button>
          <img src={fire} alt="fogo" />
          <Link to="/fire" />
        </Button>
        <Button>
          <img src={eletric} alt="elétrico" />
          <Link to="/eletric" />
        </Button>

        <Switch>
          <Route path="/dragon">
            <Gateway type={16} />
          </Route>
          <Route path="/water">
            <Gateway type={11} />
          </Route>
          <Route path="/fire">
            <Gateway type={10} />
          </Route>
          <Route path="/eletric">
            <Gateway type={13} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
