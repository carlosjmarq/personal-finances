import { FC } from 'react';
import { Modal } from './Modal';
import { useModal } from '../../hooks/useModal';
import { DELETE_DASHBOARD } from '../../constants/ModalTypes';

const ModalOrchestrator: FC = () => {
  const { closeModal, modalType, isOpen, modalConfig } = useModal();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const renderModalContent = () => {
    switch (modalType) {
      case DELETE_DASHBOARD:
        return <h1>DELETE DASHBOARD</h1>;

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <Modal
      title={modalConfig.title}
      subtitle={modalConfig.subtitle}
      description={modalConfig.description}
      className={modalConfig.dialogClassName}
      titleContainerClassName={modalConfig.titleContainerClassName}
      showModal={isOpen}
      setShowModal={closeModal}
      customHeader={modalConfig.customHeader}
    >
      {renderModalContent()}
    </Modal>
  );
};

export default ModalOrchestrator;
