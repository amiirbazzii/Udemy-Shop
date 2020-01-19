import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/FireBase-utlis';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";



import './Header.scss';
import { ReactComponent as Logo } from '../../assets/download.svg';

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
                <Link className='option' to='/shop'> SIGN IN </Link>
                )
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);
