import { EmbossedButton } from '@renderer/components/Buttons/EmbossedButton';
import { AlignJustify, Bell, Bolt } from 'lucide-react';
import { FC, ReactNode } from 'react';

type HeaderProps = { userAvatar?: string | null; username?: string; children?: ReactNode };

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-white border-b-2 border-black">
      <nav className="flex justify-between items-center gap-x-1 px-4 md:px-4 min-h-12 h-[6.3vh]">
        <section className="flex items-center gap-x-1 bg-mint-dark border-[2px] border-black px-2 py-1 -rotate-2 hover:-rotate-1 transition-all duration-200">
          <h2>Bienvenido Carlos!</h2>
        </section>
        <section className="flex gap-x-2 items-center justify-center">
          <EmbossedButton>
            <Bell className="stroke-black stroke-2 w-5 h-5" />
          </EmbossedButton>
          <EmbossedButton>
            <Bolt className="stroke-black stroke-2 w-5 h-5" />
          </EmbossedButton>
          <EmbossedButton className="flex lg:hidden">
            <AlignJustify className="stroke-black stroke-2 w-5 h-5h" />
          </EmbossedButton>
        </section>
      </nav>
    </header>
  );
};
