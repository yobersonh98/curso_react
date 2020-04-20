import React from 'react';

import "../styles/styles.scss"
//import Curso from "./CourseCard"
import CourseGrid from './Organisms/CourseGrid';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Form from './Pages/Form';
import Course from "./Pages/Course";
import MainMenu from './Organisms/MainMenu';
import History from './Pages/History';
import Home from './Pages/Home';
import Users from './Pages/Users';

const App = () => (
<Router>
  <MainMenu />
  <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/cursos/:id"  component={ Course } />
    <Route path="/cursos"  component={ CourseGrid } />
    <Route path="/historial"  component={ History } />
    <Route path="/usuarios"  component={ Users } />
    <Route path="/formulario"  component={ () => <Form name="Página de contacto"/>} />
    <Route component={ () => (
      <div className="ed-grid">
        <h1>Error 404</h1>
        <span>Página no encontrada</span>
      </div>
    ) }/>
  </Switch>
</Router>
)

export default App;
