import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      txt: 'X'
    };
  }

  update = () => {
    this.state.txt += 'Y';
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick={this.update}>click</button>
        <h4>{this.state.txt}</h4>
        <h4>{Math.random()}</h4>
      </div>
    )
  }
}

export default App
