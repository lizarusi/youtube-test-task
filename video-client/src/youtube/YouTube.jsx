import React, {Component} from 'react';
import ApiService from '../api-service/apiService';
import VideoSearch from '../video-search/VideoSearch';
import VideoSearchResult from '../video-search-result/VideoSearchResult';
import Player from '../player/Player';
import './YouTube.css';
import {VideoHistory} from '../video-history/VideoHistory';

export default class YouTube extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            history: []
        };
        this.search = this.search.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentWillMount() {
        ApiService.getQueue()
            .then((res) => {
                this.setState({ history: res });
            });
    }

    search(query) {
        ApiService.search(query)
            .then((result) => {
                this.setState({
                    results: result,
                })
            })
    };

    onPlay(obj) {
        ApiService.addToQueue(obj)
            .then(() => {
                this.setState({
                    videoId: obj.id,
                    history: this.state.history.concat([obj]),
                    results: []
                });
            });
    }

    onDelete(id) {
        ApiService.deleteFromQueue(id)
            .then((res) => {
                this.setState({
                    history: this.state.history.filter((item) => item.id !== id),
                });
            });
    }

    onBlur(e) {
        this.setState({
            results: []
        });
    }

    render() {
        return (
            <div>
                <div className='YouTube__search'>
                    <VideoSearch search={this.search}/>
                    {
                        this.state.results.length > 0 ? (
                            <div className='YouTube__search-results'>
                                {this.state.results.map((item, i) =>
                                    <VideoSearchResult onPlay={this.onPlay} key={i}
                                                       id={item.id} name={item.name}
                                                       url={item.thumbnail.url}/>)
                                }
                            </div> ) : ''
                    }
                </div>
                <div className='YouTube__content'>
                    <div className='YouTube__history'>
                        <VideoHistory onDelete={this.onDelete} history={this.state.history}/>
                    </div>
                    <div className='YouTube__player'>
                        <Player videoId={this.state.videoId}/>
                    </div>
                </div>
            </div>
        )
    }
}
