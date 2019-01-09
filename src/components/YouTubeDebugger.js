// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } },
    }
  }
  changeBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    })
  }

  changeResolution = () => {
    let currentRes = this.state.settings.video.resolution
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: currentRes === '1080p' ? '720p' : '1080p' },
      },
    })
  }
  render() {
    return (
      <React.Fragment>
        <button className="bitrate" onClick={this.changeBitRate}>
          Bitrate
        </button>
        <button className="resolution" onClick={this.changeResolution}>
          Resolution
        </button>
      </React.Fragment>
    )
  }
}
