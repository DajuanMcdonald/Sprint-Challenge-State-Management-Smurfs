import React from "react";
import Smurf from "./Smurf";
import './App.css';

const SmurfList = (props) => {
console.log('smurflist', props.smurfs)
    return (
        <div className="smurf-list">
            <h1>Smurf Village</h1>
            {props.smurfs.map(smurf => <Smurf key={Date.now()} smurf={smurf}/>)}
            {console.log('props.smurfs', props.smurfs)}
        </div>
    )

}
export default SmurfList;
