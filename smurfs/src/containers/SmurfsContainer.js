import React from "react";

import { connect } from 'react-redux';
import { getSmurfs} from "../actions";
import SmurfList from "../components/SmurfList";
import SmurfForm from "../components/SmurfForm";

class SmurfsContainer extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                <SmurfForm/>
                <SmurfList smurfs={this.props.smurfs}/>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {getSmurfs})(SmurfsContainer);
