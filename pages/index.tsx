import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NavBar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* hero Section */}
        <Hero/>
        <div className="relative z-[30]">
          <About/>
          {/* Service */}
          <Services/>
          {/* Skills */}
          <Skills/>
          {/* Project */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;


