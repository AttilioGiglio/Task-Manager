import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/auth/login';
import NuevaCuenta from './components/auth/nueva_cuenta';
import Proyectos from './components/proyectos/proyectos';
import ProyectoState from './context/proyectos/proyecto_state';
import TareaState from './context/tareas/tarea_state';
import AlertaState from './context/alertas/alerta_state';
import AuthState from './context/autenticacion/auth_state';
import tokenAuth from './config/token';

function App() {

//  checking if I got the the token access
const token = localStorage.getItem('token');
if(token) {
  tokenAuth();
}

  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={login} />
                <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
                <Route exact path='/proyectos' component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
