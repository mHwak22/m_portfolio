import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsEnvelopeOpen((prev) => !prev);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleEnvelope, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 
  // The empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] flex flex-col items-center">
      <div className="flex items-center">
        <div className="flex items-center">
          <EnvelopeIcon
            style={{ display: isEnvelopeOpen ? "none" : "block" }}
            className="text-yellow-300 w-[3.5rem] h-[3.5rem] mx-4 animate-pulse"
          />
          <EnvelopeOpenIcon
            style={{ display: isEnvelopeOpen ? "block" : "none" }}
            className="text-yellow-300 w-[3.5rem] h-[3.5rem] mx-4 animate-pulse"
          />
        </div>
        <h1 className="heading">
          Testi<span className="text-yellow-400">monial</span>
        </h1>
      </div>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        {/* Testimonial Slider */}
        <TestimonialSlider/>
      </div>
    </div>
  );
};

export default Testimonial;
