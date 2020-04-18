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
            </div>
        )
    }

}

export default Formulario