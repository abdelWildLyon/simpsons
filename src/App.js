import React from 'react';
import  DisplayPhrase from './components/DisplayPhrase'
import axios from 'axios';
import './App.css';

const phrase = {
    character:"Mr. Burns",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMrBurns.png?1497567512188",
    quote:"Doughnuts? I told you I don't like ethnic food",  
  }

  

      

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase : phrase
    };
  }

  getPhrase = ()=>{
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          phrase: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <DisplayPhrase phrase = {this.state.phrase} />
        <button type="button" onClick={this.getPhrase}>Get phrase</button>
      </div>
    );
  }
}
export default App;
