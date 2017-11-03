import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  }

  setNewNumber() {
    this.setState({
      data: this.state.data + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} pSetNewNumber={this.setNewNumber}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  // 컴포넌트가 화면에 보이기 전
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  // 컴포넌트가 화면에 보인 후
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  // 외부컴포넌트 ==파라미터(가로 챔)==> 현재 컴포넌트
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!')
  }
  // 컴포넌트 재 랜덩링 여부를 결정
  shouldComponentUpdate(newProps, newState) {
    console.log('컴포넌트 재 랜덩링 OK');
    return true;
  }
  // 컴포넌트 업데이트 전
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  // 컴포넌트 업데이트 후
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }

  // 화면에서 사라지기 직전
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
        <button onClick={this.props.pSetNewNumber}>INCREMENT</button>
      </div>
    );
  }
}

export default App;
