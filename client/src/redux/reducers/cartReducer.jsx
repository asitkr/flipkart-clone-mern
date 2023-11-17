import * as actionsType from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case actionsType.ADD_TO_CART :
            const item = action.payload;
            const existItem = state.cartItems.find(product => product.id  === item.id);

            if(existItem) {
                return {
                    ...state, cartItems: state.existItem.map(data => data.product === existItem.product ? item : data)
                }
            }
            else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                }
            }
        
        case actionsType.REMOVE_FROM_CART :
            return {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }

        default:
            return state;
    }
}