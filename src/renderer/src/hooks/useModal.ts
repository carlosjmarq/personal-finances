import { ModalConfig, ModalType } from '@renderer/types/ModalTypes';
import { useModalsStore } from '@renderer/stores/modalsStore';

// TODO migrar a Zustand
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useModal = () => {
  const { isOpen, modalConfig, modalType, setModalStore } = useModalsStore();
  const html = document.getElementsByTagName('html')[0];
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openModal = (type: ModalType, config: ModalConfig) => {
    setModalStore({
      modalType: type,
      isOpen: true,
      modalConfig: config,
    });

    if (html) {
      html.style.overflowY = 'hidden';
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeModal = () => {
    setModalStore({
      modalConfig,
      modalType,
      isOpen: false,
    });

    if (html) {
      html.style.overflowY = 'auto';
    }
  };

  return { openModal, closeModal, modalType, isOpen, modalConfig };
};
