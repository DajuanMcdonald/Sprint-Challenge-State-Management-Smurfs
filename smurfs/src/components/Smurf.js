import React from "react";
import{ Item , Label, Header, Segment} from "semantic-ui-react";


class Smurf extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            age: this.props.age,
            height: this.props.height,
            name: this.props.name
        }
    }
    render() {

        return (
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header>Smurf Village</Item.Header>

                    </Item.Content>

                </Item>



            </Item.Group>
        );
    }
}

export default Smurf;


//Design the functionality to add a smurf to the Smurf DB
