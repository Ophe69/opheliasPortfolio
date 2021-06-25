import React from 'react'
import {faGithub, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, file } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import CV from '../docs/CV_OpheliaTagbo_DevWebAlt.pdf'

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
            <h1 className="hero-text">
                Bonjour,   je m'appelle
                <span> Ophélia </span>
            </h1>
                <p className="h-sub-text">
                    <br/>
                    <strong>
                    <i>Développeuse passionnée </i>
                    </strong>
                    je code depuis presque deux ans, d'abord en solo
                    puis en me formant au sein de 
                    <strong>
                    <i> l'Ecole de Nantes Informatique </i>
                    </strong> 
                    et de
                    <strong>
                    <i> La Capsule </i> 
                    </strong>
                    <br/>
                    <br/> Aujourd'hui j'aimerai m'investir dans un projet, trouver une entreprise et une équipe prêtes à m'accueillir <br/>
                    pour mon année <strong>d'alternance  
                    en tant que conceptrice-développeuse d'application.</strong>



                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ophélia-tagbo" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lkdin" />
                    </a>
                    <a href="https://github.com/Ophe69" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href={CV} className="icon-holder">
                        <FontAwesomeIcon icon={faFilePdf} className="icon cv" />
                    </a>
                    {/* <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link> */}
                </div>
                

            </header>
        </div>
    )
}

export default HomePage;
