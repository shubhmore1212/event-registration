import React from "react";

import Navbar from "layouts/Navbar";
import FooterContent from "shared/components/FooterContent";
import CreatorSection from "./CreatorSection";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";

import "./styles/styles.css";

const Landing = (props: any) => {
  return (
    <>
      <Navbar {...props} />
      <HeroSection />
      <CreatorSection />
      <OurServices />
      <FooterContent />
    </>
  );
};

export default React.memo(Landing);