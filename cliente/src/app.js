import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/auth/login';
import NuevaCuenta from './components/auth/nueva_cuenta';
import Proyectos from './components/proyectos/proyectos';
import ProyectoState from './context/proyectos/proyecto_state';
import TareaState from './context/tareas/tarea_state';
import AlertaState from './context/alertas/alerta_state';

function App() {
  return (
    <ProyectoState>
      <TareaState>
      <AlertaState>
        <Router>
          <Switch>
            <Route exact path='/' component={login} />
            <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
            <Route exact path='/proyectos' component={Proyectos} />
          </Switch>
        </Router>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
