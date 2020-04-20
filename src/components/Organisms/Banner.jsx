import React from "react"

const Banner = () => (
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
)

export default Banner