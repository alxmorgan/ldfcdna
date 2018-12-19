import React, { Component } from 'react';
import './App.css';
import Player from './PlayerCard';
import '../index.css';
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";

import PlayerImg from '../images/photo.png';
import Coach from '../images/coach.png';
import Parent from '../images/parent.png';
import LDFC from '../images/LDFC_logo.jpg';
import Main from './Main';
import PlayerLink from './Player';
import ParentLink from './Parent';
import CoachLink from './Coach';

class App extends Component {
  render() {
    return (

      <div className="App">
          <div className="title">
              <div className="ldfcimg">
                <img src={LDFC}/>
              </div>
              <div className="shadow" id="logo1">
                  Lough Derg FC - Our DNA
              </div>
          </div>

          <div className="content">
              <Route exact path="/" component={Main} />
              <Route path="/player" component={PlayerLink} />
              <Route path="/parent" component={ParentLink} />
              <Route path="/coach" component={CoachLink} />
          </div>





      </div>
    );
  }
}

export default App;
