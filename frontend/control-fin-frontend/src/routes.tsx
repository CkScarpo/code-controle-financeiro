import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hasJSDocParameterTags } from 'typescript';

import Home from './pages/Home';
import Control from './pages/Control';

const Routes: React.FC = () => {
  return(
    <Switch>
        <Route path="/" exact componente={Home} />
        <Route path="/control" exact componente={Control} />
    </Switch>
  );
}

export default Routes;