import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './components/auth/login';
import NuevaCuenta from './components/auth/nueva_cuenta';
import Proyectos from './components/proyectos/proyectos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={login} />
        <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
        <Route exact path='/proyectos' component={Proyectos} />
      </Switch>
    </Router>
  );
}

export default App;
