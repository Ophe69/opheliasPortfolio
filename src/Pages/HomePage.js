import React from 'react'
import {faGithub, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

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
                    <Link to="https://www.linkedin.com/in/ophélia-tagbo" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lkdin" />
                    </Link>
                    <Link to="https://github.com/Ophe69" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    {/* <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link> */}
                </div>
                

            </header>
        </div>
    )
}

export default HomePage;
