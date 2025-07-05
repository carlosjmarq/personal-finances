import React, { useState, type ReactNode } from "react";
import TooltipPortal from "@/components/Tooltip/TooltipPortal";
import { TooltipContext } from "./TooltipContext";

interface TooltipProviderProps {
  children: ReactNode;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({
  children,
}) => {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [enableCopy, setEnableCopy] = useState<boolean>(false);
  const [hideTimeout, setHideTimeout] = useState<number | null>(null);

  const showTooltip = (
    content: string,
    position: { x: number; y: number },
    enableCopy: boolean
  ) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setTooltipContent(content);
    setTooltipPosition(position);
    setEnableCopy(enableCopy);
    setVisible(true);
  };

  const hideTooltip = () => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 200);
    setHideTimeout(timeout);
  };

  const cancelHideTooltip = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
  };

  return (
    <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
      {children}
      <TooltipPortal
        content={tooltipContent}
        position={tooltipPosition}
        visible={visible}
        enableCopy={enableCopy}
        onMouseEnter={cancelHideTooltip}
        onMouseLeave={hideTooltip}
      />
    </TooltipContext.Provider>
  );
};
