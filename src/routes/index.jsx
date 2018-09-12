//import Dashboard from '../layouts/Dashboard.jsx';
import Loadable from 'react-loadable';
import loading from '../views/loaders/ComponentLoader';

const Dashboard = Loadable({
  loader: () => import('../layouts/Dashboard.jsx'),
  loading
});

const indexRoutes = [{ path: '/', component: Dashboard }];

export default indexRoutes;
