import React from "react";
import "./App.css";
import GetSmurfs from "./GetSmurfs";
class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <h1>Le Pays Maudit</h1>
            <GetSmurfs/>

        </React.Fragment>
    );
  }
}

export default App;
