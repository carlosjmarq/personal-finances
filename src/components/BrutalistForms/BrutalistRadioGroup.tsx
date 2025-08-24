import React from "react";
import type { BrutalistRadioGroupProps } from "@/types/BrutalistFormTypes";

export const BrutalistRadioGroup: React.FC<BrutalistRadioGroupProps> = ({
  label,
  required,
  icon,
  className = "",
  labelClassName = "",
  name,
  options,
  value,
  onChange,
  direction = "horizontal",
}) => {
  const radioClass =
    "w-6 h-6 border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] checked:bg-cyan-400 focus:outline-none appearance-none relative";

  const handleChange = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className={className}>
      {label && (
        <label
          className={`block text-lg font-black uppercase mb-4 ${
            icon ? "flex items-center gap-2" : ""
          } ${labelClassName}`}
        >
          {icon}
          {label}
          {required && "*"}
        </label>
      )}
      <div
        className={`flex ${
          direction === "horizontal" ? "flex-wrap gap-6" : "flex-col gap-4"
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => handleChange(option.value)}
              disabled={option.disabled}
              className={radioClass}
              required={required}
            />
            <span className="text-lg font-black uppercase">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

BrutalistRadioGroup.displayName = "BrutalistRadioGroup";
