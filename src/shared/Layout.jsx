import Sitebar from 'components/Sitebar/Sitebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout container">
      <Sitebar />
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
