import React from 'react';

import "./styles/styles.scss"
import Curso from "./Curso"

const cursos = [
  {
    "title" : "React desde cero",
    "img" : "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    "price" : 30,
    "profesor" : "Beto Quiroga"
  }, 
  {
    "title" : "Drupal desde cero",
    "img" : "https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
    "price" : 40,
    "profesor" : "Beto Quiroga"
  }, 
  {
    "title" : "Go desde cero",
    "img" : "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    "price" : 50,
    "profesor" : "Alexis Lozada"
  }, 
  {
    "title" : "HTML desde cero",
    "img" : "https://edteam-media.s3.amazonaws.com/courses/original/f1fa315c-d94a-4fba-b408-cc852a2f4e41.jpg",
    "price" : 10,
    "profesor" : "Alvaro Felipe"
  }
]

const App = () => (
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://edteam-media.s3.amazonaws.com/specialities/original/9b01e4cc-df31-43f6-ba1e-2505ccbf641a.png" alt="banner"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso React</p>
          <p> Mi futuro me espera</p>
          <a href="https://ed.team" className="button second-color">Suscribete</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    {
      cursos.map( c => <Curso title={c.title} image={c.img} price={c.price} profesor={c.profesor} />)
    }
  </div>
</>
)

export default App;

/*REGLAS
1: Toda etiqueta JSX debe cerrarse <></> o < />
2: Los componentes deben devolver un solo elemento padre
3: Apoyarse en los Fragments cuando necesito devolver más de 2 div 
4: Nomenclatura= <Fragment> hijos </Fragment> y declaro import React, {Fragment} from 'react' sino utilizo <> hijos </> sin declarar {Fragment}
*/
