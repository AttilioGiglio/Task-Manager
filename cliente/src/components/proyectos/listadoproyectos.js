import React, { useContext, useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyecto_context';
import ProyectoUnitario from './proyecto_unitario';
import alertaContext from '../../context/alertas/alerta_context'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {

    // Extraer proyecto de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectoContext;

    const alertContext = useContext(alertaContext)
    const { alerta, mostrarAlerta  } = alertContext;

    useEffect(() => {
            
            // si hay un error 
            if(mensaje){
                mostrarAlerta(mensaje.msg, mensaje.categoria);
            }

            obtenerProyectos();
            // eslint-disable-next-line
    }, [mensaje]);

    // revisar si proyectos tienen contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>

    return (

        <div>
                {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>: null}
            <ul className='listado-proyectos'>
              <TransitionGroup>
              {proyectos.map((proyecto, index) =>
                  <CSSTransition
                  key={index}
                  timeout={200}
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
