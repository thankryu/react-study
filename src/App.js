/* eslint-disabled */
// 경고창 안나오게 하기


import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
 
  //()=>{console.log(1)}
  
  // [state데이터, state 데이터 변경 함수]
  let [title, titleChange] = useState(['남자 코드 추천', '남자 자켓 추천','남자 어린이 코트 추천']); 
  let [like, likeChage] = useState(0);
  // state를 쓰는 이유 : 웹이 App처럼 동작하게 만들고 싶어서
  // state는 변경되면 HTML이 자동으로 재 랜더링 된다.

  // function chageTitle(){
  //   titleChange( ['여자 코드 추천', '남자 자켓 추천','남자 어린이 코트 추천'] ); ss
  // } ; 
  function chageTitle(){
    // var newArray = title; //x deep copy 필요
    var newArray = [...title]; // ex6신문법, ...= 중괄호 대괄호를 제거해주세요
    newArray[0] = '여자 코트 추천';
    titleChange(newArray );
  } ;

  let posts = '강남 고기 맛집!';  

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={chageTitle }>버튼</button>
      <div className="list">
        <h3>{ title[0] }<span onClick={()=>{ likeChage(like+1) } }>👍</span>{like}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
    </div>
  )
}

export default App;
