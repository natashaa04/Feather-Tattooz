import "./styles.css"
import { Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Gallery from "./routes/Gallery";
import Service from "./routes/Service";
import Contact from "./routes/Contact";


export default function App(){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      
      
    </div>
  )
}