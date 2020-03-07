import axios from 'axios';
//our state management system is Redux, so we add Actions here to for GET_API data
export const GET_API_START = 'GET_API_START';
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const GET_API_FAILURE = 'GET_API_FAILURE';

export const getAPI = () => dispatch => {
    dispatch({type: GET_API_START})
    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({type: GET_API_SUCCESS, payload: res.data}))
        .catch(err => {
            dispatch({type: GET_API_FAILURE, payload: err.response.status})
            console.log(err.response.message)})
}

//looks like our required is add a Smurf, so call them POST_API data to differ from GET
export const POST_API_START = 'POST_API_START'; //THIS IS FOR SMURF
export const POST_API_SUCCESS = 'POST_API_SUCCESS'; //STILL SMURF
export const POST_API_FAILURE = 'POST_API_FAILURE';

