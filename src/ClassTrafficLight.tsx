import { Component } from "react"


export class ClassTrafficLight extends Component {
  state = {
    light: 0,
  };

  increment = () => {
    if(this.state.light + 1 > 2) {
      this.setState({light: this.state.light = 0})
    } else {
      this.setState({light: this.state.light + 1})
    }
  }

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={'circle ' + (this.state.light === 0 ? 'red' : 'black')}></div>
          <div className={'circle ' + (this.state.light === 1 ? 'yellow' : 'black')}></div>
          <div className={'circle ' + (this.state.light === 2 ? 'green' : 'black')}></div>
        </div>
        <button className="next-state-button" onClick={this.increment}>Next State</button>
      </div>
    );
  }
}
