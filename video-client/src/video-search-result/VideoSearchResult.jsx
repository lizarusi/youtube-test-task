import React, {Component} from 'react';
import './VideoSearchResult.css';

export default class VideoSearchResult extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onPlay({ id: this.props.id, title: this.props.name, uniqId: this.props.uniqId });
    };

    render() {
        return (
            <div className='VideoSearchResult__wrapper'>
                <img className='VideoSearchResult__preview' src={this.props.url}/>
                <p className='VideoSearchResult__title'>{this.props.name}</p>
                <input className='VideoSearchResult__play' onClick={this.handleClick} type="button" value="Play"/>
            </div>
        )
    }

}