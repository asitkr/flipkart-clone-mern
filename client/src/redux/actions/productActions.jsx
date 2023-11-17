import axios from "axios";

import * as actionsType from "../constants/productsConstants";

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        // console.log(data);
        dispatch({ type: actionsType.GET_PRODUCTS_SUCCESS, payload: data });
    } 
    catch (error) {
        // console.log('Error while calling getProducts API: ', error.message);
        dispatch({ type: actionsType.GET_PRODUCTS_FAIL, payload: error.message });
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionsType.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        
        dispatch({ type: actionsType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } 
    catch (error) {
        dispatch({ type: actionsType.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: actionsType.GET_PRODUCT_DETAILS_RESET });
};