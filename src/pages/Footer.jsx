import React from 'react'
import chaer from '../assets/chaer.png'

 const Footer = () => {
  return (
<footer className=" ">
    {/* Contact Us */}
   <div className="flex flex-col lg:flex-row min-h-screen "
             data-aos="fade-down"
  
   >
    {/* صورة القسم */}
    <div id='Contact' className="w-full lg:w-1/2 h-64 lg:h-screen">
      <img src={chaer} className="w-full h-full object-cover" alt="Contact Us Image" />
    </div>
  
    {/* الفورم */}
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 pt-2 lg:px-10">
      <p className="text-one font-normal w-full text-start text-[32px] lg:text-[48px] mb-4 judson-regular">Contact Us</p>
      <p className="text-seven font-normal text-[18px] lg:text-[24px] mb-4 open-sans-regular ">
        <span className="text-one">sea go</span> makes it simple for tourist villages and service providers
        to connect with visitors and improve operations. Follow these easy steps to get started.
      </p>
  
      {/* الفورم الكامل */}
      <div className="w-full judson-bold ">
        <label className="text-seven text-[14px] font-normal w-full text-start py-2 block">Name:</label>
        <input type="text" placeholder="Your Name" className="w-full rounded-3xl p-3 border mb-2" />
  
        <label className="text-seven text-[14px] font-normal w-full text-start py-2 block">Email:</label>
        <input type="email" placeholder="Your Email" className="w-full rounded-3xl p-3 border mb-2" />
  
        <div className="w-full py-2">
  <label className="text-seven text-[14px] font-normal w-full text-start py-2 block">Phone:</label>
  
  <div className="flex ">
    <select
      className=" border  border-r-0 p-3 text-[14px] rounded-l-3xl  text-gray-700"
      defaultValue="EG"
    >
      <option value="US">🇺🇸 +1</option>
      <option value="EG">🇪🇬 +20</option>
      <option value="SA">🇸🇦 +966</option>
    </select>

    <input
      type="tel"
      placeholder="Your Phone"
      className="w-full rounded-r-3xl p-3 border"
    />
  </div>
</div>

  
        <label className="text-seven text-[14px] font-normal w-full text-start py-2 block">Message:</label>
        <textarea placeholder="How can we help?" className="w-full rounded-3xl p-3 border h-24 resize-none" />
      </div>
      <button className="bg-one px-5 py-2 text-white text-[24px] font-normal rounded-3xl hover:scale-90 delay-100 transform transition ease-in w-100 mt-6 mb-2">Send Message</button>
    </div>
  </div>
  <div className=" bg-one  text-white py-15 w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10">

    {/* Logo / Brand */}
    <div>
      <h2 className=" text-[40px] font-bold mb-4 open-sans-bold ">sea go</h2>
      <p className="text-[16px] font-normal leading-relaxed open-sans-regular">
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
  <a href="#" className="hover:scale-105 transition flex items-center gap-2">
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
  <a href="/" className="hover:scale-105 transition flex items-center gap-2">
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
  }} className="hover:scale-105 transition flex items-center gap-2">
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
export default Footer