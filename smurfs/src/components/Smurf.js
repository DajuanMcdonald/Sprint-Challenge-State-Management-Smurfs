import React from "react";
import{ Item , Label, Header, Segment} from "semantic-ui-react";


export default class Smurf extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header>Name</Item.Header>

                    </Item.Content>

                </Item>



            </Item.Group>
        );
    }
}



//Design the functionality to add a smurf to the Smurf DB
