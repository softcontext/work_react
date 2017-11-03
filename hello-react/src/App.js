import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
  }

  reset = (e) => {
    this.refs.xx.value = '';
  }

  render() {
    return (
      <div>
        <input ref="xx"></input>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default App;
