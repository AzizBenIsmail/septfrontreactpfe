import { Routes, Route } from "react-router-dom";
import React from 'react'
import Card from "./components/Card/Card"; // Assurez-vous que le chemin est correct
import Carousel from "./components/Carousel/Carousel"; // Assurez-vous que le chemin est correct
import Footer from "./components/footer/Footer"; // Assurez-vous que le chemin est correct
import Navbar from "./components/navbar/Navbar"; // Assurez-vous que le chemin est correct
import NavbarAdmin from "./components/navbar/NavbarAdmin"; // Assurez-vous que le chemin est correct
import Navbar_Visiteur from "./components/navbar/Navbar_Visiteur"; // Assurez-vous que le chemin est correct
import App from "./App"; // Assurez-vous que le chemin est correct

export default function RoutesComponent() {
  return (
    <div>
      <Routes>
        <Route path="/App" element={<App/>}/>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/Carousel" element={<Carousel/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/NavbarAdmin" element={<NavbarAdmin/>}/>
        <Route path="/Navbar_Visiteur" element={<Navbar_Visiteur/>}/>
        <Route path="/*" element={<App/>}/>
      </Routes>
    </div>
  )
}
