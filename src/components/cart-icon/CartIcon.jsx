import React from 'react';
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCart } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import './Carticon.scss'

const CartIcon = ({ toggleCartHidden , itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCart(state)
});

export default connect(mapStateToProps , mapDispatchToProps)(CartIcon);
