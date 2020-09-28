import React from 'react';
import ProyectoUnitario from './proyecto_unitario';

const ListadoProyectos = () => {
    const proyectos = [
        {nombre:'tienda'},
        {nombre:'intranet'},
        {nombre:'diseño de sitio web'}
    ]
    return (
        <div>
            <ul className='listado-proyectos'>
            {proyectos.map(proyecto => 
                <ProyectoUnitario
                    proyecto={proyecto}
                />
                )}
            </ul>
        </div>
    )
}

export default ListadoProyectos
