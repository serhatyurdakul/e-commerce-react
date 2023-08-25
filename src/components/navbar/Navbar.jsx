import React from "react";
import NavbarLeft from "./navbarItems/NavbarLeft";
import NavbarRight from "./navbarItems/NavbarRight";



const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-5">
        <NavbarLeft />
        <NavbarRight/>
    </div>
  )
}

export default Navbar