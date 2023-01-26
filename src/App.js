import './App.css';
import React, {useState} from 'react'


function App() {

  let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

  const [fight, setFight] = useState("vs")

  let emojiOne = Math.floor(Math.random() * fighters.length)
  let emojiTwo = Math.floor(Math.random() * fighters.length)

  function fightStage () {
    setFight(prevFight => prevFight =
      fighters[emojiOne] + " vs " + fighters[emojiTwo])
  }

  function fightBtn () {
    fightStage()
  }

  return (
    <div className="App">
        <h1>Emoji<br />Fighter</h1>
        <div id="stage">{fight}</div>
        <button id="fightButton" onClick = {fightBtn}>Pick Fighters!</button> 
    </div>
  );
}

export default App;
