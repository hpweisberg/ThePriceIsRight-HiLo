/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const DisplayPieces = ({ gamePiece, handleItemSelection, selectedItems, message }) => {
  DisplayPieces.propTypes = {
    gamePiece: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  };

  // if the gamePiece is included in the selectedItems, I want to show a blank image.
  const isSelected = selectedItems.some(selectedItem => selectedItem.name === gamePiece.name);

  if (isSelected) {
    return null;
  }



  return (
    <div
      className='flex flex-col items-center cursor-pointer'
      onClick={() => handleItemSelection(gamePiece)}
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

export default DisplayPieces;