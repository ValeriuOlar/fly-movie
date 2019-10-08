import React, { Component } from 'react'
import './App.css';

class App extends Component{
    constructor(props) {
      super(props)
      console.log("This is the Initialiser")

      this.state = {rows: <p>This is a row</p>}
    }


  render() {
    return(
      <div className="App">
          <table className="titleBar">
            <tbody>
              <tr>
                <td>
                  <img alt="app" width="50" src="green_app_icon.svg"/>
                </td>
                <td width="8"/>
                <td>
                <h1>Fly_movie</h1>
                </td>
              </tr>
            </tbody>
          </table>
      <input style={{
        fontSize: 24,
        display: 'block',
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }}
      placeholder="Enter search term"/>

      </div>
    );
  }
}

export default App;
