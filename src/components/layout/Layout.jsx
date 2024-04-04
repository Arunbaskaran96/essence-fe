import { Outlet } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div style={{ marginTop: "10vh" }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
