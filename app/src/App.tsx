import React from 'react';
import {GuessButton, GuessInput} from "./func";
import {Log, Logger} from "./logger";
import {WU, WORLDLE} from "./logo";
import {COUNTRY_NUM, COUNTRY_IMG, List} from "./countrygen";
import './App.css';
function BlankText() {
  return (
    <>
    <input className="PHold" type='text' readOnly />
    </>
  );
  
}

function Credits() {
  return (
    <><div className="credits">
      <small>Like what you see? Follow me on <a href="https://github.com/PrinceKomali/">Github! <img height="20px" width="20px" src="https://komali.dev/komali2Lurk.png" style={{verticalAlign: "middle"}} /></a></small><br />
      <small>Full credit goes to <a href="https://github.com/teuteuf">teuteuf</a> who created the original <WORLDLE />; images and position data are taken from the <a href="https://github.com/teuteuf/worldle">repo</a></small>
    </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1><WU /></h1>
      
      </div>
      <COUNTRY_IMG /><br />
      <Log /><br />
      <BlankText /><br />
      <BlankText /><br />
      <BlankText /><br />
      <BlankText /><br />
      <BlankText /><br />
      <BlankText /><br />
      <GuessInput /><br />
      <List />
      <GuessButton /><br /><br />
      <Credits />
    </div>
  );
}

export default App;
