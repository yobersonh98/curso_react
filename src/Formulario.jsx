import React, {Component} from "react"

class Formulario extends Component{
    //Metodo constructor recibe todos los metodos necesarios para que una instancia pueda ser creada
    constructor(props) {
        super(props)
    }

    //Metodo render returna el contenido como tal
    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="form__item">
                        <label>Nombre Completo</label>
                        <input type="text"/>
                    </div>
                    <div className="form__item">
                        <label>Correo Electrónico</label>
                        <input type="email"/>
                    </div>
                    <div className="form__item">
                        <input type="submit" value="Enviar" className="button full"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default Formulario