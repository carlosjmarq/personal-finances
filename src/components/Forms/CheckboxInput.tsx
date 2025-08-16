import React from "react";
import { useField } from "formik";

interface CheckboxInputProps {
  name: string;
  label: string;
  className?: string;
  description?: string;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({ 
  name, 
  label, 
  className = "",
  description
}) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  
  return (
    <div className="mb-4">
      <div className="flex items-start">
        <input
          {...field}
          type="checkbox"
          id={name}
          checked={field.value}
          className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 ${className}`}
        />
        <div className="ml-3">
          <label 
            htmlFor={name}
            className="text-sm font-medium text-gray-700 cursor-pointer"
          >
            {label}
          </label>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
      </div>
      {meta.touched && meta.error && (
        <div className="mt-1 text-sm text-red-600">{meta.error}</div>
      )}
    </div>
  );
};
