import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productType, cartType} from "./../../types";

type cartStateType = {
    cart : cartType[],
    count : number,
    total : number
}

const productSlice = createSlice({
    name: "cart",
    initialState : {
        cart : [],
        count : 0,
        total: 0.00
    } as cartStateType,
    reducers : {
        add_to_cart : (state : cartStateType , action : PayloadAction<productType>) => {
            state.count += 1;
            state.total = Number((state.total + action.payload.price).toFixed(2));
            if(state.cart.find((cart: cartType) => cart.product.id === action.payload.id)){
                state.cart = state.cart.map((cartitem : cartType) => {
                    if(cartitem?.product?.id === action.payload.id){
                        return {
                            product: action.payload,
                            quantity: cartitem.quantity + 1
                        } 

                    }
                    
                    return cartitem
                })
            }
            else{
                state.cart.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        },
        remove_from_cart : (state : cartStateType , action : PayloadAction<productType>) => {
            state.count -= 1;
            state.total = Number((state.total - action.payload.price).toFixed(2));
            if(state.cart.filter((cart: cartType) => cart.product.id === action.payload.id)[0].quantity === 1){
                const index = state.cart.findIndex((cart: cartType) => cart.product.id === action.payload.id);
                state.cart.splice(index, 1);
            }
            else{
                state.cart = state.cart.map((cartitem : cartType) => {
                    if(cartitem?.product?.id === action.payload.id){
                        return {
                            product: action.payload,
                            quantity: cartitem.quantity - 1
                        } 

                    }
                    
                    return cartitem
                })
            }
        },
        remove_item_from_cart : (state : cartStateType , action : PayloadAction<productType>) => {
            const index = state.cart.findIndex((cart: cartType) => cart.product.id === action.payload.id);
            state.total = Number((state.total - (action.payload.price * state.cart[index].quantity)).toFixed(2));
            state.count -= state.cart[index].quantity;
            state.cart.splice(index, 1);
        }
    }
})

export const {add_to_cart, remove_from_cart, remove_item_from_cart} = productSlice.actions;
export default productSlice.reducer;