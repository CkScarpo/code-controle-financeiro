import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Control from './pages/Control';
import ControlForm from './pages/Control/Form';

const Routes: React.FC = () => {
  return(
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/control" exact component={Control} />
        <Route path="/control_cadastro" exact component={ControlForm} />
        <Route path="/control_cadastro/:id" exact component={ControlForm} />
    </Switch>
  );
}

export default Routes;