import React, {Component} from "react"

class Form extends Component{
    //Metodo constructor recibe todos los metodos necesarios para que una instancia pueda ser creada
    constructor(props) {
        super(props)

        this.state = {
            name : "",
            email : "",
            date : new Date()
        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }

    changeName(e){
        this.setState({
            name : e.target.value
        })
    }
    
    changeEmail(e){
        this.setState({
            email : e.target.value
        })
    }

    changeDate(){
        this.setState({
            date : new Date()
        })
    }

    //this.setState({})  este metodo recibe como parametro "{objeto}" el cual se actualiza a this.state

    //Metodo render returna el contenido como tal
    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h3>Fecha Actual: {Math.ceil(this.state.date)}</h3>
                <form id="form-element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" 
                            onChange={this.changeName}
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input type="email"
                            onChange={this.changeEmail}
                            />
                        </div>
                    </div>
                </form>    
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let element = document.getElementById("form-element")
        console.log(element)
        
        this.intervaloFecha = setInterval(() => {
            this.changeDate()
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



export default Form