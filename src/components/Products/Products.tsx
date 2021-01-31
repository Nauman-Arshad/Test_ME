import React, { ReactElement, Fragment } from 'react'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import {productType} from "./../../types";
import {useDispatch} from "react-redux";
import {add_to_cart} from "./../../store/productSlice";

interface Props {
    product: productType,
    description: string
}

function Products({product, description}: Props): ReactElement {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add_to_cart(product))
    }

    return (
        <Fragment>
            <div className="single__product">
                <div className="product__inner">
                    <div className="favorite__area">
                        <button className="fav__button">
                            <FavoriteBorderOutlinedIcon/>
                        </button>
                    </div>
                    <a className="image__area">
                        <div className="image__box">
                            <img src={product.image} alt="" className="product__image"/>
                        </div>
                    </a>
                    <div className="product__info_area">
                        <div className="product__price">${product.price}</div>
                        <a className="product__title">
                            <span className="title">{product.title}</span>
                        </a>
                            <div className="product__extra_info">{description}</div>
                    </div>

                    <div className="button__area">
                        <button className="add_to_cart" onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Products
