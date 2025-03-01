export interface TooltipContextType {
  showTooltip: (content: string, position: { x: number; y: number }, enableCopy: boolean) => void;
  hideTooltip: () => void;
}
