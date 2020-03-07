import React, {useEffect} from "react";
import axios from 'axios';
import Smurf from './Smurf';

//we are going with react hooks over context so we need react-redux
import { useDispatch, useSelector } from "react-redux";

//we need to get data for use in here, so let's get those actions!
import { GET_API_FAILURE, GET_API_START, GET_API_SUCCESS} from "../reduxStore/actions";


const GetSmurfs = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({type: GET_API_START})

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => console.log(res.data))
            .catch(error => console.log(error.response.message))
    }, [])
        return (
            <div>
                {/*//Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`*/}
                <Smurf/>

            </div>
        );

}


export default GetSmurfs;




