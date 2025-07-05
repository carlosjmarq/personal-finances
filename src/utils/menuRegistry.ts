type MenuRegistryItem = {
  id: string;
  setShowMenu: (show: boolean) => void;
};

export const menuRegistry: Record<string, MenuRegistryItem> = {};
