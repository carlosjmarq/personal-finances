import { type ComponentProps, type ReactNode } from "react";

export type ModalType =
  | "DELETE_DASHBOARD"
  | "CHART_SELECTOR"
  | "DELIVERABLES"
  | "ADVANCE_FILTERS"
  | "UPDATE_VALUES_ACTION"
  | "COMPARISON_BY_PARAMETERS_MODAL_CONTENT"
  | "REPORTABLE_COMPROMISES_MODAL_CONTENT"
  | "SUMMARY_COMPROMISE_MODAL_CONTENT"
  | "PERFORMANCE_EVALUATION_MODAL_CONTENT"
  | null;

export type ModalConfig = {
  title: string;
  subtitle?: string;
  description?: string;
  titleContainerClassName?: ComponentProps<"section">["className"];
  dialogClassName?: ComponentProps<"dialog">["className"];
  customHeader?: ReactNode;
  data?: {
    [key: string]: unknown;
  };
  triggerAction?: (...args: unknown[]) => void;
};

export type ModalState = {
  modalType: ModalType;
  isOpen: boolean;
  modalConfig: ModalConfig;
};
