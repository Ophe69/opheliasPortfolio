import myMails1 from '../img/projets/myMails1.png';
import myMails2 from '../img/projets/myMails2.png';
import BikeShop1 from '../img/projets/BikeShop1.png';
import BikeShop2 from '../img/projets/BikeShop2.png';
import javascript from '../img/icons/javascript.svg';
import jquery from '../img/icons/jquery.svg';
import node from '../img/icons/node.svg';
import mongodb from '../img/icons/mongodb.svg';
import react from '../img/icons/react.svg';
import reactnative from '../img/icons/reactnative.svg';

const portfolios = [
    {
        id: 1,
        category: 'Javascript', 
        link: 'https://www.github.com',
        icon1: 'GitHub',
        //icon2: 'Y',
        image: myMails1,
        title: 'You Got A Message'
        //ajouter un paragraphe de description
    },
    {
        id: 1,
        category: 'Javascript',
        link: 'www.youtube.com',
        icon1: jquery  ,
        //icon2: 'Y',
        image: myMails1,
        title: 'You Got A Message'
    },
    {
        id: 1,
        category: 'Stripe',
        link: 'www.github.com',
        icon1: react ,
        //icon2: 'Y',
        image: BikeShop2,
        title: 'BikeShop'
    },
    {
        id: 1,
        category: 'Javascript',
        link: 'www.github.com',
        icon1: reactnative,
        //icon2: 'Y',
        image: myMails1,
        title: 'BikeShop'
    }
]

export default portfolios;