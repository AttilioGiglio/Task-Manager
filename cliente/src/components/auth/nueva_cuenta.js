import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alertas/alerta_context';
import authContext from '../../context/autenticacion/auth_context';

const NuevaCuenta = (props) => {

    // extraer los valores del context
    const alertContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertContext


    //  extraer los valores del modulo al context
    const AuthContext = useContext(authContext);
    const { registrarUsuario, mensaje, autenticado } = AuthContext; 

    // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado])

    // state para iniciar sesion
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const { name, email, password, confirmar } = user;

    // registro de cada cambio en el valor del input en la property respectiva del obj login
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // registro del usuario cuando inicia sesion
    const onSubmit = (e) => {
        e.preventDefault();

        // validacion de campos vacios
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
            return;
        }
        // validacion password min 6 caracteres
        if(password.length < 6){
            mostrarAlerta('El password debe ser al menos de 6 caracteres', 'alerta-error')
            return;
        }
        // validacion 2 password iguales
        if(password !== confirmar) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }
        // pasarlo al action del context
        registrarUsuario({ 
            name,
            email,
            password
         });
    }



    return (
        <div className="form-usuario">
        { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            value={confirmar}
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
                    <Link
                        to={'/'}
                        className='enlace-cuenta'>
                        Volver a iniciar sesion
                </Link>
                </form>
            </div>
        </div>
    )
}

export default NuevaCuenta
