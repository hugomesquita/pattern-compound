import { useState } from 'react';
import { Modal } from './components/Modal/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = (): void  => {
    handleCloseModal();
  }

  return (
    <div className="p-6">
      <button 
        onClick={handleOpenModal}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Open Modal
      </button>
      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.Content>
          <p>Conteúdo da modal aqui....</p>
        </Modal.Content>
        <Modal.Footer onClose={handleCloseModal} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
}
