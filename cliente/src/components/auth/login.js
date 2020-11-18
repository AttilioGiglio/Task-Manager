import React, { useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import alertaContext from '../../context/alertas/alerta_context';
import authContext from '../../context/autenticacion/auth_context';

const Login = (props) => {

    // extraer valores del context 
    const AlertaContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = AlertaContext
    const AuthContext = useContext(authContext);
    const { iniciarSesion, autenticado, mensaje } = AuthContext;

    //  State para iniciar sesión
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    
    const { email, password } = login;

    // registro de cada cambio en el valor del input en la property respectiva del obj login
    const onChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
    }

    // registro del usuario cuando inicia sesion
    const onSubmit = (e) => {
        e.preventDefault();
        // validacion de campos vacios
        if(email.trim()==='' || password.trim()===''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
        }
        // pasarlo al action del context
        iniciarSesion({email, password});
    }

   // En caso de que el usuario o password no exista
   useEffect(() => {
    if(autenticado){
        props.history.push('/proyectos');
    }
    if(mensaje){
        mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
}, [mensaje, autenticado])

    return (
        <div className="form-usuario">
{ alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                        type="submit" 
                        className="btn btn-primario btn-block" 
                        value="Iniciar Sesión" 
                        />
                    </div>
                </form>
                <Link 
                to={'/nueva-cuenta'} 
                className='enlace-cuenta'> 
                Obtener Cuenta
                </Link>
            </div>
        </div>
    )
}

export default Login
