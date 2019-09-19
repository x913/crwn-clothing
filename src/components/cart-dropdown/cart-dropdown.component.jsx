import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './../custom-button/custom-button.components';
import './cart-dropdown.styles.scss';
import CartItem from './../cart-item/cart-item.components';
import { selectCartItems } from './../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


// 0, false, undefined, null, NaN, "" - always evalute to false

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length === 0 ? (<span className="empty-cart">Your cart is empty</span>) : cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

