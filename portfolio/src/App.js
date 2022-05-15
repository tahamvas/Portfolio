import React from "react";
import "./App.css";
import { Route, Routes} from 'react-router-dom';
//Pages 
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";

function App(){
  return (<div className="main">  
  <Nav />
  <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
  </Routes>
  <Footer />
    </div>
  );
}

export default App;