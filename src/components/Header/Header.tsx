import React, { Fragment, useState } from 'react'
import "./header.css";
import logo from "./../../images/logo.svg";
import logoIcon from "./../../images/icon.png";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; 
import Cart from '../Cart/Cart';
import {useSelector} from "react-redux"
import {RootState} from "./../../store";

const Header = () => {
    const {count} = useSelector((state: RootState) => state.cart);
    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <div className="main__header">
                <div className="inner__section">
                    <div className="logo__box">
                        <img src={logo} className="logo" alt="logo"/>
                        <img src={logoIcon} className="logo_icon" alt="logo"/>
                    </div>

                    <form className="input__area">
                        <button className="selectBar">
                            <span className="select_button_in"><ArrowDropDownIcon/></span>
                        </button>
                        <input className="search" type="text" placeholder="Search Walmart"/>
                        <button className="searchButton">
                            <span className="search_button_in"><SearchIcon/></span>
                        </button>
                    </form>

                    <div className="account__infos">
                        <div className="account_box no_mobile">
                            <span className="icons">
                                <img alt="person" src="https://i5.walmartimages.com/dfw/63fd9f59-e6fd/58bc58d4-79e6-4302-b5f4-9d7f0eef1508/v1/user-nav-white.487755544c4763ca6d9aa9c165e93fe6aba79542.svg" width="24" height="24" />
                            </span>
                            <span className="header__text">Sign in</span>
                        </div>
                        <div className="account_box no_mobile">
                            <span className="icons">
                                <img alt="return" src="https://i5.walmartimages.com/dfw/63fd9f59-392b/48a699e6-5299-4b55-8895-28b7af730df3/v1/easyreorder-white.2dd182909686a6375f21a1a3a0c8a34ae845667c.svg" width="24" height="24" />
                            </span>
                            <span className="header__text">Favorites</span>
                        </div>
                        <div className="account_box" onClick={openDrawer}>
                            <span className="icons">
                                <img alt="cart" src="https://i5.walmartimages.com/dfw/63fd9f59-392b/48a699e6-5299-4b55-8895-28b7af730df3/v1/cart-nav-white.00018279d92b8685ff0d50c146eefe5491200c0b.svg" width="24" height="24" />
                            </span>
                            <div className="cart__count">
                                {count}
                            </div>
                        </div>
                    </div>
                </div>

                <Cart open={open} openDrawer={openDrawer} closeDrawer={closeDrawer}/>
            </div>
        </Fragment>
    )
}

export default Header;