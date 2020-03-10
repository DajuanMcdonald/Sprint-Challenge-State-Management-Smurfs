import React from "react";
import "./App.css";
import SmurfsContainer from '../containers/SmurfsContainer';
class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <h1>Le Pays Maudit</h1>
            <SmurfsContainer/>


        </React.Fragment>
    );
  }
}

export default App;
