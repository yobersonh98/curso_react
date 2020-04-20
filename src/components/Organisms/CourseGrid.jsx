import React from "react"
import CourseCard from "../Molecules/CourseCard"


const courses = [
    {
        "id" : 1,
        "title" : "React desde Cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
        "price" : 40,
        "professor" : "Beto Quiroga"
    },
    {
        "id" : 2,
        "title" : "Drupal desde Cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
        "price" : 30,
        "professor" : "Beto Quiroga"
    },
    {
        "id" : 3,
        "title" : "Go desde Cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
        "price" : 50,
        "professor" : "Alexix Lozada"
    },
    {
        "id" : 4,
        "title" : "HTML desde Cero",
        "image" : "https://edteam-media.s3.amazonaws.com/courses/original/f1fa315c-d94a-4fba-b408-cc852a2f4e41.jpg",
        "price" : 50,
        "professor" : "Alvaro Felipe"
    }
]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {courses.map(c => (
        <CourseCard 
            key={c.id} 
            id={c.id}
            title={c.title}
            image={c.image}
            price={c.price}
            professor={c.professor}
        />
        ))}
    </div>
)

export default CourseGrid