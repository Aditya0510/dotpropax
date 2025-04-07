const Modal = ({ isOpen, modalToggle, children }) => {
  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={() => modalToggle()} // Close modal when clicking outside
      >
        {/* Modal Content */}
        <div
          className="bg-white py-[12px] px-6 shadow-lg w-full h-[100vh] "
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <div className="py-4">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
