import { Footer } from 'components/Footer';
import Sitebar from 'components/Sitebar/Sitebar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <div className="layout container">
      <div className="layout__row">
        <Sitebar />
        <main className="layout__main">
          <Outlet />
        </main>
      </div>
      <ToastContainer position="top-center" />
      <Footer />
    </div>
  );
};

export default Layout;
