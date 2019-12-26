
import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={Signup}/>
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default Main;
