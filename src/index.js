import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './slideshow/Slideshow.js';

const mySlides = [
  {
    title: <h1>sup bro</h1>,
    content: <p>it's yo boi</p>,
    backgroundColor: 'pink'
  },
  {
    title: <h1>wowowo</h1>,
    content:
      <div>
        <p>it's yo boi</p>
        <p>johnno the wonno</p>
      </div>
  },
]


ReactDOM.render(
  <Slideshow slides={mySlides} />,
  document.getElementById('root')
);
