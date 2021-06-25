import shoeshop from '../img/projets/shoeshop.png';
import myMails1 from '../img/projets/myMails1.png';
import cloudySunny from '../img/projets/cloudySunny.png';
import blackBoard5 from '../img/projets/blackBoard5.png';
import myMoviz2 from '../img/projets/myMoviz2.png';
import morningNews3 from '../img/projets/morningNews3.png';
import locapic from '../img/projets/locapic.png';
import kutit from '../img/projets/kutit.png';
/* import javascript from '../img/icons/javascript.svg';
import jquery from '../img/icons/jquery.svg';
import node from '../img/icons/node.svg';
import mongodb from '../img/icons/mongodb.svg';
import react from '../img/icons/react.svg';
import reactnative from '../img/icons/reactnative.svg'; pour futur integration de stack */ 

const portfolios = [
    {
        id: 1,
        category: 'Stripe',
        link: 'https://github.com/Ophe69/ShoesShop',
        icon1: 'GitHub' ,
        //icon2: 'Y',
        image: shoeshop,
        title: 'Shoes Shop',
        desc : "Site e-Commerce créé en HTML, CSS et Bootstrap. Les pages sont dynamisées via le Back-end et j'ai implémenté une interface de paiement avec Stripe.",
    },
    {
        id: 2,
        category: 'React Native',
        link: 'https://github.com/Ophe69/myLocapic',
        icon1: 'GitHub' ,
        //icon2: 'Images', y ajouter un caroussel avec quelques captures d'écrans
        image: locapic,
        title: 'My Locapic',
        desc : "Locapic est une application mobile qui permet de géolocaliser l'utilisateur et de suivre l’historique de ses déplacements. Elle permet aussi de chatter avec l’ensemble des utilisateurs connectés. Mise en place de l'environnement Expo, intégration de la Navigation, d'une map intéractive et de la géolocalisation. Utilisation de websockets et du Local Storage. ",
        //stack: ajouter les logo des techno utilisées
    },
    {
        id: 3,
        category: 'React',
        link: 'https://github.com/Ophe69/moviesLibrary',
        icon1: 'GitHub' ,
        //icon2: 'Images', y ajouter un caroussel avec quelques captures d'écrans
        image: myMoviz2,
        title: 'MoviesLibrary',
        desc : "Application qui propose une liste de film en fonction de leur sortie au cinéma. Possibilité de créer une wishlist personnalisée et de voter pour les films en ajoutant des likes. Utilisation des composants et évènements React, ReactStrap et Ajax pour la communication avec le Back-end",
        //stack: ajouter les logo des techno utilisées
    },

    {
        id: 4,
        category: 'React',
        link: 'https://github.com/Ophe69/morningnews',
        icon1: 'GitHub' ,
        //icon2: 'Images', y ajouter un caroussel avec quelques captures d'écrans
        image: morningNews3,
        title: 'Morning News',
        desc : "Application web qui permet d’afficher les news actualisées et de les mettre dans une wishlist pour les sauvegarder en base de données et les lire plus tard. Mise en place des routes et des champs de saisie dans React, utilisation de Redux et optimisation de la sécurité à la connexion. ",
        //stack: ajouter les logo des techno utilisées
    },
    {
        id: 5,
        category: 'React Native', 
        link: 'https://github.com/Ophe69/kutit-back',
        icon1: 'GitHub',
        //icon2: 'Images', y ajouter un caroussel avec quelques captures d'écrans
        image: kutit,
        title: 'Kut-it',
        desc : "Application mobile permettant la réservation d'une prestation de coiffure. Possibilité de se faire coiffer à domicile ou en salon en fonction de ses disponibilités et de sa géolocalisation. Elle est développer en React Native avec un back-end Node.js, une base de données MongoDb et un environnement Expo.",
    },

    {
        id: 6,
        category: 'MongoDB',
        link: 'https://github.com/Ophe69/weatherCheck',
        icon1: 'GitHub' ,
        //icon2: 'Images', y ajouter un caroussel avec quelques captures d'écrans
        image: cloudySunny,
        title: 'Weather Check',
        desc : "Application de recherche de la météo en fonction de la localisation. Sign-in, Sign-up et navigation en session. Implémentation d'une carte intéractive, intégration d'une API en webservice, modélisation de la base de donnée en MVC",
    },
    {
        id: 7,
        category: 'Javascript', 
        link: 'https://github.com/Ophe69/MyMails',
        icon1: 'GitHub',
        //icon2: 'Images', y ajouter un caroussel avec quelques captures d'écrans
        image: myMails1,
        title: 'My Mails',
        desc : "Création d'une interface utilisateur avec HTML et CSS, découverte du DOM, des événements en JS et de la librairie JQuery.",
    },

    {
        id: 8,
        category: 'Node',
        link: 'www.github.com',
        icon1: 'GitHub' ,
        //icon2: 'Images', y ajouter un caroussel avec quelques captures d'écrans
        image: blackBoard5,
        title: 'Blackboard',
        desc : "Back-office de site e-Commerce pour administrer les commandes clients et gérer le catalogue produits, afficher la liste des tâches et système de messagerie. Factorisation du code avec les partials, gestion des données avec clés étrangères et sous-documents et matérialisation des données avec Chart.js.",
        //stack: ajouter les logo des techno utilisées
    },
    

    
]

export default portfolios;