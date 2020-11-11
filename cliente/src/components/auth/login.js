import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    // registro de cada cambio en el valor del input en la property respectiva del obj login
    const onChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
    }

    // registro del usuario cuando inicia sesion
    const onSubmit = (e) => {
        e.preventDefault();
        // validacion de campos vacios
        // pasarlo al action del context
    }

    const { email, password } = login;

    return (
        <div className="form-usuario">

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
