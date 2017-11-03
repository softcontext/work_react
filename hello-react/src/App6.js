import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      members: [
        {id:1, name:'A', age:10},
        {id:2, name:'B', age:20},
        {id:3, name:'C', age:30},
      ]
    };
  }

  render() {
    return (
      <div>
        <List members={this.state.members}/>
      </div>
    )
  }
}

// List 컴포넌트를 만들고 부모 컴포넌트로 members 데이터를 받아서 출력하는 로직을 작성하세요.
class List extends Component {
  render() {
    var members = this.props.members;

    var html = [];
    for (var i = 0; i < members.length; i++) {
      var member = members[i];
      // Warning: Each child in an array or iterator should have a unique "key" prop.
      // 태그가 반복되는 경우 화면을 리 랜더링 할 때 빠른 처리를 위해 리액트는 key 프로퍼티가 필요하다.
      html.push(<li key={member.id}>{member.id+','+member.name+','+member.age}</li>);
    }

    return (
      <div>
        <ul>
          {html}
        </ul>
      </div>
    )
  }
}

export default App
