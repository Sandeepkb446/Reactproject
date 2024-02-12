import React from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <Navbar />
      <React.Fragment>
        {children}
      </React.Fragment>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;