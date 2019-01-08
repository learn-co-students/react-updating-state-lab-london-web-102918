// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      settings: {
        bitrate: 8,
        video: {resolution: '1080p'}
      },
      user: null
    }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
          ...this.state.settings,
          bitrate: this.state.settings.bitrate === 8 ? 12 : 8
        }
      });
    }

  handleResolutionClick = () => {
    this.setState({
      settings: {
          ...this.state.settings,
          video: { resolution: this.state.settings.video.resolution === '1080p' ? '720p' : '1080p' }
        }
      });
    }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleResolutionClick}>Change Resolution</button>
      </div>
    )
  }
}
