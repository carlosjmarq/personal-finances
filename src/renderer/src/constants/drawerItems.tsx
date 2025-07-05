import { DrawerIconType } from '@renderer/types/SidebarTypes';
import { ArrowLeftRight, HandCoins, LayoutDashboard, PiggyBank, Wallet } from 'lucide-react';

export const drawerItems: Array<DrawerIconType> = [
  {
    icon: <LayoutDashboard className="w-6 h-6 stroke-black" />,
    label: 'Dashboard',
    href: '/',
    className: 'bg-mint-200 hover:bg-mint-200',
  },
  {
    icon: <Wallet className="w-6 h-6 stroke-black" />,
    label: 'Cuentas',
    href: '/accounts',
    className: 'bg-pink-200 hover:bg-pink-200',
  },
  {
    icon: <ArrowLeftRight className="w-6 h-6 stroke-black" />,
    label: 'Transacciones',
    href: '/transactions',
    className: 'bg-yellow-200 hover:bg-yellow-200',
  },
  {
    icon: <PiggyBank className="w-6 h-6 stroke-black" />,
    label: 'Ahorros',
    href: '/savings',
    className: 'bg-green-500 hover:bg-green-500',
  },
  {
    icon: <HandCoins className="w-6 h-6 stroke-black" />,
    label: 'Inversiones',
    href: '/investments',
    className: 'bg-purple-500 hover:bg-purple-500',
  },
];

export const generalItems = ['home', 'dashboard', 'documents', 'administration'];
export const SIA1Items = ['sia1', 'ira_calculus', 'fiscal_units', 'compromises'];
export const SIA2Items = ['sia2', 'requests', 'tasks', 'calendar', 'monitoring'];
