import React, { forwardRef } from "react";
import { Upload } from "lucide-react";
import type { BrutalistFileUploadProps } from "@/types/BrutalistFormTypes";

export const BrutalistFileUpload = forwardRef<
  HTMLInputElement,
  BrutalistFileUploadProps
>(
  (
    {
      label,
      required,
      icon,
      className = "",
      labelClassName = "",
      uploadText = "CLICK TO UPLOAD FILE",
      dragText = "DROP FILES HERE",
      value,
      ...props
    },
    ref
  ) => {
    const [fileName, setFileName] = React.useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      setFileName(file ? file.name : "");

      // Call the original onChange if provided
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <div className={className}>
        {label && (
          <label
            className={`block text-lg font-black uppercase mb-2 ${
              icon ? "flex items-center gap-2" : ""
            } ${labelClassName}`}
          >
            {icon || <Upload size={20} />}
            {label}
            {required && "*"}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            required={required}
            onChange={handleFileChange}
            {...props}
          />
          <div className="w-full p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white font-bold text-lg text-center border-dashed hover:bg-yellow-100 transition-colors">
            {fileName || uploadText}
          </div>
        </div>
      </div>
    );
  }
);

BrutalistFileUpload.displayName = "BrutalistFileUpload";
