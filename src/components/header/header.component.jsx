import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'

const Header = ({currentUser, hidden}) => (

    <div className="header">
        <Link className='logo-container' to='/jose-marcha'>
            <h1>José Marchá</h1>
        </Link>
        <div className="options">
            <Link className="option" to='/shop' >
                OBRAS
            </Link>
            <Link className="option" to='/ultimaColeccion' >
                ÚLTIMA COLECCIÓN
            </Link>
            <Link className="option" to='/underConstruct' >
                TIENDA
            </Link>
            <Link className="option" to='/underConstruct' >
                CONTACTO
            </Link>
        </div>
    </div>

);


export default Header;