import React, {Component} from 'react';

class App extends Component {
  // one-way binding: 클래스 데이터 갱신 ----> 화면을 갱신
  constructor(){
    console.log('App # constructor() called.');

    super();
    // 리액트의 갱신을 위한 데이터는 state가 갖고 있어야 한다.

    // this.title = 'Title';
    this.state = {
      title: 'Title',
      name: 'Seokwon'
    };

    this.update = this.update.bind(this);
  }

  update(e){
    var newTitle = e.target.value;
    // this.state.title = newTitle;

    // 리액트 setState함수를 호출하면 무조건 재 랜더링한다.
    this.setState({title: newTitle});
  }

  render() {

    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>{this.state.name}</h1>
        <input value={this.state.title} onChange={this.update}></input>
        <Header></Header>
        <Content/>
      </div>
    )
  }

}

class Header extends Component {
  constructor(){
    super();
    console.log('Header # constructor() called.');
  }

  render() {

    return (
      <div>
        <h1>111</h1>
      </div>
    )
  }

}

class Content extends Component {

  render() {

    return (
      <div>
        <h1>222</h1>
      </div>
    )
  }

}

export default App
