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
import Respect from '../images/respect.jpg';


class Main extends Component {
  render() {
    return (

        <div className="mainOverall">
            <div className="mainImage">
                <img src={Respect}/>
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

export default Main;
