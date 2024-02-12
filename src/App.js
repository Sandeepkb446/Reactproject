import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Screen/Homepage";
import About from "./Screen/About";
import Contactus from "./Screen/Contactus";
import Events from "./Screen/Events";
import Bookyourdate from "./Screen/Bookyourdate";
import Gallery from "./Screen/Gallery";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout> <Homepage /> </Layout>} />
          <Route path="/about" element={<Layout> <About /> </Layout>} />
          <Route path="/contactus" element={<Layout> <Contactus /> </Layout>} />
          <Route path="/events" element={<Layout> <Events/> </Layout>}/>
          <Route path="/gallery" element={<Layout> <Gallery/> </Layout>}/>
          <Route path="/bookyourdate" element={<Layout> <Bookyourdate/> </Layout>}/>

         
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;