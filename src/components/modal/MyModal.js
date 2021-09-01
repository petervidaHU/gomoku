import React from 'react';

const MyModal = ({
  displayModal, forCloseModal, confirmModal, targetItem
}) => {

  const divStyle = {
    display: displayModal ? 'block' : 'none'
  };

  function closeModal(e) {
    e.stopPropagation()
    forCloseModal()
  };

  return (
    <div
      className="modal"
      onClick={closeModal}
      style={divStyle} >
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()} >
        <span
          className="close"
          onClick={closeModal}>&times;
       </span>
        <div style={{ color: 'black' }}>
          töröljem?
         {targetItem.id}
          <div>
            {targetItem.name}
          </div>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => confirmModal(targetItem.id)}
        >
          yes
        </button>

        <button
          className="btn btn-secondary"
          onClick={closeModal}
        >
          cancel
        </button>
      </div>
    </div>
  );
}

export default MyModal
