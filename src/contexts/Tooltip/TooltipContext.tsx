import { createContext } from "react";
import { type TooltipContextType } from "@/types/tooltipTypes";

export const TooltipContext = createContext<TooltipContextType | undefined>(
  undefined
);
