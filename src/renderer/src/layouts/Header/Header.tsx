import { FC, ReactNode } from 'react';
// import { AvatarMenu } from './AvatarMenu';

type HeaderProps = { userAvatar: string | null; username: string; children: ReactNode };

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center gap-x-1 px-4 md:px-4 min-h-12 h-[6.3vh]">
        <section className="flex items-center gap-x-1 h-[3.15vh] cursor-pointer">
          <h1>Cj&apos;s Personal Finances</h1>
        </section>

        {/* <section className="hidden lg:flex">
          <AvatarMenu userAvatar={userAvatar} username={username} />
        </section> */}
        <section className="flex lg:hidden">{children}</section>
      </nav>
    </header>
  );
};
