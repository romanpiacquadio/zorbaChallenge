import { 
    TURN_ON_MODAL,
    TURN_OFF_MODAL,
 } from "../types"

const initialState = {
    searchModal: false
}

const searchReducers = function (state = initialState, action) {
    switch (action.type) {
        case TURN_ON_MODAL:
            return {
                ...state,
                searchModal: action.payload
            };
        case TURN_OFF_MODAL:
            return {
                ...state,
                searchModal: action.payload
            };
        default:
            return {
                ...state
            }
    }
}

export default searchReducers