import React from 'react';
import './style.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter:0,
      array: []
    }
  }
  changeCounter = () =>{
    //Need to use this when i need to do an update after an update happens
    this.setState((prevState,prevProps) => {
      console.log(prevState,prevProps)
      return {counter: prevState.counter + 1};
    },() =>{
      console.log(this.state.counter)
    })
  }
  render() {
   
    return (
      <div>
        Counter {this.state.counter} <br/>
        <button
         onClick={this.changeCounter}
         >
          Increase
        </button>   
         {this.state.counter}
      </div>
    );
  }
}

export default App;
