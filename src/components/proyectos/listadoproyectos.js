import React, { useContext, useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyecto_context';
import { OBTENER_PROYECTO } from '../../types/constants';
import ProyectoUnitario from './proyecto_unitario';


const ListadoProyectos = () => {

    // Extraer proyecto de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;


    useEffect(() => {
            obtenerProyectos()
    }, []);

    // revisar si proyectos tienen contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>

    return (
        <div>
            <ul className='listado-proyectos'>
                {proyectos.map(proyecto =>
                    <ProyectoUnitario
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                )}
            </ul>
        </div>
    )
}

export default ListadoProyectos
