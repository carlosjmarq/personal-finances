import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar/Sidebar';
import { drawerItems } from '@renderer/constants/drawerItems';
import { Header } from './Header/Header';
import { trimString } from '@renderer/utils/trimString';
import { MenuIcon } from 'lucide-react';

export const MainLayout: FC = () => {
  // const { user } = useUser();
  const [expanded, setExpanded] = useState(false);
  const items = drawerItems;

  return (
    <section className="w-screen h-screen">
      <Header userAvatar={'Carlos J Marquez'} username={trimString('Carlos J Marquez', 12)}>
        <MenuIcon
          className="cursor-pointer "
          onClick={() => setExpanded(!expanded)}
          fill="#40434C"
        />
      </Header>
      <section className="flex flex-row h-full pl-0 overflow-hidden relative">
        <Sidebar drawerItems={items} expanded={expanded} setExpanded={setExpanded} />
        <section className="pt-2 px-0 w-full overflow-y-visible overflow-x-hidden">
          <div className="px-4 md:px-4 pt-2">
            <Outlet />
          </div>
        </section>
      </section>
    </section>
  );
};
