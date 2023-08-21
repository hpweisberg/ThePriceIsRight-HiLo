/* eslint-disable react/prop-types */
import SelectedPiece from "./SelectedPiece";

const SelectedContainer = ({ selectedItems, handleItemDeselection }) => {
  return (
    <div className="border-2 border-red-500 flex justify-around text-center items-center w-[40vw] h-[30vh]">
      {selectedItems?.map((item, index) => {
        return (
          <SelectedPiece
            gamePiece={item}
            key={index}
            handleItemDeselection={handleItemDeselection}
          />
        )
      }
      )}
    </div>
  );
}

export default SelectedContainer;