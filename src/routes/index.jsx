//import Dashboard from '../layouts/Dashboard.jsx';
import Loader from '../views/loaders';

const Dashboard = Loader(() => import('../layouts/Dashboard.jsx'));

export default [{ path: '/', component: Dashboard }];
