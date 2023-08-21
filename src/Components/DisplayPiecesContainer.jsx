/* eslint-disable react/prop-types */
import DisplayPieces from "./DisplayPieces";


const DisplayPiecesContainer = ({ gamePieces, handleItemSelection, selectedItems }) => {


  return (
    <div className="border-2 border-red-500 flex justify-around text-center items-center w-[80vw] h-[30vh]">
      {gamePieces.map((gamePiece, index) => {
        return (
          <DisplayPieces
            gamePiece={gamePiece}
            key={index}
            handleItemSelection={handleItemSelection}
            selectedItems={selectedItems}
          />
        )
      })}
    </div>
  );
}

export default DisplayPiecesContainer;