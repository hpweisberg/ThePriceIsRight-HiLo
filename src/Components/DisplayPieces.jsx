import PropTypes from 'prop-types';

const DisplayPieces = ({ gamePiece, handleItemSelection }) => {
  DisplayPieces.propTypes = {
    gamePiece: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  };


  return (
    <div 
    className='flex flex-col items-center'
    onClick={() => handleItemSelection(gamePiece)}
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

export default DisplayPieces;