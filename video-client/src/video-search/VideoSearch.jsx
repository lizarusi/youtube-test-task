import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {FontIcon} from 'material-ui';
import 'flex-layout';
import './VideoSearch.css';

export default class VideoSearch  extends Component {
  constructor() {
      super();
      this.state = {
          searchQuery: '',
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
        this.props.search(this.state.searchQuery);
    }
  };

  handleClick(e) {
      this.props.search(this.state.searchQuery);
  }

  handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  render() {
    return (
        <div>
            <MuiThemeProvider>
                <div className='VideoSearch__input'>
                    <TextField
                        name='searchQuery'
                        placeholder='SearchVideo'
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                        fullWidth={true}
                    />
                    <FontIcon onClick={this.handleClick} className="material-icons VideoSearch__icon">search</FontIcon>
                </div>
            </MuiThemeProvider>
        </div>
    )
  }
}
