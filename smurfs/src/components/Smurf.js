import React from 'react';

class Smurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: {
                name: '',
                height: '',

            }
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1>Name: {this.props.smurf.name}</h1>
                <h3> Age: {this.props.smurf.age}</h3>
                <p> Height: {this.props.smurf.height}</p>



            </React.Fragment>
        );
    }
}

export default Smurf;
