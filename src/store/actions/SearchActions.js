import {
    SEARCH_PRODUCT,
} from './types'

export const SearchProduct = (searchQuery) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_PRODUCT, payload: searchQuery })
    }
}