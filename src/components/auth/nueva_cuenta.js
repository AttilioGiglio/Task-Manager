import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
    const [login, setLogin] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    // registro de cada cambio en el valor del input en la property respectiva del obj login
    const onChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    // registro del usuario cuando inicia sesion
    const onSubmit = (e) => {
        e.preventDefault();


        // validacion de campos vacios
        // validacion password min 6 caracteres
        // validacion 2 password iguales
        // pasarlo al action del context
    }

    const { nombre, email, password, confirmar } = login;

    return (
        <div className="form-usuario">

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
