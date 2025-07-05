import React, { type FC, useRef, useState } from "react";
import { MenuIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Menu } from "./Menu";
import { menuRegistry } from "@/utils/menuRegistry";
import { useDetectClickOutside } from "@/hooks/useDetectClickOutside";

export type MenuOption = { label: string; icon: string; action: string };

export const DropdownMenu: FC<{
  handleAction: (actionName: string) => void;
  menuOptions: Array<MenuOption>;
  menuCustomClasses?: React.ComponentProps<"menu">["className"];
  menuIcon?: string;
}> = ({ handleAction, menuOptions, menuCustomClasses, menuIcon = null }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuId = useRef<string>(uuidv4()).current;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeOtherMenus = () => {
    Object.values(menuRegistry).forEach((menu) => {
      if (menu.id !== menuId) {
        menu.setShowMenu(false);
      }
    });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleToggleMenu = () => {
    const newShowMenu = !showMenu;
    setShowMenu(newShowMenu);

    if (newShowMenu) {
      closeOtherMenus();
    }
  };

  const dropdownMenuRef = useDetectClickOutside<HTMLDivElement>({
    onTriggered: () => {
      setShowMenu(false);
    },
    menuId,
    setShowMenu,
  });

  return (
    <div ref={dropdownMenuRef}>
      <MenuIcon
        onClick={(e) => {
          e.stopPropagation();
          handleToggleMenu();
        }}
        className="pointer cursor-pointer"
      />
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        handleAction={handleAction}
        menuOptions={menuOptions}
        menuCustomClasses={menuCustomClasses}
      />
    </div>
  );
};
