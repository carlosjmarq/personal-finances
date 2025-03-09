import { cn } from '@renderer/utils/twMerge';
import { ComponentProps, FC, ReactNode } from 'react';
import { DrawerIconType } from '@renderer/types/SidebarTypes';
import { Link, useLocation } from 'react-router-dom';
import { NeoLogo } from '@renderer/components/Logo/NeoLogo';

interface SidebarProps {
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

export const Sidebar: FC<SidebarProps> = ({ drawerItems }) => {
  const currentPath = useLocation().pathname;
  return (
    <aside
      className={cn(
        'px-4 border-r-2 border-black h-full bg-white w-60',
        // 'relative border-r-2 border-black h-full transition-all duration-200',
        // 'pr-10 -left-20 w-64 opacity-0 select-none',
        // 'pointer-events-none lg:pointer-events-auto opacity-100 w-12',
      )}
    >
      <section className="flex items-center justify-center gap-x-3 mt-4 mb-6">
        <NeoLogo className="w-6 h-6 " />
        <h1 className="text-2xl/[0.9] font-semibold ">Neo Money</h1>
      </section>
      <ul className="list-none flex flex-col items-start gap-y-3 mt-4 overflow-visible">
        {drawerItems.map((dI, index) => (
          <>
            {!dI.hidden && (
              <li key={index} className={cn('cursor-pointer w-full h-8', dI?.className)}>
                <LinkWrapper
                  href={dI.href || '/'}
                  isInternal
                  className={cn(
                    'flex items-center gap-x-1.5 rounded-md px-2 py-1 transition-all',
                    currentPath === dI.href
                      ? 'border-2 border-black bg-mint w-full'
                      : `${index % 2 === 0 ? ' hover:rotate-1' : 'hover:-rotate-1'} hover:border-2 hover:border-black hover:bg-mint`,
                  )}
                >
                  {dI.icon}
                  <span
                    className={cn(
                      'transition-all duration-100 whitespace-nowrap text-lg/tight font-semibold',
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
