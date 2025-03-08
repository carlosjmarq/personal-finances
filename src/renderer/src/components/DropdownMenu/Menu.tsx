import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type MenuProps = {
  showMenu: boolean;
  menuOptions: Array<Record<string, string>>;
  handleAction: (actionName: string) => void;
  setShowMenu: (show: boolean) => void;
  menuCustomClasses?: string;
};

export const Menu: FC<MenuProps> = ({
  showMenu,
  menuOptions,
  handleAction,
  setShowMenu,
  menuCustomClasses,
}) => {
  return (
    <menu
      className={twMerge(
        'dropdownMenu shadow-gray-600 shadow-md transition-opacity duration-150 bg-white h-fit	w-fit opacity-0 pointer-events-none rounded-lg overflow-y-auto max-h-60',
        showMenu && 'opacity-100 pointer-events-auto',
        menuCustomClasses,
      )}
    >
      {menuOptions.map((option: Record<string, string>) => (
        <li
          key={option.label}
          onClick={e => {
            e.stopPropagation();
            handleAction(option.action);
            setShowMenu(false);
          }}
          className="text-sm lg:text-xs flex items-center w-full gap-x-2 font-semibold py-2 px-3 md:py-3 md:px-3.5 cursor-pointer hover:bg-gray-100 transition-all duration-150 rounded-lg whitespace-nowrap"
        >
          {option.icon && <img className="w-4 md:w-5" src={option.icon} />} {option.label}
        </li>
      ))}
    </menu>
  );
};
