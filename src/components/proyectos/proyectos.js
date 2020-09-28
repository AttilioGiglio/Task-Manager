import React from 'react';
import Barra from '../layout/barra';
import Sidebar from '../layout/sidebar';

const Proyectos = () => {
    return (
        <div className='contenedor-app'>
            <aside>
                <Sidebar />
            </aside>
            <div className='seccion-principal'>
                <Barra />
                <main>
                    <div className='contenedor-tareas'>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos
