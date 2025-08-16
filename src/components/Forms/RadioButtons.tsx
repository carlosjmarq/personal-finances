import React from "react";
import { useField } from "formik";

interface Option {
  value: string;
  label: string;
}

interface RadioButtonsProps {
  name: string;
  label: string;
  options: Option[];
  className?: string;
  direction?: "horizontal" | "vertical";
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({ 
  name, 
  label, 
  options,
  className = "",
  direction = "vertical"
}) => {
  const [field, meta] = useField(name);
  
  const containerClasses = direction === "horizontal" 
    ? "flex flex-wrap gap-4" 
    : "space-y-2";
  
  return (
    <div className="mb-4">
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </legend>
        <div className={`${containerClasses} ${className}`}>
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                {...field}
                type="radio"
                id={`${name}-${option.value}`}
                value={option.value}
                checked={field.value === option.value}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label 
                htmlFor={`${name}-${option.value}`}
                className="ml-2 text-sm text-gray-700 cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      {meta.touched && meta.error && (
        <div className="mt-1 text-sm text-red-600">{meta.error}</div>
      )}
    </div>
  );
};
