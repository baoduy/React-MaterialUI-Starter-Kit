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

import Loader from '../views/loaders';

const DashboardPage = Loader(() => import('../views/Dashboard/Dashboard.jsx'));

const UserListing = Loader(() =>
  import('../views/UserProfile/UserListing.jsx')
);

const TableList = Loader(() => import('../views/TableList/TableList.jsx'));

const Typography = Loader(() => import('../views/Typography/Typography.jsx'));

const Icons = Loader(() => import('../views/Icons/Icons.jsx'));

const Maps = Loader(() => import('../views/Maps/Maps.jsx'));

const NotificationsPage = Loader(() =>
  import('../views/Notifications/Notifications.jsx')
);

const MessageBoxPage = Loader(() => import('../views/MessageBox'));

const UpgradeToPro = Loader(() =>
  import('../views/UpgradeToPro/UpgradeToPro.jsx')
);

export default [
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
