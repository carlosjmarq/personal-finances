import { type FC, useState } from "react";
import { toast } from "sonner";
import { useDetectClickOutside } from "@/hooks/useDetectClickOutside";
import { Menu } from "@/components/DropdownMenu/Menu";
import { ArrowDownIcon } from "lucide-react";

type AvatarMenuProps = {
  username: string;
  userAvatar: string | null;
};

export const AvatarMenu: FC<AvatarMenuProps> = ({ username, userAvatar }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const isAvatar = typeof userAvatar === "string" && userAvatar.length > 0;
  const dropdownMenuRef = useDetectClickOutside({
    onTriggered: () => {
      setShowMenu(false);
    },
  });

  const handleAction = (action: string): void => {
    if (action === "sign_out") {
      toast.loading("Cerrando sesión, por favor espere...");
    }
  };

  return (
    <section
      onClick={() => setShowMenu(!showMenu)}
      ref={dropdownMenuRef}
      className="flex items-center gap-x-2 relative cursor-pointer"
    >
      <span className="hidden md:inline-block font-semibold">{username}</span>
      <ArrowDownIcon className="w-6 h-6" />

      <figure className="ml-3 w-10 h-10 bg-gray-100 rounded-full">
        {isAvatar && (
          <img className="w-full h-full" src={userAvatar} alt="User avatar" />
        )}
      </figure>
      <Menu
        showMenu={showMenu}
        setShowMenu={(show) => setShowMenu(show)}
        handleAction={handleAction}
        menuOptions={[{ icon: "", label: "Cerrar Sesion", action: "sign_out" }]}
        menuCustomClasses="absolute top-12 right-0 md:right-10 z-10"
      />
    </section>
  );
};
