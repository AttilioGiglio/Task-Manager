import React from 'react';
import ListadoProyectos from '../proyectos/listadoproyectos';
import NuevoProyecto from '../proyectos/nuevo_proyecto';

const Sidebar = () => {
    return(
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto />
            <div className='proyectos'>
                <h2>Tus proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
    )
}

export default Sidebar;