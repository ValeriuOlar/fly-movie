import React, { Component } from 'react'
import './App.css';

class App extends Component{
    constructor(props) {
      super(props)
      console.log("This is the Initialiser")

      const movies =[
        {id: 0, title: "Avengers: Infinity War", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est arcu, tempus quis leo ac, commodo hendrerit velit. Maecenas in imperdiet velit. Vivamus ac diam mauris. Donec posuere, neque ut bibendum feugiat, justo quam egestas elit, nec malesuada nisl elit commodo libero. Suspendisse ultricies lorem urna. Aenean arcu purus, pulvinar at tincidunt id, volutpat id quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
        {id: 1, title: "Avengers: Endgame", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est arcu, tempus quis leo ac, commodo hendrerit velit. Maecenas in imperdiet velit. Vivamus ac diam mauris. Donec posuere, neque ut bibendum feugiat, justo quam egestas elit, nec malesuada nisl elit commodo libero. Suspendisse ultricies lorem urna. Aenean arcu purus, pulvinar at tincidunt id, volutpat id quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
        {id: 2, title: "Avengers: Age of Ultron", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est arcu, tempus quis leo ac, commodo hendrerit velit. Maecenas in imperdiet velit. Vivamus ac diam mauris. Donec posuere, neque ut bibendum feugiat, justo quam egestas elit, nec malesuada nisl elit commodo libero. Suspendisse ultricies lorem urna. Aenean arcu purus, pulvinar at tincidunt id, volutpat id quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
        {id: 3, title: "Captain Marvel", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est arcu, tempus quis leo ac, commodo hendrerit velit. Maecenas in imperdiet velit. Vivamus ac diam mauris. Donec posuere, neque ut bibendum feugiat, justo quam egestas elit, nec malesuada nisl elit commodo libero. Suspendisse ultricies lorem urna. Aenean arcu purus, pulvinar at tincidunt id, volutpat id quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
        {id: 4, title: "Captain America: The First Avenger", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est arcu, tempus quis leo ac, commodo hendrerit velit. Maecenas in imperdiet velit. Vivamus ac diam mauris. Donec posuere, neque ut bibendum feugiat, justo quam egestas elit, nec malesuada nisl elit commodo libero. Suspendisse ultricies lorem urna. Aenean arcu purus, pulvinar at tincidunt id, volutpat id quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
      ]

      this.state = {rows: [
      <p key="1">This is a row</p>,
      <p key="2">This is a row</p>,
      <p key="3">This is a row</p>,
      <p key="4">This is a row</p>,
      <p key="5">This is a row</p>
    ]}

    var movieRows =[]
    movies.forEach((movie) =>{
      console.log(movie.title);
      const movieRows = <table>
        <tbody>
          <tr>
            <td>
              <img src=""/>
            </td>
            <td>
              {movie.title}
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(movieRows)
    })

    this.state = {movie: movieRows}

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
