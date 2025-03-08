import { CalendarIcon } from '../icons/calendarIcon';
import { DashboardsIcon } from '../icons/dashboardsIcon';
import { DocumentsIcon } from '../icons/documentsIcon';
import { HomeIcon } from '../icons/homeIcon';
import { RequestsIcon } from '../icons/requestsIcon';
import { TasksIcon } from '../icons/tasksIcon';
import { DrawerIconType } from '../types/SidebarTypes';

export const drawerItems: Array<DrawerIconType> = [
  {
    name: 'home',
    label: 'Inicio',
    icon: <HomeIcon />,
    href: '/',
  },
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardsIcon />,
    href: '/dashboard',
  },
];

export const generalItems = ['home', 'dashboard', 'documents', 'administration'];
export const SIA1Items = ['sia1', 'ira_calculus', 'fiscal_units', 'compromises'];
export const SIA2Items = ['sia2', 'requests', 'tasks', 'calendar', 'monitoring'];
