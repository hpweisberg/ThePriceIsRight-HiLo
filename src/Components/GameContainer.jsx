import { useEffect, useState } from "react";

import DisplayPiecesContainer from "./DisplayPiecesContainer";
import SelectedContainer from "./SelectedContainer";
import ConfettiEffect from "./ConfettiEffect";



import airFreshenerImg from '../../public/gameItems/airFreshener.png';
import coconutMilkImg from '../../public/gameItems/coconutMilk.png';
import dogTreatsImg from '../../public/gameItems/dogTreats.png';
import hotSauceImg from '../../public/gameItems/hotSauce.png';
import iceCreamImg from '../../public/gameItems/iceCream.png';
import redBullImg from '../../public/gameItems/redBull.png';



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
    }
  ]



















  const [selectedItems, setSelectedItems] = useState([]);
  const [message, setMessage] = useState('');

  const handleItemSelection = (item) => {
    if (selectedItems.length < 3 && !selectedItems.some(selectedItem => selectedItem.name === item.name)) {
      setSelectedItems([...selectedItems, item]);
    }
  }

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems])

  const handleItemDeselection = (item) => {
    setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
  }






  const comparePrices = () => {
    if (selectedItems.length < 3) {
      setMessage('You need to select 3 items to compare prices!');
    } else {

      const selectedLowestPrice = Math.min(...selectedItems.map(item => item.price));
      const remainingGamePieces = gamePieces.filter(item =>
        !selectedItems.some(selectedItem => selectedItem.name === item.name)
      );
      const unselectedHighestPrice = Math.max(...remainingGamePieces.map(item => item.price));

      if (selectedLowestPrice > unselectedHighestPrice) {
        setMessage('You won!');
      } else {
        setMessage('You lost!');
      }
    }
  }

  const handleReset = () => {
    setSelectedItems([]);
    setMessage('');
  }

  return (
    <main className="flex flex-col items-center gap-10">
      {message === 'You won!' ? <ConfettiEffect /> : ''}
      <div className="flex justify-center items-center m-4 ">
        <div className="w-1/5 mr-20 text-center">
          {message ?
            <p className={`p-2 hover:transition-colors shadow-md rounded-lg ${message === 'You won!' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {message}
            </p>
            :
            ''
          }
        </div>
        <SelectedContainer
          selectedItems={selectedItems}
          handleItemDeselection={handleItemDeselection}
          handleReset={handleReset}
          message={message}
        />
        <div className="w-1/5 ml-20">
          {(message === 'You won!' || message === 'You lost!') ? <button className="bg-blue-500 text-white p-2 h-20 hover:bg-blue-600 shadow-md rounded-lg transition-colors"
          onClick={handleReset}>Reset</button> 
          : 
          <button className="bg-blue-500 text-white p-2 h-20 hover:bg-blue-600 shadow-md rounded-lg transition-colors"
          onClick={comparePrices}>Compare Prices</button> 
          
          }


        </div>







      </div>
      <div>
        <DisplayPiecesContainer
          gamePieces={gamePieces}
          handleItemSelection={handleItemSelection}
          selectedItems={selectedItems}
          message={message}
        />
      </div>
    </main>
  );
}

export default GameContainer;