import React, {Component} from 'react';
import './VideoHistory.css';

export class VideoHistory extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
      this.props.onDelete(id);
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
                                    <p>{item.title}</p>
                                    <button onClick={() => this.handleClick(item.id)}> Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

