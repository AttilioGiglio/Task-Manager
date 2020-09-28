import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './components/auth/login';
import NuevaCuenta from './components/auth/nueva_cuenta';
import Proyectos from './components/proyectos/proyectos';
import ProyectoState from './context/proyecto_state';

function App() {
  return (
    <ProyectoState>
    <Router>
      <Switch>
        <Route exact path='/' component={login} />
        <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
        <Route exact path='/proyectos' component={Proyectos} />
      </Switch>
    </Router>
    </ProyectoState>
  );
}

export default App;
