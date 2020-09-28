import React from 'react';
import Barra from '../layout/barra';
import Sidebar from '../layout/sidebar';
import FormTarea from '../tareas/form_tarea';
import ListadoTareas from '../tareas/listado_tareas';


const Proyectos = () => {
    return (
        <div className='contenedor-app'>
            <aside>
                <Sidebar />
            </aside>
            <div className='seccion-principal'>
                <Barra />
                <main>
                <FormTarea />
                    <div className='contenedor-tareas'>
                    <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos
