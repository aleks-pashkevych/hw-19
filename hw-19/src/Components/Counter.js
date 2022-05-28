import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          seconds: state.seconds + 1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <span>Session time in second: {this.state.seconds}</span>
      </div>
    );
  }
}
export default Counter;
