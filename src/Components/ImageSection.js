import React from 'react';
import about from '../img/computer-girl.jpg';
import home3 from '../img/facePic/home3.jpg';
import CV from '../docs/CV_OpheliaTagbo_DevWebAlt.pdf'

function imageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={home3} alt=""/>
            </div>
            <div className="about-info">
                <h4>Jeune développeuse ...<br/><span>très motivée!</span></h4>
                <p className="about-text">
                Ma première passion, c'est les langues étrangères. Et un jour je me suis rendue compte que coder c'était parler la langue des ordinateurs...  
                Du coup, Bim Bam Boom! me voila (re)convertie!
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nom</p>
                        <p>Age</p>
                        <p>Situation</p>
                        <p>Nationalité</p>
                        <p>Origines</p>
                        <p>Langues parlées</p>
                        <p>Mobilité</p>
                    </div>
                    <div className="right-section">
                        <p>: Ophélia TAGBO-LAÏD</p>
                        <p>: 34 ans</p>
                        <p>: Mariée, 2 enfants</p>
                        <p>: Française</p>
                        <p>: Franco-Ivoirienne</p>
                        <p>: Français, Anglais et si besoin Allemand et Grec</p>
                        <p>: Le Monde</p>
                    </div>
                </div>
                <button className="btn"><a href={CV}>Téléchargez mon CV</a></button>
                {/* <p>Si vous voulez voir mon CV complet, c'est <a href={CV}> ici</a></p> */}
            </div>
            
        </div>
    )
}

export default imageSection
