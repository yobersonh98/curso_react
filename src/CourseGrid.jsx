import React from "react"
import Curso from "./Curso"


const cursos = [
    {
        "id" : 1,
        "titulo" : "React desde Cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
        "price" : 40,
        "profesor" : "Beto Quiroga"
    },
    {
        "id" : 2,
        "titulo" : "Drupal desde Cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
        "price" : 30,
        "profesor" : "Beto Quiroga"
    },
    {
        "id" : 3,
        "titulo" : "Go desde Cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
        "price" : 50,
        "profesor" : "Alexix Lozada"
    },
    {
        "id" : 4,
        "titulo" : "HTML desde Cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/f1fa315c-d94a-4fba-b408-cc852a2f4e41.jpg",
        "price" : 50,
        "profesor" : "Alvaro Felipe"
    }
]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {cursos.map(c => (
        <Curso 
            key={c.id} 
            id={c.id}
            title={c.titulo}
            image={c.image}
            price={c.price}
            profesor={c.profesor}
        />
        ))}
    </div>
)

export default CourseGrid