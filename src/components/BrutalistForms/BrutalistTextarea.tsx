import React, { forwardRef } from "react";
import type { BrutalistTextareaProps } from "@/types/BrutalistFormTypes";

export const BrutalistTextarea = forwardRef<
  HTMLTextAreaElement,
  BrutalistTextareaProps
>(
  (
    { label, required, icon, className = "", labelClassName = "", ...props },
    ref
  ) => {
    const baseTextareaClass =
      "w-full p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white font-bold text-lg focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] focus:border-yellow-500 transition-all resize-none";

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
        <textarea
          ref={ref}
          className={baseTextareaClass}
          required={required}
          {...props}
        />
      </div>
    );
  }
);

BrutalistTextarea.displayName = "BrutalistTextarea";
