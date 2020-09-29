import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyecto_context'; 
import ProyectoUnitario from './proyecto_unitario';


const ListadoProyectos = () => {

    // Extraer proyecto de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const {proyectos} = proyectoContext;

    // revisar si proyectos tienen contenido
    if(proyecto.length===0) return null;

    return (
        <div>
            <ul className='listado-proyectos'>
            {proyectos.map(proyecto => 
                <ProyectoUnitario
                    key={id}
                    proyecto={proyecto}
                />
                )}
            </ul>
        </div>
    )
}

export default ListadoProyectos
