import { useEffect } from "react";

const Modal = ({ isOpen, modalToggle, children }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={() => modalToggle()}
      >
        <div
          className="bg-white py-[12px] px-0 md:px-6 shadow-lg w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-4 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
