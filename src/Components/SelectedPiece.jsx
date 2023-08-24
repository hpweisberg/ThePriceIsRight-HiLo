/* eslint-disable react/prop-types */
const SelectedPiece = ({ gamePiece, handleItemDeselection, message }) => {
  return (
    <div
      className='flex flex-col items-center'
      onClick={(message === 'You won!' || message === 'You lost!') ? null : () => handleItemDeselection(gamePiece)}
    >
      <img
        src={gamePiece.image}
        alt={gamePiece.name}
        className='w-20 h-auto'
      />
      <p>{gamePiece.name}</p>
      {message ?
        <p>${gamePiece.price}</p>
        :
        ''
      }
    </div>
  );
}

export default SelectedPiece;