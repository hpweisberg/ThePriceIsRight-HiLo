import { useState } from "react";

import DisplayPiecesContainer from "./DisplayPiecesContainer";
import SelectedContainer from "./SelectedContainer";

import airFreshenerImg from '../assets/gameItems/airFreshener.png'
import coconutMilkImg from '../assets/gameItems/coconutMilk.png'
import dogTreatsImg from '../assets/gameItems/dogTreats.png'
import hotSauceImg from '../assets/gameItems/hotSauce.png'
import iceCreamImg from '../assets/gameItems/iceCream.png'
import redBullImg from '../assets/gameItems/redBull.png'



const GameContainer = () => {
  const gamePieces = [
    {
      image: airFreshenerImg,
      name: 'Air Freshener',
      price: 1.09
    },
    {
      image: coconutMilkImg,
      name: 'Coconut Milk',
      price: 4.29
    },
    {
      image: dogTreatsImg,
      name: 'Dog Treats',
      price: 13.49
    },
    {
      image: hotSauceImg,
      name: 'Hot Sauce',
      price: 3.79
    },
    {
      image: iceCreamImg,
      name: 'Ice Cream',
      price: 5.99
    },
    {
      image: redBullImg,
      name: 'Red Bull',
      price: 7.99
    },
  ]

  const [selectedItems, setSelectedItems] = useState([]);
  const [message, setMessage] = useState('');

  const handleItemSelection = (item) => {
    if (selectedItems.length < 3 && !selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  }

  const handleItemDeselection = (item) => {
    setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
  }

  const comparePrices = () => {
    const selectedLowestPrice = Math.min(...selectedItems.map(item => item.price));
    const unselectedHighestPrice = Math.max(...gamePieces.filter(item => !selectedItems.includes(item)).map(item => item.price));

    if (selectedLowestPrice > unselectedHighestPrice) {
      setMessage('You won!');
    } else {
      setMessage('You lost!');
    }
  }

  const handleReset = () => {
    setSelectedItems([]);
    setMessage('');
  }

  return (
    <main>
      <div>
        {message && <p>{message}</p>}
        <SelectedContainer
          selectedItems={selectedItems}
          handleItemDeselection={handleItemDeselection}
          comparePrices={comparePrices}
          handleReset={handleReset}
        />
        <p>Display un-selected pieces here</p>
      </div>
      <div>
        <DisplayPiecesContainer
          gamePieces={gamePieces}
          handleItemSelection={handleItemSelection}
          />
      </div>
    </main>
  );
}

export default GameContainer;