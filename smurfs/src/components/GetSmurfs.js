import React, {useEffect} from "react";
import {Grid, Header, Loader} from "semantic-ui-react";
import axios from 'axios';
import Smurf from './Smurf';

//we are going with react hooks over context so we need react-redux
import {useDispatch, useSelector} from "react-redux";

//we need to get data for use in here, so let's get those actions!
import {GET_API_FAILURE, GET_API_START, GET_API_SUCCESS} from "../reduxStore/actions";


const GetSmurfs = () => {
    const dispatch = useDispatch();
    const smurfs = useSelector(state => state.smurfs)
    const isGettingSmurf = useSelector(state => state.isGettingSmurf)


    useEffect(() => {
        dispatch({type: GET_API_START})

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                    console.log('res.data', res.data);
                    dispatch({type: GET_API_SUCCESS, payload: res.data})

                }
            )
            .catch(error => console.log(error.response.message))
    }, [])
    return (
        <React.Fragment>
            <Grid>
                <Grid.Row columns={2} color={"grey"}>
                    <Grid.Column width={4}>
                        <Header size='large'>
                            Le Pays Maudit

                            <Smurf/>
                        </Header>
                        {console.log(isGettingSmurf)}

                    </Grid.Column>
                </Grid.Row>

            </Grid>
            {/*//Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`*/}

        </React.Fragment>
    );

}


export default GetSmurfs;




