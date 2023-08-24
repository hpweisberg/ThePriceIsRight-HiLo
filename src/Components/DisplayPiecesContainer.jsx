/* eslint-disable react/prop-types */
import DisplayPieces from "./DisplayPieces";

const shuffleArray = (array) => {
  return array.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
};


const DisplayPiecesContainer = ({ gamePieces, handleItemSelection, selectedItems, message }) => {
  const shuffledGamePieces = shuffleArray(gamePieces);



  return (
    <div className="bg-slate-800/30 rounded-lg shadow-lg flex justify-around text-center items-center w-[80vw] h-[25vh]">
      {shuffledGamePieces.map((gamePiece, index) => {
        return (
          <DisplayPieces
            gamePiece={gamePiece}
            key={index}
            handleItemSelection={handleItemSelection}
            selectedItems={selectedItems}
            message={message}
          />
        )
      })}
    </div>
  );
}

export default DisplayPiecesContainer;