// Code DigitalClicker Component Here
import React, {Componenet} from 'react';


class DigitalClicker extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = (e)=> {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }


  render(){
    return(
      <div>
      <label>{this.state.timesClicked}</label>
      <button label= {this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
