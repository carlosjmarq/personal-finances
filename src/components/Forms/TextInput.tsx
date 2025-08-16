import React from "react";
import { useField } from "formik";

interface TextInputProps {
  name: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  autoComplete?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ 
  name, 
  label, 
  type = "text",
  placeholder = "",
  className = "",
  autoComplete
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
      <input
        {...field}
        type={type}
        id={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          meta.touched && meta.error ? 'border-red-500' : ''
        } ${className}`}
      />
      {meta.touched && meta.error && (
        <div className="mt-1 text-sm text-red-600">{meta.error}</div>
      )}
    </div>
  );
};
