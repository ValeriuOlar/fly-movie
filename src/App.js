import React, { Component } from 'react'
import './App.css';

class App extends Component{
    constructor(props) {
      super(props)
      console.log("This is the Initialiser")

      const movies =[
        {id: 0, title: "", overview: ""},
        {id: 1, title: "", overview: ""},
        {id: 2, title: "", overview: ""}
      ]

      this.state = {rows: [
      <p key="1">This is a row</p>,
      <p key="2">This is a row</p>,
      <p key="3">This is a row</p>

    ]}
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

      {this.state.rows}

      </div>
    );
  }
}

export default App;
