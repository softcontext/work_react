import React, {Component} from 'react';

class App extends Component {

  render() {

    var num = 2;
    var tab = '\u00a0\u00a0\u00a0\u00a0';
    var myStyle = {
      color: '#FF0000'
    };

    // JSX HTML 코드는 JS 트랜스파일링이 되는데, 트랜스파일링 시
    // 처리가 안되는 부분은 사용할 수 없다.
    return (
      <div>
        {/* 주석 */}
        {// 한줄주석
        }
        <h1>Hello World!</h1>
        <h2>{num}{tab}{num}</h2>
        <h2 style={myStyle}>Header2</h2>
        <hr></hr>
        <hr/>
        <span id="my-content" big data-big myId="1" YOURID="2">Content</span>
        <input required></input>
        {/* <div></div> */}
        <br/>
        1+1 = {1+1}
        <br/>
        result = {1 === 1 ? 'true' : 'false'}
        <br/>
        <span class="footer" for="footer">Footer</span>
        <br/>
        <span className="footer" htmlFor="footer">Footer</span>
      </div>
      /* <div></div> */
    );
  }

}

export default App;
