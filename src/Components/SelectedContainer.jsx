/* eslint-disable react/prop-types */
import SelectedPiece from "./SelectedPiece";

const SelectedContainer = ({ selectedItems, handleItemDeselection, message }) => {
  return (
    <div className="bg-slate-800/30 rounded-lg shadow-lg flex justify-around text-center items-center w-[40vw] h-[20vh]">
      {selectedItems?.map((item, index) => {
        return (
          <SelectedPiece
            gamePiece={item}
            key={index}
            handleItemDeselection={handleItemDeselection}
            message={message}
          />
        )
      }
      )}
    </div>
  );
}

export default SelectedContainer;