import Loadable from 'react-loadable';
import loading from './ComponentLoader';

export const Loader = (loader: any) => {
  /* develblock:start */
  //Running on DEV environment we will take delay for testing purpose.
  console.log('create Promis loader for DEV');
  loader = new Promise((resolve, reject) => {
    debugger;
    setTimeout(() => resolve(loader), 5000);
  });
  /* develblock:end */

  return Loadable({
    loader,
    loading
  });
};

export default Loader;
