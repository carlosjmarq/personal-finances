import { createContext } from 'react';
import { TooltipContextType } from '../../types/tooltipTypes';

export const TooltipContext = createContext<TooltipContextType | undefined>(undefined);
