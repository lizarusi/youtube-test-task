import React, {Component} from 'react';
import './VideoHistory.css';

export class VideoHistory extends Component {
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
    }

    handleDelete(uniqId) {
      this.props.onDelete(uniqId);
    }

    handlePlay(item) {
        this.props.onPlay(item);
    }

    render() {
        return (
            <div className="VideoHistory__container">
                <h2>Watch History</h2>
                <div className="VideoHistory__list">
                    {
                        this.props.history.map((item, i) => {
                            return (
                                <div className="VideoHistory__row" key={i}>
                                    <a onClick={() => this.handlePlay(item)}>{item.title}</a>
                                    <button onClick={() => this.handleDelete(item.uniqId)}> Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

