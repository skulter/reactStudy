import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => 
  {
      console.log(e.key);
      if(e.key === 'Enter')
      {
          this.handleClick();
      }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습 {this.props.test}</h1>

        <input
          type="text"
          name="username"
          placeholder="이름을 입력해주세요."
          value={this.state.username}
          onChange={this.handleChange}

        />

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }
}

export default EventPractice;
