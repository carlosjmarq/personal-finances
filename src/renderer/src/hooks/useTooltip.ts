import { useContext } from 'react';
import { TooltipContext } from '@renderer/contexts/Tooltip/TooltipContext';
import { TooltipContextType } from '@renderer/types/tooltipTypes';

export const useTooltip = (): TooltipContextType => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }
  return context;
};
