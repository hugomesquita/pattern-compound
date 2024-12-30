import { ReactNode } from "react";

interface ModalContentProps {
  children: ReactNode
}

export const ModalContent = ({ children }:ModalContentProps) => {
  return (
    <div className="px-6 py-4 text-lg font-semibold border-b border-gray-200">
      {children}
    </div>
  );
}
