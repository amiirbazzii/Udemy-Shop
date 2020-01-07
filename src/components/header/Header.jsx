import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/download.svg';
import { auth } from '../../firebase/FireBase-utlis';
import { connect } from "react-redux";
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown'
 
const Header = ({ currentUser,hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
            SHOP
            </Link>
            <Link className='option' to='/shop'>
            CONTRACT
            </Link>
            {
                currentUser ?(
                <div className='option' onClick={() => auth.signOut()} > SIGN OUT </div>
                ):(
                <Link className='option' to='/signin'> SIGN IN </Link>
                )
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
)

const mapStateToProps = ({user: { currentUser } , cart: { hidden }}) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);
