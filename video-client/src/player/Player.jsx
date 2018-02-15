import React, { Component } from 'react';
import YouTubePlayer from 'youtube-player';

export default class Player extends Component {
    player;
    constructor() {
        super();
    }

    componentDidUpdate() {
        if (!this.player) this.player = YouTubePlayer('player', { width: '900px', height: '450px'});
        if ( this.props.videoId ) {
            this.player.loadVideoById(this.props.videoId);
            this.player.playVideo();
        }
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.videoId === this.props.videoId) return false;
        return true;
    }
    
    render() {
        return (
            <div>
                <div id="player"></div>
            </div>
        )
    }
}
