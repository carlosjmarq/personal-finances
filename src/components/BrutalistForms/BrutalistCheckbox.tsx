import React, { forwardRef } from "react";
import type { BrutalistCheckboxProps } from "@/types/BrutalistFormTypes";

export const BrutalistCheckbox = forwardRef<
  HTMLInputElement,
  BrutalistCheckboxProps
>(
  (
    {
      label,
      required,
      icon,
      className = "",
      labelClassName = "",
      description,
      ...props
    },
    ref
  ) => {
    const checkboxClass =
      "w-6 h-6 border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] checked:bg-yellow-400 focus:outline-none appearance-none relative";

    return (
      <div className={className}>
        <label
          className={`flex items-center gap-3 cursor-pointer ${labelClassName}`}
        >
          <input
            ref={ref}
            type="checkbox"
            className={checkboxClass}
            required={required}
            {...props}
          />
          <div>
            {label && (
              <span
                className={`text-lg font-black uppercase ${
                  icon ? "flex items-center gap-2" : ""
                }`}
              >
                {icon}
                {label}
                {required && "*"}
              </span>
            )}
            {description && (
              <div className="text-sm font-bold text-gray-700 uppercase mt-1">
                {description}
              </div>
            )}
          </div>
        </label>
      </div>
    );
  }
);

BrutalistCheckbox.displayName = "BrutalistCheckbox";
