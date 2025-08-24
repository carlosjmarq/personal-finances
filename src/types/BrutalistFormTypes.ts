import { ComponentProps, ReactNode } from "react";

// Base interface for all brutalist form components
export interface BrutalistFormBaseProps {
  label?: string;
  required?: boolean;
  icon?: ReactNode;
  className?: string;
  labelClassName?: string;
}

// Text Input Types
export interface BrutalistTextInputProps 
  extends Omit<ComponentProps<"input">, "type">, BrutalistFormBaseProps {
  type?: "text" | "email" | "password" | "tel" | "url" | "search";
}

// Number Input Types  
export interface BrutalistNumberInputProps
  extends ComponentProps<"input">, BrutalistFormBaseProps {
  type: "number";
}

// Date Input Types
export interface BrutalistDateInputProps
  extends ComponentProps<"input">, BrutalistFormBaseProps {
  type: "date" | "datetime-local" | "time" | "month" | "week";
}

// Color Input Types
export interface BrutalistColorInputProps
  extends ComponentProps<"input">, BrutalistFormBaseProps {
  type: "color";
  showPreview?: boolean;
}

// Select Types
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface BrutalistSelectProps
  extends Omit<ComponentProps<"select">, "children">, BrutalistFormBaseProps {
  options: SelectOption[];
  placeholder?: string;
}

// Textarea Types
export interface BrutalistTextareaProps
  extends ComponentProps<"textarea">, BrutalistFormBaseProps {}

// Checkbox Types
export interface BrutalistCheckboxProps
  extends ComponentProps<"input">, BrutalistFormBaseProps {
  type: "checkbox";
  description?: string;
}

// Radio Group Types
export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface BrutalistRadioGroupProps extends BrutalistFormBaseProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  direction?: "horizontal" | "vertical";
}

// Range Input Types
export interface BrutalistRangeProps
  extends ComponentProps<"input">, BrutalistFormBaseProps {
  type: "range";
  showValue?: boolean;
}

// File Upload Types
export interface BrutalistFileUploadProps
  extends Omit<ComponentProps<"input">, "type">, BrutalistFormBaseProps {
  type: "file";
  uploadText?: string;
  dragText?: string;
}
