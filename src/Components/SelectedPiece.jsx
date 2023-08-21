/* eslint-disable react/prop-types */
const SelectedPiece = ({ gamePiece, handleItemDeselection }) => {
  return (
    <div
      className='flex flex-col items-center'
      onClick={() => handleItemDeselection(gamePiece)}
    >
      <img
        src={gamePiece.image}
        alt={gamePiece.name}
        className='w-20 h-auto'
      />
      <p>{gamePiece.name}</p>
      <p>${gamePiece.price}</p>
    </div>
  );
}

export default SelectedPiece;