import { type ModalConfig, type ModalType } from "../types/ModalTypes";
import { create } from "zustand";

type ModalState = {
  modalType: ModalType | null;
  isOpen: boolean;
  modalConfig: ModalConfig;
};

type ModalStore = ModalState & {
  setModalStore: (newStore: ModalState) => void;
};

export const useModalsStore = create<ModalStore>((set) => ({
  modalType: null,
  isOpen: false,
  modalConfig: {
    title: "",
    subtitle: "",
    description: "",
    data: {},
    customHeader: null,
  },
  setModalStore: (newStore: Partial<ModalState>): void =>
    set((state: Partial<ModalState>) => ({ ...state, ...newStore })),
}));
