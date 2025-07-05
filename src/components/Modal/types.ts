import { type ModalConfig } from "@/types/ModalTypes";

export type BaseModalContentProps = {
  modalConfig: ModalConfig;
  closeModal?: () => void;
};
