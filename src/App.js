import React from 'react';

import "./styles/styles.scss"
import Curso from "./Curso"

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
    <Curso 
      title="React desde cero con EDteam"
      image="https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png"
      price="20 USD"
      profesor="Yoberson Hernández"
    />
    <Curso 
      title="HTML desde cero"
      image="https://edteam-media.s3.amazonaws.com/courses/original/f1fa315c-d94a-4fba-b408-cc852a2f4e41.jpg"
      price="0 USD"
      profesor="Alvaro Felipe"
    />
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
