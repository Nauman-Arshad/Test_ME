import React, { ReactElement, Fragment, useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from "react-redux"
import {RootState} from "./../../store";
import "./cart.css";
import CartItem from '../CartItem/CartItem';

const useStyles = makeStyles(theme => ({
    paperAnchorRight: {
        top: '60px',
        width: '320px',
        right: 0,
        bottom: 0,
        boxShadow: '0 0 2em rgba(0,0,0,.15)',
        position: 'fixed',
        height: 'auto'
    },
    icon_back: {
        display: 'none',
        cursor: 'pointer'
    },
    [theme.breakpoints.down('xs')]: {
        paperAnchorRight: {
            width: '100%'
        },
        icon_back: {
            display: 'block',
            cursor: 'pointer'
        }
    },
}));

interface Props {
    open: boolean,
    openDrawer: ( ) => void,
    closeDrawer: ( ) => void,
} 

const Cart = ({open, openDrawer, closeDrawer}: Props): ReactElement => {
    const classes = useStyles();
    const {cart, count, total} = useSelector((state: RootState) => state.cart);
    return (
        <Fragment>
            <SwipeableDrawer
                anchor={'right'}
                open={open}
                onClose={closeDrawer}
                onOpen={openDrawer}
                classes={{ paperAnchorRight: classes.paperAnchorRight}}
                >
                    <div className="sidebar__full">
                        <header className="sidebar__header">
                            <ArrowBackIosIcon className={classes.icon_back} onClick={closeDrawer}/>
                            <span>Cart</span>
                            <span>{count} items</span>
                        </header>
                        <div className="cart__box">
                            {
                                cart.length > 0 
                                ?
                                cart.map((cartitem, index) => (
                                    <CartItem
                                        key={index}
                                        product={cartitem.product}
                                        quantity={cartitem.quantity}
                                    />
                                ))
                                :
                                <div className="cart_empty_box">
                                    <span>Your cart is currenty empty</span>
                                </div>
                            }
                        </div>
                        <footer className="sidecart__footer">
                            <div className="footer__inner">
                                <div className="total__price_bar">
                                    <span className="subtotal_heading">Subtotal</span>
                                    <span className="subtotal_amount">${total}</span>
                                </div>
                                <button className="checkout_cart_button">Check out</button>
                            </div>
                        </footer>
                    </div>
            </SwipeableDrawer>
        </Fragment>
    )
}

export default Cart;