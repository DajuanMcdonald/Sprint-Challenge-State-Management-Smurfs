import React from "react";
import "./App.css";
import SmurfsContainer from '../containers/SmurfsContainer';
class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <div className='App'>
            <h1>Le Pays Maudit</h1>

            <SmurfsContainer/>
            </div>


        </React.Fragment>
    );
  }
}

export default App;
