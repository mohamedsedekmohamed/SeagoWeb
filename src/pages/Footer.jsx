import React from 'react'

export const Footer = () => {
  return (
<footer className=" ">
  <div className=" bg-fourteen  text-white py-15 w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10">

    {/* Logo / Brand */}
    <div>
      <h2 className=" text-[40px] font-bold mb-4">sea go</h2>
      <p className="text-[16px] font-normal leading-relaxed">
Your trusted partner in transforming tourist
village experiences. We offer tailored digital
solutions that streamline operations and
enhance visitor satisfaction      </p>
    </div>

    {/* Navigation */}
    <div>
      <h3 className=" font-normal text-2xl mb-3">Follow Us </h3>
      <ul className="space-y-2 text-[14px]">
       <li>
  <a href="#" className="hover:scale-105transition flex items-center gap-2">
    <span className="text-white">&gt;</span> Instagram
  </a>
</li>
<li>
  <a href="#" className="hover:scale-105 transition flex items-center gap-2">
    <span className="text-white">&gt;</span> Twitter    
  </a>
</li>
<li>
  <a href="#" className="hover:scale-105 transition flex items-center gap-2">
    <span className="text-white">&gt;</span> Facebook  
  </a>
</li>
<li>
  <a href="#" className="hover:scale-105 transition flex items-center gap-2">
    <span className="text-white">&gt;</span> LinkedIn
  </a>
</li>

      </ul>
    </div>

    {/* Contact Info */}
   <div>
      <h3 className=" font-normal text-2xl mb-3">Quick Links  </h3>
      <div className='flex gap-6'>

      <ul className="space-y-4 text-[14px]">
       <li>
  <a href="/" className="hover:scale-105transition flex items-center gap-2">
    <span className="text-white">&gt;</span> Home 
  </a>
</li>
<li>
  <a  onClick={() => {
    document.getElementById("Services")?.scrollIntoView({ behavior: "smooth" });
  }}
    className="hover:scale-105 transition flex items-center gap-2">
    <span className="text-white">&gt;</span> Our Services    
  </a>
</li>
<li>
  <a  onClick={() => {
    document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });
  }} className="hover:scale-105 transition flex items-center gap-2">
    <span className="text-white">&gt;</span> About Us   
  </a>
</li>


      </ul>
       <ul className="space-y-4 text-[14px]">
       <li>
  <a  onClick={() => {
    document.getElementById("Testimonials")?.scrollIntoView({ behavior: "smooth" });
  }} className="hover:scale-105transition flex items-center gap-2">
    <span className="text-white">&gt;</span> Testimonials
  </a>
</li>
<li>
  <a  onClick={() => {
    document.getElementById("Work")?.scrollIntoView({ behavior: "smooth" });
  }} className="hover:scale-105 transition flex items-center gap-2">

    <span className="text-white">&gt;</span> How Does It Work?    
  </a>
</li>
<li>
  <a   onClick={() => {
    document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
  }}  className="hover:scale-105 transition flex items-center gap-2">
    <span className="text-white">&gt;</span> Contact Us  
  </a>
</li>


      </ul>
      </div>
      
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-seven mt-1 pt-4 pl-5 text-[12px] text-seven">
    © {new Date().getFullYear()} © 2025 sea go. All rights reserved.
  </div>
</footer>
  )
}
