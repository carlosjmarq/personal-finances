import { cn } from '@renderer/utils/twMerge';
import { ComponentProps, FC, ReactNode, useEffect, useRef } from 'react';
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
  const sideBarRef = useRef<HTMLElement | null>(null);
  const currentPath = useLocation().pathname;

  return (
    <aside
      ref={sideBarRef}
      className={cn(
        'px-4 border-r-2 border-black h-full bg-white transition-all duration-200 delay-200',
        '-translate-x-[64rem] lg:translate-x-0 w-0 absolute lg:relative left-0 lg:w-60 ',
        // 'relative border-r-2 border-black h-full transition-all duration-200',
        // 'pr-10 -left-20 w-64 opacity-0 select-none',
        // 'pointer-events-none lg:pointer-events-auto opacity-100 w-12',
      )}
    >
      <section className="flex items-center justify-center gap-x-3 mt-4 mb-6">
        <NeoLogo className="w-6 h-6" />
        <h1 className="text-2xl/[0.9] font-semibold ">Neo Money</h1>
      </section>
      <ul className="list-none flex flex-col items-start gap-y-3 mt-4 overflow-visible">
        {drawerItems.map((dI, index) => (
          <>
            {!dI.hidden && (
              <li key={index} className={cn('cursor-pointer w-full h-8')}>
                <LinkWrapper
                  href={dI.href || '/'}
                  isInternal
                  className={cn(
                    dI.className,
                    'flex items-center gap-x-1.5 rounded-md px-2 py-1 transition-all border-black w-full',
                    currentPath !== dI.href ? `bg-transparent` : 'border-2',
                    `${index % 2 === 0 ? ' hover:rotate-2' : 'hover:-rotate-2'} hover:border-black hover:border-2`,
                  )}
                >
                  {dI.icon}
                  <span
                    className={cn(
                      'transition-all duration-100 whitespace-nowrap text-md/tight font-semibold',
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
