import { ReactNode } from "react";
import { ModalContent } from "./ModalContent.tsx";
import { ModalFooter } from "./ModalFooter.tsx";
import { ModalTitle } from "./ModalTitle.tsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({
  isOpen, 
  onClose,
  children
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

