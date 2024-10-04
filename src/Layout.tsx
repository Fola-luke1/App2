import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Layout = () => {
  return (
    <div>
    
      <Navbar />
      < div className="p-4 font-bold">
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
