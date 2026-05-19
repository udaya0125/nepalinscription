import React from 'react';
import LogoName from './LogoName';
const Hero = () => {
  return (
    <div className="p-4 sm:p-12 md:mt-20 mt-24 flex flex-col">
      
      <div className="relative w-full h-[72vh] md:h-[74vh] overflow-hidden mx-auto">
          <LogoName/>
        {/* Image */}
        <img
          src="images/inscription/main.jpg"
          alt="Stone inscriptions at Patan Museum"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Caption */}
        

      </div>
      <div
          className="
          mt-3
            mx:auto md:ml-auto
            bg-[#e1efd8]/90
            px-2 py-1
            sm:px-3 sm:py-2
            rounded-lg
            max-w-full sm:max-w-md
          "
        >
          <p
            className="
              text-[10px]  md:text-xs
              font-light
              text-black
              leading-snug
            "
          >
            Stone inscriptions from different historical periods of Nepal displayed <br /> at the Patan Museum courtyard
            <span className=""> (Photo: Inscriptions of Nepal)</span>
          </p>
        </div>
      
    </div>
  );
};

export default Hero;
