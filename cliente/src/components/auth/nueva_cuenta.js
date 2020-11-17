import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alertas/alerta_context';
import authContext from '../../context/autenticacion/auth_context';
import AuthContext from '../../context/autenticacion/auth_context';

const NuevaCuenta = () => {

    // extraer los valores del context
    const alertContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertContext


    //  extraer los valores del modulo al context
    const AuthContext = useContext(AuthContext);
    const { registrarUsuario } = authContext; 

    // state para iniciar sesion
    const [user, setUser] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const { nombre, email, password, confirmar } = user;

    // registro de cada cambio en el valor del input en la property respectiva del obj login
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // registro del usuario cuando inicia sesion
    const onSubmit = (e) => {
        e.preventDefault();

        // validacion de campos vacios
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
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
            nombre,
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
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
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
