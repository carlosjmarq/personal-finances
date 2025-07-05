import { useContext } from "react";
import { TooltipContext } from "@/contexts/Tooltip/TooltipContext";
import { type TooltipContextType } from "@/types/tooltipTypes";

export const useTooltip = (): TooltipContextType => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
};
