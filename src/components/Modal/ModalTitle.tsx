import { ReactNode } from "react";

interface ModalTitleProps {
  children: ReactNode;
}


export const ModalTitle = ({ children }: ModalTitleProps) => {
  return (
    <div className="px-6 py-4 text-lg font-semibold border-b border-gray-200">
      {children}
    </div>
  );
}
