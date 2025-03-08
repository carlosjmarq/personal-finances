import { MenuIcon, X } from 'lucide-react';
import { cn } from '@renderer/utils/twMerge';
import { ComponentProps, FC, ReactNode, SetStateAction, useRef } from 'react';
import { DrawerIconType } from '@renderer/types/SidebarTypes';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDetectClickOutside } from '@renderer/hooks/useDetectClickOutside';

interface SidebarProps {
  expanded: boolean;
  setExpanded: (val: SetStateAction<boolean>) => void;
  drawerItems: Array<DrawerIconType>;
}

const LinkWrapper: FC<{
  isInternal: boolean;
  href: string;
  children: ReactNode;
  className: ComponentProps<'a'>['className'];
}> = ({ children, isInternal, href, className }) => {
  return (
    <>
      {isInternal ? (
        <Link className={className} to={href}>
          {children}
        </Link>
      ) : (
        <a className={className} href={href}>
          {children}
        </a>
      )}
    </>
  );
};

export const Sidebar: FC<SidebarProps> = ({ expanded, setExpanded, drawerItems }) => {
  const sidebarId = useRef<string>(uuidv4()).current;
  const sidebarRef = useDetectClickOutside({
    onTriggered: () => {
      setExpanded(false);
    },
    menuId: sidebarId,
    setShowMenu: setExpanded,
  });
  return (
    <aside
      className={cn(
        'absolute lg:right-0 lg:left-0 pl-4 z-[60] bg-white lg:bg-transparent lg:relative border-r-[1px] border-gray-300 h-full lg:transition-all duration-200 overflow-visible overflow-y-auto pr-10',
        expanded
          ? 'w-screen left-0 lg:w-64 opacity-100 select-none pointer-events-auto'
          : '-left-20 w-64 opacity-0 select-none pointer-events-none lg:pointer-events-auto lg:opacity-100 lg:w-12',
      )}
      ref={sidebarRef}
    >
      {!expanded ? (
        <MenuIcon
          className="mr-auto lg:mr-0 mt-4 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        />
      ) : (
        <X className="mr-auto lg:mr-0 mt-4 cursor-pointer" onClick={() => setExpanded(!expanded)} />
      )}

      <ul className="list-none flex flex-col items-start gap-y-2 mt-4 overflow-visible">
        {drawerItems.map((dI, index) => (
          <>
            {!dI.hidden && (
              <li key={index} className={cn('cursor-pointer w-fit h-8', dI?.className)}>
                <LinkWrapper
                  href={dI.href || '/'}
                  isInternal
                  className={'flex items-center gap-x-1.5 '}
                >
                  {dI.icon}
                  <span
                    className={cn(
                      'transition-all duration-100 whitespace-nowrap',
                      expanded ? 'opacity-100' : 'opacity-0 pointer-events-none',
                      !dI?.separator && !expanded
                        ? 'transform translate-x-6 lg:-translate-x-6'
                        : '',
                    )}
                  >
                    {dI.label}
                  </span>
                </LinkWrapper>
              </li>
            )}
          </>
        ))}
      </ul>
    </aside>
  );
};
