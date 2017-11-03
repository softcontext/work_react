import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/comments`)
    .then(res => {
      this.setState({posts: res.data});
    });
  }

  render() {
    return (
      <div>
        {/* <RaisedButton label="Default" />
        <DatePicker hintText="Portrait Dialog" />
        <DatePicker hintText="Landscape Dialog" mode="landscape" />
        <DatePicker hintText="Dialog Disabled" disabled={true} />
        <DatePicker hintText="Open to Year" openToYearSelection={true} /> */}

        <ul>
        {
          this.state.posts.map((post, idx) =>
            <li key={idx}>{post.id} {post.body} {post.postId}</li>)
        }
        </ul>
      </div>
    );
  }
}

export default App;
