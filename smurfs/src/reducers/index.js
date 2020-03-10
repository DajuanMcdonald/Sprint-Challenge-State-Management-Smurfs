import {
    POST_API_FAILURE,
    POST_API_SUCCESS,
    POST_API_START,
    GET_API_FAILURE,
    GET_API_SUCCESS,
    GET_API_START
} from "../actions";



const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    isError: null
}

export default (state = initialState, action) =>  {
    switch (action.type) {
        case GET_API_START:
            return {
                ...state,
                isFetching: true

            }

        case GET_API_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false

            }

        case GET_API_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload


            }

        case POST_API_START:
            return {
                ...state,
                isPosting: true

            }

        case POST_API_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false
            }

        case POST_API_FAILURE:
            return {

            }
        default:
            return state
    }
}
