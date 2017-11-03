import React, {Component} from 'react';

class App extends Component {
  // one-way binding: 클래스.state의 데이터 갱신 ----> 화면을 갱신
  constructor(){
    super();
    this.state = {
      title: 'Title',
      name: 'Seokwon'
    };
    // 해당 함수안에서 this 를 사용하면 아래 설정이 필요하다.
    this.update = this.update.bind(this);
  }

  update(e){
    var newTitle = e.target.value;
    this.setState({title: newTitle});
  }

  popup = () => {
    alert('ok, title = '+this.state.title);
  }

  popup2(){
    alert('good, title = '+this.state.title);
  }

  render() {

    return (
      <div>
        {/* <h1>{this.state.title}</h1> */}
        {/* <h1>{this.state.name}</h1> */}
        <input value={this.state.title} onChange={this.update}></input>
        <button onClick={this.popup}>popup</button>
        <button onClick={this.popup2.bind(this)}>popup</button>

        <Header title={this.state.title}></Header>
        <Content name={this.state.name}/>
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
    var title = this.props.title;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    var name = this.props.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

export default App
