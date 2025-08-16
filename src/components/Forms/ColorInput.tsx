import React from "react";
import { useField } from "formik";

interface ColorInputProps {
  name: string;
  label: string;
  className?: string;
  showPreview?: boolean;
}

export const ColorInput: React.FC<ColorInputProps> = ({ 
  name, 
  label, 
  className = "",
  showPreview = true
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
      <div className="flex items-center gap-3">
        <input
          {...field}
          type="color"
          id={name}
          className={`h-10 w-16 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            meta.touched && meta.error ? 'border-red-500' : ''
          } ${className}`}
        />
        {showPreview && (
          <div className="flex items-center gap-2">
            <div 
              className="w-6 h-6 rounded border border-gray-300"
              style={{ backgroundColor: field.value || '#000000' }}
            />
            <span className="text-sm text-gray-600 font-mono">
              {field.value || '#000000'}
            </span>
          </div>
        )}
      </div>
      {meta.touched && meta.error && (
        <div className="mt-1 text-sm text-red-600">{meta.error}</div>
      )}
    </div>
  );
};
