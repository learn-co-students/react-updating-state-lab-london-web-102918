// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
        bitrate: 8,
        video: {
            resolution: '1080p' } }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.handleBitrateClick} bitrate={this.state.settings.bitrate} >Bitrate</button><br/>
        <button onClick={this.handleResolutionClick} resolution={this.state.settings.video.resolution} >Resolution</button>
      </div>
    )
  }

}

export default YouTubeDebugger
