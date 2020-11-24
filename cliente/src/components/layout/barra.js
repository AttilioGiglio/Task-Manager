import React, { useContext, useEffect } from 'react'
import authContext from '../../context/autenticacion/auth_context';

const Barra = () => {
     // Extraer la informacion de autenticacion
     const AuthContext = useContext(authContext);
     const { usuario ,usuarioAutenticado, cerrarSesion } = AuthContext;
 
     useEffect(() => {
         usuarioAutenticado()
        //  eslint-disable-next-line
     },[])
    return (
        <header className='app-header'>
        {usuario ? <p className='nombre-usuario'>Hola <span>{usuario.name}</span></p> : null}
            <nav className='nav-principal'>
            <button
            className='btn btn-blank cerrar-sesion'
            onClick={() => cerrarSesion()}
            >
                <a href='/#'> Cerrar Sesion</a>
            </button>
            </nav>
        </header>
    )
}

export default Barra
