import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar/Sidebar';
import { drawerItems } from '@renderer/constants/drawerItems';
import { Header } from './Header/Header';
import { trimString } from '@renderer/utils/trimString';
import { AlignJustify, MenuIcon } from 'lucide-react';

export const MainLayout: FC = () => {
  // const { user } = useUser();
  const items = drawerItems;

  return (
    <section className="w-screen h-screen flex flex-row border-2 rounded-b-md border-black">
      <Sidebar drawerItems={items} />
      <section className="flex flex-col w-full h-full pl-0 overflow-hidden relative">
        <Header userAvatar={'Carlos J Marquez'} username={trimString('Carlos J Marquez', 12)} />
        <section className="pt-2 px-0 w-full overflow-y-visible overflow-x-hidden">
          <div className="px-4 md:px-4 pt-2">
            <Outlet />
          </div>
        </section>
      </section>
    </section>
  );
};
