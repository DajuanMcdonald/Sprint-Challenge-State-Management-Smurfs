import React from 'react';
import {Table} from "semantic-ui-react";
import './App.css';

class Smurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: {
                name: '',
                height: '',
                age: ''

            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="smurf">
                    <Table definition>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell width={2}>Name:</Table.Cell>
                                <Table.Cell>{this.props.smurf.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Age: </Table.Cell>
                                <Table.Cell>{this.props.smurf.age}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Height:</Table.Cell>
                                <Table.Cell>{this.props.smurf.height}</Table.Cell>
                            </Table.Row>

                        </Table.Body>

                    </Table>
                </div>


            </React.Fragment>
        );
    }
}

export default Smurf;
