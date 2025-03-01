import React, { useRef, cloneElement, isValidElement, ReactElement, Attributes } from 'react';
import { cn } from '@renderer/utils/twMerge';
import { useTooltip } from '@renderer/hooks/useTooltip';

interface TooltipProps {
  children: ReactElement | string;
  text: string;
  toLeft?: boolean;
  toRight?: boolean;
  enableCopy?: boolean;
  childrenWidth?: 'w-full';
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  toRight,
  toLeft,
  enableCopy,
  childrenWidth,
}) => {
  const { showTooltip, hideTooltip } = useTooltip();
  const ref = useRef<HTMLElement>(null);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleMouseEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const toRightValue = toRight ? 110 : 0;
      const toLeftValue = toLeft ? -110 : 0;
      const position = {
        x: rect.left + rect.width / 2 + toRightValue + toLeftValue,
        y: rect.bottom + 5,
      };
      showTooltip(text, position, !!enableCopy);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleMouseLeave = () => {
    hideTooltip();
  };

  if (isValidElement(children)) {
    return cloneElement(children, {
      ...(children.props as object),
      className: cn(
        (children.props as { className?: string })?.className ?? '',
        'text-ellipsis overflow-hidden block whitespace-nowrap max-w-[100%]',
        childrenWidth ? childrenWidth : 'w-fit',
      ),
      ref,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleMouseEnter,
      onBlur: handleMouseLeave,
      onClick: (e: MouseEvent) => {
        const elementClick = (children.props as { onClick: (e: MouseEvent) => void })?.onClick;
        if (children.props && elementClick) {
          elementClick(e);
        }
        hideTooltip();
      },
    } as Partial<unknown> & Attributes);
  } else if (typeof children === 'string') {
    return (
      <span
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        onClick={hideTooltip}
        className={cn(
          'text-ellipsis overflow-hidden block whitespace-nowrap max-w-[100%]',
          childrenWidth ? childrenWidth : 'w-fit',
        )}
      >
        {children}
      </span>
    );
  }

  return <>{children}</>;
};
