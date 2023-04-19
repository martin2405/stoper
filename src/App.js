import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

class App extends React.Component {

  state = {
    miliseconds: 0,
    seconds: 0,
    minutes: 0,
    buttonClass: "fas fa-play",
    IndexOfInterval: null
  };

  handleClear = () => {
    let buttonClass = this.state.buttonClass;

    if (buttonClass === 'fas fa-pause') buttonClass = "fas fa-play"

    clearInterval(this.state.IndexOfInterval)

    this.setState({
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
      buttonClass
    })
  }

  handleCount = () => {
    let buttonClass = this.state.buttonClass;
    let IndexOfInterval = this.state.IndexOfInterval;

    if (buttonClass === "fas fa-play") {
      buttonClass = 'fas fa-pause'
      IndexOfInterval = setInterval(this.handleStartCount, 10)
    } else {
      buttonClass = "fas fa-play"
      clearInterval(IndexOfInterval)
    }

    this.setState({
      buttonClass,
      IndexOfInterval
    })
  }

  handleStartCount = () => {
    let miliseconds = this.state.miliseconds;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    miliseconds += 1;

    if (miliseconds === 100) {
      miliseconds = 0;
      seconds += 1;
    }

    if (seconds === 60) {
      minutes += 1
      seconds = 0
    }

    this.setState({
      miliseconds,
      seconds,
      minutes
    })
  }


  render() {
    
    const { miliseconds, seconds, minutes, buttonClass } = this.state

  return (
    <div className='App'>
     <div className="stoper">
      <h1 className="stoper__h1">stoper</h1>
      <div className="stoper__time">
      <span className="stoper__span">
      <Counter minutes={minutes} seconds={seconds} miliseconds={miliseconds}/>
      </span>
      </div>
      <div className="stoper__buttons">
        <Buttons clear={this.handleClear} count={this.handleCount} buttonClass={buttonClass}/>
      </div>
     </div>
    </div>
  );
  }
}

export default App;
