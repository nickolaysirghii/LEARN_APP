import React from 'react';
import "./deck.css";
import Git from "../../components/Git/Git";
import English from "../../components/English/English"

const Deck = () => {
  return (
    <div className='deckcontainer'>
        <div className=' speaner'>
           <div className='frontDeck'>FRONT</div>
           <div className='backDeck'>BACK</div>
           <div className='leftDeck'>LEFT</div>
           <div className='rightDeck'>RIGHT</div>
           <div className='topDeck'>TOP</div>
           <div className='bottomDeck'>BOTTOM</div>
    </div>
    </div>
  )
}

export default Deck
