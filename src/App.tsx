import React from 'react';
import './App.css';
import './banquet.css'
import {title} from './banquet';

function App() {

  return (
    <div className="app">
      <div className="header img1">
        <div className="title"><h1>Welcome to <span className="color1">{title}</span></h1></div>
      </div>
      <div className="body bcolor1">
        <div className="display bcolor2">
          <div className="image img2">
          </div>
        </div>
        <div className="text">
          <p className="paragraphs">
            Here at {title}, Data is reality. If you face it, you can understand it. Then, you can do something about it.<br /><br />

            Many companies search for a purpose. {title} was born with one: to change the world for the better.<br /><br />
            It’s there in our products, which started a revolution in financial markets that reverberates to this day.<br /><br />
            It’s felt by our people, who we invest in through every stage of their careers. And it’s proven by our actions,
            which harness the resources, skills and profits of our company to transform lives around the world through the power of data.<br /><br />
            Using the power of technology, we connect the world’s decision makers to accurate information on the financial markets –
            and help them make faster, smarter decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
