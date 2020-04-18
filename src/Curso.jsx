import React from 'react'

const persona = {"nombre" : "Yoberson", "apellido" : "Hernandez", "edad": 22}
const mayorEdad = edad => edad >= 18
const Curso = () => (
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src="https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png" alt="Poster del curso"/>
            </div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                
                    {
                        mayorEdad(persona.edad) 
                        ? 
                            <div>
                                <h1>
                                    <span>
                                        Hola, soy mayor
                                    </span>
                                </h1>
                            </div> 
                        : <p>soy menor</p>
                    }
                
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                        <img src="https://edteam-media.s3.amazonaws.com/users/avatar/e19b1e7f-6dcc-495b-883c-7d0b9b3fdf15.jpg" alt="Tio Beto"/>
                        </div>
                    </div>
                    <span className="small"> {`${persona.nombre} ${persona.apellido}`} </span>
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="https://ed.team">$ 20USD</a>
                </div>
            </div>
        </article>
)

export default Curso 