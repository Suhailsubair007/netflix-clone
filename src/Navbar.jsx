import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);  
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div><img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/4/42/Dfnefr.png"
        alt="Logo"
      /></div>
  <div className="nav-list">
    <h5>Home</h5>
    <h5>Tv Show</h5>
    <h5>Movies</h5>
    <h5>News&Populer</h5>
    <h5>My List</h5>
    <h5>Browse My language</h5>
  </div>
      <div><img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Logoooo"
        className="nav-avthar"
      /></div>
    </div>
  );
}

export default Navbar;
