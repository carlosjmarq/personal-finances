import React, { forwardRef } from "react";
import type { BrutalistRangeProps } from "@/types/BrutalistFormTypes";

export const BrutalistRange = forwardRef<HTMLInputElement, BrutalistRangeProps>(
  (
    {
      label,
      required,
      icon,
      className = "",
      labelClassName = "",
      showValue = true,
      value,
      ...props
    },
    ref
  ) => {
    const rangeClass =
      "w-full h-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white appearance-none slider";

    const displayValue = value || props.defaultValue || "0";

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
            {showValue && `: ${displayValue}${props.max === "100" ? "%" : ""}`}
            {required && "*"}
          </label>
        )}
        <input
          ref={ref}
          type="range"
          className={rangeClass}
          required={required}
          value={value}
          {...props}
        />
      </div>
    );
  }
);

BrutalistRange.displayName = "BrutalistRange";
