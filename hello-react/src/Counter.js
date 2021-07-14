import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값 : {fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState({
              number: number + 1,
            },
            ()=>{
                console.log("방금 setState가 호출되었습니다.");
                console.log("현재상태 " + this.state.number + "현재 number= " + number   );
            }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
