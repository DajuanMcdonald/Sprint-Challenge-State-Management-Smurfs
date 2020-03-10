import React from "react";
import { connect } from "react-redux";
import { postSmurfs} from "../actions";

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    handleChange = element => {
        this.setState({
            newSmurf: {...this.state.newSmurf, [element.target.name]: element.target.value}

        });
        console.log(element.target.value)
    }

    postSmurf = e => {
        e.preventDefault();
        this.props.postSmurfs(this.state.newSmurf);
        this.setState({
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Add new Smurf</h1>
                <form method="post" onSubmit={this.postSmurf}>
                    <div>
                        <h2> Name:</h2>
                        <input type="text"

                               onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <h2>Age: </h2>
                        <input type="number"

                               onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <h2>Height: </h2>
                        <input type="text"

                               onChange={this.handleChange}
                        />
                    </div>
                    <button> Add New Smurf </button>

                </form>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        postSmurfs: state.postSmurfs,

    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm);
