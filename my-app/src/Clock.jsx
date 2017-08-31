import React, {Component} from 'react';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state={
      day:0,
      hour:0,
      minute:0,
      second:0
    }
    console.log('this.props', this.props);
  }
  render(){
    return(
      <div>
        <div className="Clock-thang">{this.state.day}ngay</div>
        <div className="Clock-gio">{this.state.hour}gio</div>
        <div className="Clock-phut">{this.state.minute}phut</div>
        <div className="Clock-giay">{this.state.second}giay</div>
      </div>
    );
  }
}
export default Clock;
