// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = { timesClicked: 0 }
  }
  handleClick = () => {
    let counter = this.state.timesClicked
    counter += 1
    this.setState({ timesClicked: counter })
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  }
}
