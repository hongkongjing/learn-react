import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state={
        deadline: 'mung 1 thang 8 nam 2017',
        Newdeadline:''
      }
    }

    changeDeadline(){
      console.log('state', this.state);
      this.setState({deadline: this.state.Newdeadline});
    }

  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to { this.state.deadline }</div>
        <Clock deadline={this.state.deadline}/>

        <div className="App-nut">
          <input type="text" placeholder="please fill day and year" ref="txt" onChange={dataonchang => this.setState({Newdeadline: dataonchang.target.value})}/>
          <button type="submit" onClick={()=>this.changeDeadline()}>nhap so ho bo may</button>
        </div>
      </div>


    )
  }
}
export default App;
