import { DrawerIconType } from '@renderer/types/SidebarTypes';
import { ArrowLeftRight, HandCoins, LayoutDashboard, PiggyBank, Wallet } from 'lucide-react';

export const drawerItems: Array<DrawerIconType> = [
  {
    icon: <LayoutDashboard className="w-6 h-6 stroke-black" />,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: <Wallet className="w-6 h-6 stroke-black" />,
    label: 'Cuentas',
    href: '/accounts',
  },
  {
    icon: <ArrowLeftRight className="w-6 h-6 stroke-black" />,
    label: 'Transacciones',
    href: '/transactions',
  },
  {
    icon: <PiggyBank className="w-6 h-6 stroke-black" />,
    label: 'Ahorros',
    href: '/savings',
  },
  {
    icon: <HandCoins className="w-6 h-6 stroke-black" />,
    label: 'Inversiones',
    href: '/investments',
  },
];

export const generalItems = ['home', 'dashboard', 'documents', 'administration'];
export const SIA1Items = ['sia1', 'ira_calculus', 'fiscal_units', 'compromises'];
export const SIA2Items = ['sia2', 'requests', 'tasks', 'calendar', 'monitoring'];
