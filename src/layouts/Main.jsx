import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* Outlet */}
      <div className="min-h-[calc(100vh-310px)] px-5 lg:px-0 w-full lg:max-w-7xl mx-auto">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Main;
