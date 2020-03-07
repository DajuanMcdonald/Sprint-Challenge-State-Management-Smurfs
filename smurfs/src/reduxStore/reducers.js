//the shape of data to be sent to Store
import { GET_API_START,
    GET_API_SUCCESS,
    GET_API_FAILURE,
    POST_API_FAILURE,
    POST_API_START,
    POST_API_SUCCESS} from "./actions";

const initialState = {
    smurfs: [],
    isGetting: false,
    isPosting: false,
    didError: false
}

const smartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API_START:
            return {
                ...state,
                isGetting: true,
                didError: false
            }

        case GET_API_SUCCESS:
            return {
                ...state,
                isGetting: false,
                smurfs: action.payload

            }

        case GET_API_FAILURE:
            return {
                ...state,
                didError: true

            }

        case POST_API_START:
            return {
                ...state,


            }

        case POST_API_SUCCESS:
            console.log(action.payload)
            return {
                ...state,

            }

        case POST_API_FAILURE:
            return {

            }

        default:
            return state;
    }
}

export default smartReducer;
