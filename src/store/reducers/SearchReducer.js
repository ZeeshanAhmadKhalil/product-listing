import {
    SEARCH_PRODUCT,
} from '../actions/types'

const initialState = {
    searchQuery: '',
}

export default (state = initialState, { type, payload }) => {
    // console.log('TYPE::')
    // console.log(type)
    // console.log('PAYLOAD::')
    // console.log(payload)
    switch (type) {
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchQuery: payload.toLowerCase(),
            }
        default:
            return state;
    }
}