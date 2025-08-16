import React from "react";
import { useField } from "formik";

interface TextareaInputProps {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  cols?: number;
}

export const TextareaInput: React.FC<TextareaInputProps> = ({ 
  name, 
  label, 
  placeholder = "",
  className = "",
  rows = 4,
  cols
}) => {
  const [field, meta] = useField(name);
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <textarea
        {...field}
        id={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${
          meta.touched && meta.error ? 'border-red-500' : ''
        } ${className}`}
      />
      {meta.touched && meta.error && (
        <div className="mt-1 text-sm text-red-600">{meta.error}</div>
      )}
    </div>
  );
};
