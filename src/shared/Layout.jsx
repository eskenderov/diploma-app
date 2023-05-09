import { Footer } from 'components/Footer';
import Sitebar from 'components/Sitebar/Sitebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout container">
      <div className="layout__row">
        <Sitebar />
        <main className="layout__main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
