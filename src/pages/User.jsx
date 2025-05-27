import React, { useEffect } from "react";
import Nav from './Nav'
import Rectangle from '../assets/Rectangle.png'
import phonepic from '../assets/phonepic.png'
import piccafe from '../assets/piccafe.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Filed from '../Ui/Filed'
import Footer  from "./Footer";
import userpic from '../assets/userpic.png'
const User = () => {
   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <div className="overflow-x-hidden">
 <div className="absolute w-full top-0 z-50">
        <Nav />
      </div>
      <div className="w-screen flex flex-col md:flex-row gap-6 mt-15 min-h-screen px-6 lg:px-20">
  <div className="flex flex-col  gap-10 flex-1 py-10" data-aos="fade-right">
    <p className="font-normal  judson-regula ext-3xl sm:text-4xl lg:text-5xl text-one"
     data-aos="slide-right"
     >
      Smart, Seamless Experience for Village Visitors
    </p>
    <p className="   open-sans-regular font-normal text-base sm:text-lg lg:text-[20px] text-seven" data-aos="slide-right">
      The sea go app gives you everything you need inside the village — from secure QR entry to exploring services and connecting with providers — all in one place.
    </p>

    <div className="flex flex-wrap gap-4 mt-6" data-aos="zoom-in-up">
      <button className="text-base sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] bg-one rounded-3xl text-white transition hover:bg-gradient-to-b from-six to-one hover:scale-95">
        Discover Our Solutions
      </button>
      <button className="text-base sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] border border-one rounded-3xl text-one transition hover:scale-95">
        Contact Us
      </button>
    </div>
  </div>

  <div className="flex-1 flex items-center justify-center  lg:mt-0" data-aos="zoom-out-right">
    <img className="object-cover w-full min-w-[250px] max-w-[500px] " src={Rectangle} alt="Village Experience" />
  </div>
</div>
{/* App Screens Overview   */}
<div className="w-screen flex flex-col gap-6 mt-10 pt-10 min-h-screen px-6 bg-elven lg:px-20 overflow-hidden">
        <p
          className="text-center  judson-regula font-normal text-six text-[32px] lg:text-[48px]"
          data-aos="fade-down"
        >
App Screens Overview        </p>
        <p
          className="text-center  open-sans-regular font-normal text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
        Explore the main app screens and see how core features work in action.
        </p>  

        {/* text-pic */}
    <div className="flex justify-between">
       <div className="flex flex-col justify-center gap-3 flex-1 py-10" data-aos="fade-right">
    <p className="font-normal  judson-regula text-3xl sm:text-[48px] lg:text-[64px] text-fiveteen" data-aos="slide-right">
My Property:    </p>
    <p className="font-normal  text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
View & Manage Chalets:    </p>
    <p className="font-normal  open-sans-regular text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">
Browse owned or rented chalets, view detailed
galleries, and interact with posts (like).   </p>
    <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
Entrance:    </p>
    <p className="font-normal open-sans-regular  text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">Access options such as Create QR Code, Maintenance
Requests, and Report Problems for specific properties </p>
    <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
Maintenance:    </p>
    <p className="font-normal  open-sans-regular text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">
Track unpaid maintenance requests, filter by,
and make payments for repairs.   </p>
  </div>

  <div className="flex-1 flex items-center justify-center relative   lg:mt-0" data-aos="zoom-out-right">
    <img className="object-cover w-full lg:min-w-[250px]  lg:max-w-[500px]  z-20" src={phonepic} alt="Village Experience" />
    <div className="absolute  w-0 h-0 lg:w-[800px] lg:h-200 left-10 bg-white rounded-full top-1/3  z-10"></div>
  </div>
    </div>
</div>

{/* Outings and Services: */}
<div className="w-screen flex flex-col gap-6 mt-10 pt-10 min-h-screen px-6  overflow-hidden lg:px-20">      
        {/* text-pic */}
    <div className="flex justify-between">
       <div className="flex-1 flex items-center justify-center relative   lg:mt-0" data-aos="zoom-out-left">
    <img className="object-cover w-full lg:min-w-[250px]  lg:max-w-[500px]  z-20" src={piccafe} alt="Village Experience" />
    <div className="absolute  w-0 h-0 lg:w-[800px] lg:h-200 right-8 bg-elven rounded-full top-[36%]  z-10"></div>
  </div>
       <div className="flex flex-col justify-center gap-3 flex-1 py-10" data-aos="fade-left">
    <p className=" judson-regula font-normal text-3xl sm:text-[48px] lg:text-[60px] text-fiveteen" data-aos="slide-left">
 Outings and Services:   </p>
  
    <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-left">
Explore Services:    </p>
    <p className="font-normal text-base sm:text-[20px] lg:text-[20px] text-ten open-sans-regular" data-aos="slide-left">Browse services like cafés, restaurants, pharmacies, and more. Each service has a dedicated page with contact details and location.</p>
    <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-left">
Contact Providers:   </p>
    <p className="font-normal  open-sans-regular text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-left">
Reach out to service providers directly for bookings or
inquiries.  </p>
  </div>

 
    </div>
</div>


{/* For Rent or Sale: */}
<div className="w-screen flex flex-col gap-6 mt-10 pt-10 min-h-screen px-6 bg-elven lg:px-20 overflow-hidden">
    
        {/* text-pic */}
    <div className="flex justify-between">
       <div className="flex flex-col justify-center gap-3 flex-1 py-10" data-aos="fade-right">
    <p className="font-normal  judson-regula text-3xl sm:text-[48px] lg:text-[64px] text-fiveteen" data-aos="slide-right">
For Rent or Sale:   </p>
    <p className="font-normal  text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
Rent or Sale:   </p>
    <p className="font-normal  open-sans-regular text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">
List properties for rent or sale, add descriptions,
set pricing, and adjust details.  </p>
    <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
Edit Options:   </p>
    <p className="font-normal open-sans-regular  text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">Modify the price, availability, and other property details. </p>
 
  </div>

  <div className="flex-1 flex items-center justify-center relative   lg:mt-0" data-aos="zoom-out-right">
    <img className="object-cover w-full lg:min-w-[250px]  lg:max-w-[500px]  z-20" src={userpic} alt="Village Experience" />
    <div className="absolute  w-0 h-0 lg:w-[800px] lg:h-200 left-10 bg-white rounded-full top-1/3  z-10"></div>
  </div>
    </div>
</div>

{/*           User App – How It Works */}
  <div  className="w-screen py-10 px-8">
        <p
          className="text-center judson-regula font-normal text-six text-[48px]"
          data-aos="zoom-in-up"
        >
          User App – How It Works
        </p>
        <p
          className="text-center   open-sans-regular font-normal text-seven text-[24px] my-5"
          data-aos="fade-up"
        >
         See Go helps visitors explore services nearby and manage their properties—all in one app.
        </p>
        <div className=" flex flex-wrap justify-center gap-4 ">
          {/*  */}

          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
           <svg width="43" height="54" viewBox="0 0 43 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4996 0.333496C9.7369 0.333496 0.166233 9.90416 0.166233 21.6535C0.0888995 38.8402 20.6889 53.0908 21.4996 53.6668C21.4996 53.6668 42.9102 38.8402 42.8329 21.6668C42.8329 9.90416 33.2622 0.333496 21.4996 0.333496ZM21.4996 32.3335C15.6062 32.3335 10.8329 27.5602 10.8329 21.6668C10.8329 15.7735 15.6062 11.0002 21.4996 11.0002C27.3929 11.0002 32.1662 15.7735 32.1662 21.6668C32.1662 27.5602 27.3929 32.3335 21.4996 32.3335Z" fill="#0AA6A5"/>
</svg>

            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
Explore Nearby Services{" "}
     </p>
            <p
              className=" font-normal  open-sans-regular text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >{" "}
            Browse restaurants, pools, activities,
and other services available around
you inside the village.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
      <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.21967 15.8615C0.833008 18.3868 0.833008 21.4402 0.833008 27.5415V31.6002C0.833008 42.0002 0.833007 47.2028 3.95834 50.4348C7.08367 53.6668 12.1103 53.6668 22.1663 53.6668H32.833C42.889 53.6668 47.9183 53.6668 51.041 50.4348C54.1637 47.2028 54.1663 42.0028 54.1663 31.6002V27.5442C54.1663 21.4402 54.1663 18.3895 52.7797 15.8615C51.3983 13.3308 48.8677 11.7628 43.809 8.6215L38.4757 5.31216C33.129 1.99216 30.4543 0.333496 27.4997 0.333496C24.545 0.333496 21.873 1.99216 16.5237 5.31216L11.1903 8.6215C6.13167 11.7628 3.60367 13.3308 2.21967 15.8615ZM25.4997 43.0002C25.4997 43.5306 25.7104 44.0393 26.0855 44.4144C26.4605 44.7895 26.9692 45.0002 27.4997 45.0002C28.0301 45.0002 28.5388 44.7895 28.9139 44.4144C29.289 44.0393 29.4997 43.5306 29.4997 43.0002V35.0002C29.4997 34.4697 29.289 33.961 28.9139 33.586C28.5388 33.2109 28.0301 33.0002 27.4997 33.0002C26.9692 33.0002 26.4605 33.2109 26.0855 33.586C25.7104 33.961 25.4997 34.4697 25.4997 35.0002V43.0002Z" fill="#0AA6A5"/>
</svg>


            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
             Manage Your Chalet{" "}
            </p>
            <p
              className=" font-normal  open-sans-regular text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
            View, edit, or promote your owned or
rented chalet for others to discover
or contact you.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
      <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.8357 18.8882L18.9397 8.9949L20.1077 7.83756C21.617 6.32823 24.2543 6.32823 25.7637 7.83756L29.993 12.0669C30.7503 12.8242 31.1663 13.8296 31.1663 14.8962C31.1663 15.9629 30.7503 16.9682 29.9983 17.7229L28.8357 18.8882ZM46.777 34.5042C48.2863 32.9949 50.9237 32.9949 52.433 34.5042L56.6623 38.7336C57.417 39.4909 57.833 40.4962 57.833 41.5629C57.833 42.6296 57.417 43.6349 56.657 44.3949L55.4917 45.5469L45.617 35.6722L46.777 34.5042ZM15.3343 12.6109L16.2783 11.6669L26.1663 21.5549L24.433 23.2856C24.3088 23.4094 24.2103 23.5566 24.1431 23.7185C24.0759 23.8805 24.0413 24.0542 24.0413 24.2296C24.0413 24.4049 24.0759 24.5786 24.1431 24.7406C24.2103 24.9026 24.3088 25.0497 24.433 25.1736L39.329 40.0696C39.5833 40.3114 39.9208 40.4462 40.2717 40.4462C40.6226 40.4462 40.96 40.3114 41.2143 40.0696L42.9477 38.3362L52.8197 48.2296L51.8757 49.1736C51.1823 49.8669 48.553 52.1202 43.7263 52.1202C39.417 52.1202 32.377 50.2216 23.3263 41.1736C5.265 23.1069 14.905 13.0402 15.3343 12.6109Z" fill="#0AA6A5"/>
</svg>

            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
             Connect with Providers{" "}
            </p>
            <p
              className=" font-normal  open-sans-regular text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
        Call or message nearby service
providers directly through listed
contact details in the app.
            </p>
          </div>
        </div>
      </div>
      {/* How Do Village Owners Benefit? */}

<div className="w-screen flex flex-col gap-6 mt-10 pt-10 pb-5 min-h-screen px-6 bg-elven lg:px-20 overflow-hidden">
        <p
          className="text-center font-normal judson-regula text-six text-[32px] lg:text-[48px]"
          data-aos="fade-down"
        >
How Do Village Owners Benefit?      </p>
        <p
          className="text-center font-normal open-sans-regular  text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
sea go is a powerful tool for village owners:        </p> 

   {/* one */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
  <Filed title="Simplify visitor check-ins and streamline access." />
  <div className="pt-6 sm:pt-10  hidden md:block">
  <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z" fill="#0AA6A5"/>
<path d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z" fill="#0AA6A5"/>
</svg>

  </div>
</div>
   {/* two */}
<div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Reduce admin workload with a smart dashboard." />
  <div className="pt-6 sm:pt-10  hidden md:block">
 <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z" fill="#0AA6A5"/>
<path d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z" fill="#0AA6A5"/>
</svg>


  </div>
</div>
   {/* three */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Boost engagement between visitors and services." />
  <div className="pt-6 sm:pt-10  hidden md:block">
  <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z" fill="#0AA6A5"/>
<path d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z" fill="#0AA6A5"/>
</svg>

  </div>
</div>
   {/* one */}
<div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Increase guest satisfaction and improve village ratings." />
  <div className="pt-6 sm:pt-10  hidden md:block">
 <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z" fill="#0AA6A5"/>
<path d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z" fill="#0AA6A5"/>
</svg>


  </div>
</div>
   {/* five */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Gather valuable data to enhance planning and future services." />
  <div className="pt-6 sm:pt-10  hidden md:block">  
  </div>
</div>
</div>
      {/*How Do Visitors Benefit?*/}

<div className="w-screen flex flex-col gap-6 mt-10  pb-5  pt-10 min-h-screen px-6  lg:px-20 overflow-hidden">
        <p
          className="text-center judson-regula font-normal text-six text-[32px] lg:text-[48px]"
          data-aos="fade-down"
        >
How Do Visitors Benefit?</p>
        <p
          className="text-center  open-sans-regular font-normal text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
The app offers visitors a smooth and integrated experience:</p> 

   {/* one */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
  <Filed title="Access all village information and services in one place. " act={true} />
  <div className="pt-6 sm:pt-10  hidden md:block">
  <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z" fill="#0AA6A5"/>
<path d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z" fill="#0AA6A5"/>
</svg>

  </div>
</div>
   {/* two */}
<div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Book activities and easily contact service providers." act={true} />
  <div className="pt-6 sm:pt-10  hidden md:block">
 <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z" fill="#0AA6A5"/>
<path d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z" fill="#0AA6A5"/>
</svg>


  </div>
</div>
   {/* three */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Secure entry to the village and facilities (beach, pool, etc.)." act={true} />
  <div className="pt-6 sm:pt-10  hidden md:block">
  <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z" fill="#0AA6A5"/>
<path d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z" fill="#0AA6A5"/>
</svg>

  </div>
</div>
   {/* one */}
<div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Browse exclusive in-village offers and discounts." act={true} />
  <div className="pt-6 sm:pt-10  hidden md:block">
 <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z" fill="#0AA6A5"/>
<path d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z" fill="#0AA6A5"/>
</svg>


  </div>
</div>
   {/* five */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="View available chalets for rent or sale." act={true}  />
  <div className="pt-6 sm:pt-10  hidden md:block">  
  </div>
</div>
</div>
<Footer />
    </div>
  )
}

export default User

