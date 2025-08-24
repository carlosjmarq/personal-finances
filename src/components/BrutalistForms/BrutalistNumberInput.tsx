import type { BrutalistNumberInputProps } from "@/types/BrutalistFormTypes";
import React, { forwardRef } from "react";

export const BrutalistNumberInput = forwardRef<
  HTMLInputElement,
  BrutalistNumberInputProps
>(
  (
    { label, required, icon, className = "", labelClassName = "", ...props },
    ref
  ) => {
    const baseInputClass =
      "w-full p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white font-bold text-lg focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(255,0,255,1)] focus:border-magenta-500 transition-all";

    return (
      <div className={className}>
        {label && (
          <label
            className={`block text-lg font-black uppercase mb-2 ${
              icon ? "flex items-center gap-2" : ""
            } ${labelClassName}`}
          >
            {icon}
            {label}
            {required && "*"}
          </label>
        )}
        <input
          ref={ref}
          type="number"
          className={baseInputClass}
          required={required}
          {...props}
        />
      </div>
    );
  }
);

BrutalistNumberInput.displayName = "BrutalistNumberInput";
