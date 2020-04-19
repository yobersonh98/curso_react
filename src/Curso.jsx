import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


const Curso = ({id,title,image,price,profesor}) => (
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <Link to={`/cursos/${id}`}>
                    <img src={image} alt={title}/>
                </Link>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center"> {title} </h3>
                <div className="s-main-center">
                    {`Prof.: ${profesor}`}
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="https://ed.team"> {`$ ${price} USD`} </a>
                </div>
            </div>
        </article>
)

Curso.propTypes = {
    title : PropTypes.string,
    image : PropTypes.string,
    price : PropTypes.number,
    profesor : PropTypes.string
}

Curso.defaultProps = {
    title : "No se encontró título",
    image : "https://images.unsplash.com/photo-1561997968-aa846c2bf255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    price : "--",
    profesor : ""
}

export default Curso 