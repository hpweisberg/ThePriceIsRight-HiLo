/* eslint-disable react/prop-types */
import DisplayPieces from "./DisplayPieces";


const DisplayPiecesContainer = ({ gamePieces, handleItemSelection, selectedItems, message }) => {


  return (
    <div className="bg-slate-800/30 rounded-lg shadow-lg flex justify-around text-center items-center w-[80vw] h-[25vh]">
      {gamePieces.map((gamePiece, index) => {
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