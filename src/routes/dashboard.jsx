// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import ContentPaste from '@material-ui/icons/Assessment';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import MessageBox from '@material-ui/icons/Message';
import Unarchive from '@material-ui/icons/Unarchive';
// core components/views
//import DashboardPage from '../views/Dashboard/Dashboard.jsx';
//import UserProfile from '../views/UserProfile/UserProfile.jsx';
//import UserListing from '../views/UserProfile/UserListing.jsx';
//import TableList from '../views/TableList/TableList.jsx';
//import Typography from '../views/Typography/Typography.jsx';
//import Icons from '../views/Icons/Icons.jsx';
//import Maps from '../views/Maps/Maps.jsx';
//import NotificationsPage from '../views/Notifications/Notifications.jsx';
//import MessageBoxPage from '../views/MessageBox';
//import UpgradeToPro from '../views/UpgradeToPro/UpgradeToPro.jsx';

import Loadable from 'react-loadable';
import loading from '../views/loaders/ComponentLoader';

const DashboardPage = Loadable({
  loader: () => import('../views/Dashboard/Dashboard.jsx'),
  loading,
  /* develblock:start */
  //Running on DEV environment we will take delay for testing purpose.
  delay: 1000
  /* develblock:end */
});

const UserListing = Loadable({
  loader: () => import('../views/UserProfile/UserListing.jsx'),
  loading
});

const TableList = Loadable({
  loader: () => import('../views/TableList/TableList.jsx'),
  loading
});

const Typography = Loadable({
  loader: () => import('../views/Typography/Typography.jsx'),
  loading
});

const Icons = Loadable({
  loader: () => import('../views/Icons/Icons.jsx'),
  loading
});

const Maps = Loadable({
  loader: () => import('../views/Maps/Maps.jsx'),
  loading
});

const NotificationsPage = Loadable({
  loader: () => import('../views/Notifications/Notifications.jsx'),
  loading
});

const MessageBoxPage = Loadable({
  loader: () => import('../views/MessageBox'),
  loading
});

const UpgradeToPro = Loadable({
  loader: () => import('../views/UpgradeToPro/UpgradeToPro.jsx'),
  loading
});

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: '/users',
    sidebarName: 'User Listing',
    navbarName: 'User Listing',
    icon: Person,
    component: UserListing
  },
  {
    path: '/table',
    sidebarName: 'Table List',
    navbarName: 'Table List',
    icon: ContentPaste,
    component: TableList
  },
  {
    path: '/typography',
    sidebarName: 'Typography',
    navbarName: 'Typography',
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: '/icons',
    sidebarName: 'Icons',
    navbarName: 'Icons',
    icon: BubbleChart,
    component: Icons
  },
  {
    path: '/maps',
    sidebarName: 'Maps',
    navbarName: 'Map',
    icon: LocationOn,
    component: Maps
  },
  {
    path: '/notifications',
    sidebarName: 'Notifications',
    navbarName: 'Notifications',
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: '/messagebox',
    sidebarName: 'Message Box',
    navbarName: 'Message Box',
    icon: MessageBox,
    component: MessageBoxPage
  },
  {
    path: '/upgrade-to-pro',
    sidebarName: 'Upgrade To PRO',
    navbarName: 'Upgrade To PRO',
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' }
];

export default dashboardRoutes;
