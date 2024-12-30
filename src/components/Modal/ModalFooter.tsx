interface ModalFooterProps {
  onSubmit?: () => void;
  onClose: () => void;
  submitText?: string;
  closeText?: string;
}

export const ModalFooter = ({ 
    onSubmit, 
    onClose, 
    submitText = "Submit", 
    closeText = "Close" 
  }: ModalFooterProps) => {
  return (
    <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-4">
      <button 
        onClick={onClose}
        className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
      >
        {closeText}
      </button>
      {onSubmit && (
      <button
        onClick={onSubmit}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        {submitText}
      </button>
      )}
    </div>
  
  );
}
