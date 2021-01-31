import React, { ReactElement } from 'react'
import {useDispatch} from "react-redux";
import {add_to_cart, remove_from_cart, remove_item_from_cart} from "./../../store/productSlice";
import {productType} from "./../../types";

interface Props {
    quantity: number,
    product: productType
}

function CartItem({quantity, product}: Props): ReactElement {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add_to_cart(product))
    }

    const removeFromCart = () => {
        dispatch(remove_from_cart(product))
    }

    return (
        <div className="cart__item">
            <div className="cart__item_box">
                <span className="cart_image__area">
                    <div className="cart_image">
                        <img src={product.image} className="cart__image"/>
                    </div>
                </span>
                <div className="cart__info__box">
                    <span className="cart__product_title">{product.title}</span>
                    <div className="cart__count_box">
                        <div className="count_cart_area">
                            <div className="counter_round">
                                <button className="button_less" onClick={removeFromCart}>
                                    <span>-</span>
                                </button>
                                <div className="count_box">
                                    <input type="text" className="cart_input" disabled value={quantity} />
                                </div>
                                <button className="button_add" onClick={addToCart}>
                                    <span>+</span>
                                </button>
                            </div>
                            <button className="remove_cart" onClick={() => dispatch(remove_item_from_cart(product))}>Remove</button>
                        </div>
                    </div>
                    <span className="cart__price__box">
                        <span className="cart__price">${(product.price * quantity).toFixed(2)}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
