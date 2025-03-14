import React from 'react'
import Modal from 'react-modal';

const ModalPost = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    
    function openModal() {
      setModalIsOpen(true);
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2>Modal Title</h2>
          <button onClick={closeModal}>Close</button>
          <div>Modal Content</div>
        </Modal>
      </div>
    );
}

export default ModalPost