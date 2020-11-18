import React, { useContext, useEffect } from 'react'
import authContext from '../../context/autenticacion/auth_context';

const Barra = () => {
     // Extraer la informacion de autenticacion
     const AuthContext = useContext(authContext);
     const { usuario ,usuarioAutenticado } = AuthContext;
 
     useEffect(() => {
         usuarioAutenticado()
     },[])
    return (
        <header className='app-header'>
        {usuario ? <p className='nombre-usuario'>Hola <span>{usuario.name}</span></p> : null}
            <nav className='nav-principal'>
                <a href=''> Cerrar Sesion</a>
            </nav>
        </header>
    )
}

export default Barra
