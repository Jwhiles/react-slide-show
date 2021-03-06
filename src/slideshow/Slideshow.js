import React, { Component } from 'react';
import Slide from './slide/slide.js';
import './slideshow.css';

const changeSlide = (change) => (state) => ({slide: state.slide + change });

export default class extends Component {
  constructor() {
    super();

    this.state = {
      slide: 0
    }
    this._handleKeyDown.bind(this);
  }

  _handleKeyDown (event) {
    const LEFT = 37
    const RIGHT = 39
    switch( event.keyCode ) {
        case LEFT:
          this.state.slide - 1 >= 0
            ? this.setState(changeSlide(-1))
            : null
          break;
        case RIGHT:
          this.state.slide + 1 < this.props.slides.length
            ? this.setState(changeSlide(+1))
            : null
          break;
        default:
    }
  }

  componentWillMount(){
      document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this._handleKeyDown.bind(this));
  }


  render() {
    const { slides } = this.props
    const currentSlide = slides[this.state.slide];
    return (
      <div className="slideshow">
        <Slide {...currentSlide} / >
      </div>
    )
  }
}
