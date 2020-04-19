import React, {Component} from "react"

class Formulario extends Component{
    //Metodo constructor recibe todos los metodos necesarios para que una instancia pueda ser creada
    constructor(props) {
        super(props)

        this.state = {
            nombre : "",
            correo : ""

        }
    }

    //this.setState({})  este metodo recibe como parametro "{objeto}" el cual se actualiza a this.state

    //Metodo render returna el contenido como tal
    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text"/>
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input type="email"/>
                        </div>
                    </div>
                </form>    
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

}

export default Formulario