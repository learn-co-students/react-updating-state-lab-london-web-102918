// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor() {
        super();
        this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }    
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        }, () => console.log(this.state.settings.bitrate))   
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state.settings.video))
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrate}>
                    ChangeBitrate
                </button>
                <button className='resolution' onClick={this.handleResolution}>
                    ChangeResolution
                </button>
            </div>

        )
    }

}

export default YouTubeDebugger