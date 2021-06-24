
import React, {useState} from 'react';
import ContactItem from '../Components/ContactItem';
import phoneIcon from '../img/phoneIcon.svg';
import emailIcon from '../img/emailIcon.svg';
import locationIcon from '../img/locationIcon.svg';
import Title from '../Components/Title';
import programme from '../docs/ProgrammeWCS.pdf'

function ContactPage() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById('not-mail');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)){
            mail.style.display = 'none';
            return true;
        } else {
            mail.style.display = 'block';
            mail.style.animation = 'dongle 1s';
            setTimeout(()=> {
                mail.style.animation = 'none';
            }, 1000);
            return false;
        }
    };

    const failMessage = (message) => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = message;
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(255,87,87)';

        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    }

    const successMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = "Merci, votre message est bien envoyé! Je vous recontacte au plus vite :)";
        formMess.style.opacity = '1';
        formMess.style.background = "#00C1EC";

        
        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        setTimeout(() => {
            formMess.style.opacity = '0';
        }, 5000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (name && isEmail() && message){
            sendFeedback("template_qlmhzlv", {
                name, //(egal name:name)
                company,
                phone,
                email,
                message,
            });
        } else{
        failMessage("Merci de remplir correctement les champs requis *");
        }
    };
    
    const sendFeedback = (templateId, variables) => {
    
        window.emailjs
        .send("gmail", templateId, variables)
        .then((res) => {
            successMessage();
            setName("");
            setCompany("");
            setPhone("");
            setEmail("");
            setMessage("");
        })
        .catch(
            (err) => {
                failMessage("Oups! Une erreur s'est produite, veuillez réessayer.");
            }
        );
    };

    return (
        <div>
            <div className="title">
                <Title title={'Contact'} span={'Contact'} />
            </div>
            <div className="hero-text-contact">
                Je cherche une entreprise pour m'accueillir en contrat pro à partir du 14/09/21 <br/>
                Le programme de mon école est juste <a href={programme}><i><span>ici</span></i></a>
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.8417640068137!2d4.87141241587657!3d45.734268079105036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1e4b06026f5%3A0xe6866a7f60cb70a1!2sAire%20De%20Jeux%20Du%208%20%C3%89me!5e0!3m2!1sfr!2sfr!4v1624272658311!5m2!1sfr!2sfr" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phoneIcon} text1={'06.65.19.77.06'} title={'Téléphone'}/>
                    <ContactItem icon={emailIcon} text1={'ophelia.tagbo@gmail.com'} title={'Email'}/>
                    <ContactItem icon={locationIcon} text1={'Lyon 8ème'} title={'Adresse'}/>
                </div>   
                
            </div>
            <div>
                <form className="contact-form">
                    <h2>Une proposition?  Un conseil?  Ecrivez-moi!</h2>
                    <div className="form-content">
                        <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="nom *"
                        value={name}
                        autoComplete="off"
                        />
                        <input
                        type="text"
                        id="company"
                        name="company"
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="société"
                        value={company}
                        />
                        <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="téléphone"
                        value={phone}
                        />
                        <div className="email-content">
                        <label id="not-mail">Email non valide</label>
                        <input
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email *"
                            value={email}
                            autoComplete="off"
                        />
                        </div>
                        <textarea
                        id="message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="message *"
                        value={message}
                        />
                    </div>
                    <input
                        className="button"
                        type="button"
                        value="Envoyer"
                        onClick={handleSubmit}
                    />
                    <div className="form-message"></div>
                </form> 
            </div>
        </div> 
        
        
    )
}

export default ContactPage;
