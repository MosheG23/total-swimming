const FETCH_USER = {}

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                ...action.payload
            }
            // return action.payload || false;
        default:
            return state;
    }
}