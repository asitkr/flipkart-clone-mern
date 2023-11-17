import axios from "axios";

import * as actionsType from "../constants/cartConstants";

const URL = 'http://localhost:8000';

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actionsType.ADD_TO_CART, payload: { ...data, quantity } });

    } 
    catch (error) {
        dispatch({ type: actionsType.ADD_TO_CART_ERROR, payload: error.message });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: actionsType.REMOVE_FROM_CART, payload: id });
}