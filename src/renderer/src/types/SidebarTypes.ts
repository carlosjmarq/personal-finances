import { ComponentProps, ReactNode } from 'react';

export type DrawerIconType = {
  name?: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  separator?: boolean;
  className?: ComponentProps<'li'>['className'];
  hidden?: boolean;
};
