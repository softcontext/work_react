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

  receiveData = (data) => {
    alert(data);
  }

  render() {
    return (
      <div>
        <input ref="xx"></input>
        <button onClick={this.reset}>reset</button>
        <hr/>
        <Child receiveData={this.receiveData} />
      </div>
    );
  }
}

class Child extends React.Component {
  sendToParent = () => {
    // 부모에게 받은 함수를 사용하여 부모에게 자식의 데이터를 전달한다.
    this.props.receiveData(this.refs.yy.value);
  }

  render() {
    return (
      <div>
        <input ref="yy"></input>
        <button onClick={this.sendToParent}>send to parent</button>
      </div>
    );
  }
}

export default App;
