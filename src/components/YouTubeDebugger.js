// Code YouTubeDebugger Component Here
// Code YouTubeDebugger Component Here
import React, {
  Componenet
} from 'react';


class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick =(e) =>{
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: this.state.settings.video.resolution
        }
      }
    })
  }

  handleClick2 =(e) =>{
    this.setState({
      settings: {
        bitrate: this.state.settings.bitrate,
        video: {
          resolution: '720p'
        }
      }
    })
  }




  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.handleClick}>bitrate</button>
      <button className="resolution" onClick= {this.handleClick2} > resolution  </button>
      </div>




    )
  }
}

export default YouTubeDebugger;
