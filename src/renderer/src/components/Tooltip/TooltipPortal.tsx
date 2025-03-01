import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'sonner';
import { useTooltip } from '@renderer/hooks/useTooltip';
import { useModal } from '@renderer/hooks/useModal';
import { cn } from '@renderer/utils/twMerge';

interface TooltipPortalProps {
  content: string;
  position: { x: number; y: number };
  visible: boolean;
  enableCopy?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TooltipPortal: React.FC<TooltipPortalProps> = ({
  content,
  position,
  visible,
  enableCopy,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [tooltipElement] = useState(() => document.createElement('div'));
  const { isOpen } = useModal();
  const { hideTooltip } = useTooltip();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCopy = async () => {
    try {
      if (enableCopy) {
        await navigator.clipboard.writeText(content);
        toast.success('¡Texto copiado exitosamente!');
      }
    } catch (error) {
      console.error('Copy failed:', error);
      toast.error('Error al copiar el texto');
    } finally {
      hideTooltip();
    }
  };

  useEffect(() => {
    const dialog = isOpen ? document.querySelector('dialog') : null;
    const renderCtx = dialog || document.body;

    renderCtx.appendChild(tooltipElement);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return () => {
      renderCtx.removeChild(tooltipElement);
    };
  }, [isOpen, tooltipElement]);

  if (!visible) {
    return null;
  }

  const tooltip = (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleCopy}
      className={cn(
        'fixed z-50 bg-gray-800 text-white text-sm py-1 px-2 rounded-md pointer-events-none',
        enableCopy && 'cursor-pointer pointer-events-auto max-w-80',
      )}
      style={{
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, 0)',
        ...(enableCopy && {
          userSelect: 'text',
        }),
      }}
      role="tooltip"
    >
      {content}
    </div>
  );

  return ReactDOM.createPortal(tooltip, tooltipElement);
};

export default TooltipPortal;
