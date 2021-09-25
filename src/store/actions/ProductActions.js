import {
    ADD_NEW_PRODUCT,
    DELETE_PRODUCT,
} from './types'

export const DeleteProduct = (id) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_PRODUCT, payload: id })
    }
}
export const SaveProduct = (productName, price, description) => {
    return async (dispatch) => {
        dispatch({ type: ADD_NEW_PRODUCT, payload: { productName, price, description } })
    }
}