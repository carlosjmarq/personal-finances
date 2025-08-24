import React, { forwardRef } from "react";
import type { BrutalistColorInputProps } from "@/types/BrutalistFormTypes";

export const BrutalistColorInput = forwardRef<
  HTMLInputElement,
  BrutalistColorInputProps
>(
  (
    {
      label,
      required,
      icon,
      className = "",
      labelClassName = "",
      showPreview = false,
      value,
      ...props
    },
    ref
  ) => {
    const colorInputClass =
      "w-20 h-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white cursor-pointer focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] transition-all";

    const previewClass =
      "flex-1 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white font-bold text-lg uppercase";

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
        {showPreview ? (
          <div className="flex items-center gap-4">
            <input
              ref={ref}
              type="color"
              className={colorInputClass}
              required={required}
              value={value}
              {...props}
            />
            <div className={previewClass}>{value || "#000000"}</div>
          </div>
        ) : (
          <input
            ref={ref}
            type="color"
            className={colorInputClass}
            required={required}
            value={value}
            {...props}
          />
        )}
      </div>
    );
  }
);

BrutalistColorInput.displayName = "BrutalistColorInput";
