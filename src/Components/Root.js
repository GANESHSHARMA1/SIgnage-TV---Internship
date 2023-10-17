import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
