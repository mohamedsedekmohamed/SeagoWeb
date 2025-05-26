import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Filed = ({ title, act }) => {
  const bgColor = act ? 'bg-elven' : 'bg-white';

  return (
    <div
      className={`w-full relative max-w-[644px] min-h-[90px] md:min-h-[116px] px-4 flex items-center shadow-md transition duration-300 ${bgColor}`}
      data-aos="zoom-out-right"
   >
      <div className="h-full w-2 absolute left-0 bg-fiveteen"></div>
      <p className=" open-sans-regular text-sm sm:text-base lg:text-[20px] font-normal pl-4">
        {title}
      </p>
    </div>
  );
};

export default Filed;
