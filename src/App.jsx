
import "./App.scss";
import React, { useRef, useEffect } from "react";
import SidePanel from "./components/SidePanel";
import Experience from './Experience/Experience';
import Menu from "./components/Menu";
import { useResponsiveStore } from "./stores/useResponsiveStore";
import { Outlet } from "react-router-dom";

function App() {

  const { updateDimensions } = useResponsiveStore();

  useEffect(()=>{
    window.addEventListener("resize", updateDimensions);


    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
  })

  return (
    <>
      <Menu />
      <Experience />
      <Outlet />

      
    </>
  )
}

export default App
