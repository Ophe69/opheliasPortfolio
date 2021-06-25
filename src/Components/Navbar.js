import React from 'react';
import profil from '../img/facePic/profil.jpg';
import {NavLink} from 'react-router-dom';


function Navbar() {
    return (
        <div className="NavBar">
            <nav className='nav'>
                <div className="profile">
                    <img src={profil} alt="avatar"/>
                </div>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <a href="/" exact activeClassName="active">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" exact activeClassName="active">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/portfolios" exact activeClassName="active">
                            Portfolio
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Articles
                        </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <a href="/contact" exact activeClassName="active">
                            Contact
                        </a>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @ Ophé 2021
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar
