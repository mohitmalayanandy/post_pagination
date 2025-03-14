import React from 'react';

const Modal = ({ title, body, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">{body}</p>
        </div>
        <div className="text-right">
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;