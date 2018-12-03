import React, { Component } from 'react';
import './App.css';
import Player from './PlayerCard';
import '../index.css';

import PlayerImg from '../images/photo.png';
import Coach from '../images/coach.png';
import Parent from '../images/parent.png';
import LDFC from '../images/LDFC-horizontal-banner.jpg';

class App extends Component {
  render() {
    return (

      <div className="App">
          <div className="title">
              <div className="ldfcimg">
                <img src={LDFC}/>
              </div>
              <div className="shadow" id="logo1">
                  Our DNA
              </div>
          </div>

          <div className="cards">
              <Player name="Parent" image={Parent} />
              <Player name="Player" image={PlayerImg} />
              <Player name="Coach" image={Coach} />
          </div>


      </div>
    );
  }
}

export default App;
