import { cn } from '@renderer/utils/twMerge';
import { ClassNameValue } from 'tailwind-merge';

export const EmbossedButton: React.FC<{
  children: React.ReactNode;
  className?: ClassNameValue;
}> = ({ children, className }) => {
  return (
    <button
      className={cn(
        'border-2 border-black rounded-lg p-1 transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[1px] shadow-button hover:shadow-button-hover bg-white active:translate-x-[2px] active:translate-y-[2px]',
        className,
      )}
    >
      {children}
    </button>
  );
};
