import React, { useContext, useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyecto_context';
import ProyectoUnitario from './proyecto_unitario';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
              <TransitionGroup>
              {proyectos.map(proyecto =>
                  <CSSTransition
                  key={proyecto.id}
                  Timeout={200}
                  classNames='proyecto'
                  >
                  <ProyectoUnitario
                        proyecto={proyecto}
                    />
                    </CSSTransition>
                )}
              </TransitionGroup>
            </ul>
        </div>
    )
}

export default ListadoProyectos
