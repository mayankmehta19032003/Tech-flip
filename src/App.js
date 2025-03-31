import { useState } from 'react';
import './App.css';

const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"},
]

function App() {

  const [cards,setCards] = useState([]);
  const [turns,setTurns] = useState(0);

  //shuffle card
  const shuffleCards =()=>{
    const shuffleCards = [...cardImages,...cardImages]
    .sort(()=> Math.random() - 0.5)     //The .sort() method works by comparing two elements at a time //Negative → Swap positions Positive → Keep the order Zero → No change
    .map((card)=> ({...card, id: Math.random()})) // it will id to every object and copy its all property for now we have only one which is src.

    setCards(shuffleCards);
    setTurns(0);
  }

  console.log(cards,turns);
  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
