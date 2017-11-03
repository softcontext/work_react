import React, {Component} from 'react';

class App extends Component {
  // one-way binding: 클래스 데이터 갱신 ----> 화면을 갱신
  constructor(){
    super();
    this.title = 'Title';

    this.update = this.update.bind(this);
  }

  update(e){
    // alert('ok');
    // console.log(e.target.value);
    console.log(Object.getOwnPropertyNames(this));
    // [
    //   "props", "context", "refs", "updater",
    //   "title", "update",
    //   "_reactInternalFiber", "_reactInternalInstance", "state"
    // ]

    this.title = e.target.value;
    console.log('this.title = '+this.title);
  }

  render() {

    return (
      <div>
        <h1>{this.title}</h1>
        <input value={this.title} onChange={this.update}></input>
        <Header></Header>
        <Content/>
      </div>
    )
  }

}

var app = new App();
console.log(JSON.stringify(app));
// {
//   "refs": {
//
//   },
//   "updater": {
//
//   },
//   "title": "Title"
// }
console.log(app.__proto__ === App.prototype);
console.log(App.prototype);

class Header extends Component {

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
