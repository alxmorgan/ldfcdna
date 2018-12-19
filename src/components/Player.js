import React, { Component } from 'react';
import './App.css';
import '../index.css';
import PlayerImg from '../images/player_desc.jpg';
import WordCloud from 'react-d3-cloud';

const data = [
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;


class Player extends Component {
  render() {
    return (

      <div className="player">
          {/*<div className="wc1">*/}
              {/*<WordCloud*/}
                  {/*data={data}*/}
                  {/*fontSizeMapper={fontSizeMapper}*/}
                  {/*rotate={rotate}*/}
              {/*/>*/}
          {/*</div>*/}

          <div className="playerImage">
            <img src={PlayerImg}/>
          </div>
          {/*<div className="wc2">*/}
              {/*<WordCloud*/}
                  {/*data={data}*/}
                  {/*fontSizeMapper={fontSizeMapper}*/}
                  {/*rotate={rotate}*/}
              {/*/>*/}
          {/*</div>*/}


      </div>

    );
  }
}


export default Player;
