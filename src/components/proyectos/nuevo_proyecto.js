import React, {Fragment} from 'react'

const NuevoProyecto = () => {
    return (
        <Fragment>
          <button 
                type="button"
                className="btn btn-block btn-primario"
                // onClick={ onClickFormulario }
            >Nuevo Proyecto</button>
                        <form
                            className="formulario-nuevo-proyecto"
                            // onSubmit={onSubmitProyecto}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="nombre"
                                // value={nombre}
                                // onChange={onChangeProyecto}
                            />

                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />

                        </form>

        </Fragment>
    )
}

export default NuevoProyecto
