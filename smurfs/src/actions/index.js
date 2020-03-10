import axios from 'axios';

export const GET_API_START = 'GET_API_START';
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const GET_API_FAILURE = 'GET_API_FAILURE';
export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_API_START});

    axios.get('http://localhost:3333/smurfs')
        .then( res => {
            console.log('res.data.get', res.data)
            dispatch({ type: GET_API_SUCCESS, payload: res.data})
        })
        .catch(error => {
            console.log(error.res)
            dispatch({ type: GET_API_FAILURE, payload: error.res.status})
        })
}

export const POST_API_START = 'POST_API_START';
export const POST_API_SUCCESS = 'POST_API_SUCCESS';
export const POST_API_FAILURE = 'POST_API_FAILURE';
export const postSmurfs = (newSmurf) => dispatch => {
    dispatch({ type: POST_API_START })
    axios.post('http://localhost:3333/smurfs, newSmurf')
        .then( res => {
            console.log('res.data', res.data)
            dispatch({ type: POST_API_SUCCESS, payload: res.data })
        })
        .catch(error => {
            console.log(error.response)
            dispatch({ type: POST_API_FAILURE, payload: error.response.status })

        })
}

