// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    url: '/',
    icon: icons.DashboardOutlined,
    breadcrumbs: false
  },
  {
    id: 'users',
    title: 'Users',
    type: 'item',
    url: '/users',
    icon: icons.DashboardOutlined,
    breadcrumbs: false
  }
];

export default dashboard;
