import { Outlet } from "react-router-dom";
import NavbarStudent from "../../components/navbar/NavbarStudent";

import Footer from "../../components/footer/Footer";
function Layout() {
  
  return (
    <div className="h-screen w-screen">
      <NavbarStudent />
      
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
