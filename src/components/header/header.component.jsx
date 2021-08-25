import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (

    <div className="header">
        <Link className='logo-container' to='/jose-marcha'>
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link className="option" to='/shop' >
                OBRAS
            </Link>
            <Link className="option" to='/shop' >
                CONTACTO
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={()=>auth.signOut()}>
                        REGISTRO
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SALIR
                    </Link>
                )
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>

);

const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);