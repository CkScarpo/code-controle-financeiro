import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Control from './pages/Control';

const Routes: React.FC = () => {
  return(
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/control" exact component={Control} />
    </Switch>
  );
}

export default Routes;