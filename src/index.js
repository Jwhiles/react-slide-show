import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './slideshow/Slideshow.js';

const mySlides = [
  {
    title: <h1>hello welcome to my slide show</h1>,
    content: <p>hit right to proceed</p>,

  },
  {
    title: 'wowowo',
    titleStyle: `font-size: 2em`,
    content: 'words and things',
    contentStyle: `
      font-size: 1.5em;
      transform: rotate(20deg);
      `
  },
  {
    title: <h1>SHIT</h1>,
    content:
      <div>
        <p>this is the end</p>
        <p>hit left to go backwards!</p>
      </div>
  }
]


ReactDOM.render(
  <Slideshow slides={mySlides} />,
  document.getElementById('root')
);
