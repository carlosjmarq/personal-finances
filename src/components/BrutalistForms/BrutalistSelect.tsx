import React, { forwardRef } from "react";
import type { BrutalistSelectProps } from "@/types/BrutalistFormTypes";

export const BrutalistSelect = forwardRef<
  HTMLSelectElement,
  BrutalistSelectProps
>(
  (
    {
      label,
      required,
      icon,
      className = "",
      labelClassName = "",
      options,
      placeholder,
      ...props
    },
    ref
  ) => {
    const baseSelectClass =
      "w-full p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white font-bold text-lg focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] focus:border-yellow-500 transition-all appearance-none";

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
        <select
          ref={ref}
          className={baseSelectClass}
          required={required}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

BrutalistSelect.displayName = "BrutalistSelect";
