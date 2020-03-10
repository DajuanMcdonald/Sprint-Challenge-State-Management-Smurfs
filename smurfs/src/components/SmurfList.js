import React from "react";
import Smurf from "./Smurf";

const SmurfList = (props) => {
console.log(props)
    return (
        <div>
            <h1>Smurf Village</h1>
            {props.smurfs.map(smurf => <Smurf smurf={smurf}/>)}
        </div>
    )

}
export default SmurfList;
