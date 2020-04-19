import React, {Component} from "react"

class Formulario extends Component{
    //Metodo constructor recibe todos los metodos necesarios para que una instancia pueda ser creada
    constructor(props) {
        super(props)

        this.state = {
            nombre : "",
            correo : "",
            fecha : new Date()
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e){
        this.setState({
            nombre : e.target.value
        })
    }
    
    cambiarCorreo(e){
        this.setState({
            correo : e.target.value
        })
    }

    cambiarFecha(){
        this.setState({
            fecha : new Date()
        })
    }

    //this.setState({})  este metodo recibe como parametro "{objeto}" el cual se actualiza a this.state

    //Metodo render returna el contenido como tal
    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h3>Fecha Actual: {Math.ceil(this.state.fecha)}</h3>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" 
                            onChange={this.cambiarNombre}
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input type="email"
                            onChange={this.cambiarCorreo}
                            />
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

    componentDidMount(){
        let elemento = document.getElementById("elemento")
        
        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date())
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
        //console.log(prevState)
    }

    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }
}



export default Formulario