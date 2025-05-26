import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Nav from "./Nav";
import Filed from "../Ui/Filed";
import Footer from "./Footer";
import picG from '../assets/picG.png'
import picGtwo from '../assets/pigtwo.png'
const GatekeeperApp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="overflow-x-hidden">
 <div className="absolute w-full top-0 z-50">
        <Nav />
      </div>
      <div className="w-screen flex flex-col md:flex-row gap-6 mt-20 min-h-screen px-6 lg:px-20">
        <div
          className="flex flex-col  gap-10 flex-1 py-10"
          data-aos="fade-right"
        >
          <p
            className="font-normal text-3xl sm:text-4xl judson-regular lg:text-5xl text-one"
            data-aos="slide-right"
          >
            Smart and Secure Entry for Visitors and Residents{" "}
          </p>
          <p
            className="font-normal  open-sans-regular text-base sm:text-lg lg:text-[20px] text-seven"
            data-aos="slide-right"
          >
            Gatekeeper App by sea go offers a fast and secure way to register
            the entry of visitors and residents using QR codes—providing
            accurate data for village admins and enhancing the access
            experience.
          </p>

          <div className="flex flex-wrap gap-4 mt-6" data-aos="zoom-in-up">
            <button className="text-base  open-sans-regular sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] bg-one rounded-3xl text-white transition hover:bg-gradient-to-b from-six to-one hover:scale-95">
              Discover Our Solutions
            </button>
            <button className="text-base open-sans-regular  sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] border border-one rounded-3xl text-one transition hover:scale-95">
              Contact Us
            </button>
          </div>
        </div>

        <div
          className="flex-1 flex items-center justify-center  lg:mt-0"
          data-aos="zoom-out-right"
        >
          <img
            className="object-cover w-full min-w-[250px] max-w-[500px] "
            src={picG}
            alt="Village Experience"
          />
        </div>
      </div>
      {/* App Screens Overview   */}
      <div className="w-screen flex flex-col gap-6 mt-10 pt-10 min-h-screen px-6 bg-elven lg:px-20 overflow-hidden">
              <p
                className="text-center judson-regular  font-normal text-six text-[32px] lg:text-[48px]"
                data-aos="fade-down"
              >
      App Screens Overview        </p>
              <p
                className="text-center  open-sans-regular font-normal text-seven text-[18px] lg:text-[24px] my-5"
                data-aos="fade-up"
              >
Explore the main app screens and see how core features work in action.              </p>  
      
              {/* text-pic */}
          <div className="flex justify-between open-sans-regular">
             <div className="flex flex-col justify-center gap-3 flex-1 py-10" data-aos="fade-right">
          <p className="font-normal judson-regular  text-3xl sm:text-[48px] lg:text-[64px] text-fiveteen" data-aos="slide-right">
       Features:   </p>
          <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
    Choose Gate Type    </p>
          <p className="font-normal text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">
     Select from Main Gates, Pool Gates, or Beach Gates
to manage specific access areas.   </p>
          <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
       Scan QR Code   </p>
          <p className="font-normal text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">Access options such as Create QR Code, Maintenance
Access options such as Create QR Code, Maintenance
Requests, and Report Problems for specific properties       </p>
          <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
       Access Visitor Info    </p>
          <p className="font-normal text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">
     View visitor details such as name, photo, and access
permissions after scanning.  </p>
        </div>
      
        <div className="flex-1 flex items-center justify-center relative   lg:mt-0" data-aos="zoom-out-right">
          <img className="object-cover w-full lg:min-w-[250px]  lg:max-w-[500px]  z-20" src={picGtwo} alt="Village Experience" />
          <div className="absolute  w-0 h-0 lg:w-[800px] lg:h-200 left-10 bg-white rounded-full top-1/3  z-10"></div>
        </div>
          </div>
      </div>
      {/*Gatekeeper App – How It Works*/}
  <div  className="w-screen py-10 px-8">
        <p
          className="text-center  judson-regular font-normal text-six text-[48px]"
          data-aos="zoom-in-up"
        >
Gatekeeper App – How It Works        </p>
        <p
          className="text-center open-sans-regular font-normal text-seven text-[24px] my-5"
          data-aos="fade-up"
        >
Helps gatekeepers register entries and monitor movement efficiently.        </p>
        <div className=" flex flex-wrap justify-center gap-4 ">
          {/*  */}

          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
          <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.5003 37.3334C33.3803 37.3334 19.167 40.8801 19.167 48.0001V53.3334H61.8337V48.0001C61.8337 40.8801 47.6203 37.3334 40.5003 37.3334ZM16.5003 26.6667V18.6667H11.167V26.6667H3.16699V32.0001H11.167V40.0001H16.5003V32.0001H24.5003V26.6667M40.5003 32.0001C43.3293 32.0001 46.0424 30.8763 48.0428 28.8759C50.0432 26.8755 51.167 24.1624 51.167 21.3334C51.167 18.5044 50.0432 15.7913 48.0428 13.7909C46.0424 11.7906 43.3293 10.6667 40.5003 10.6667C37.6713 10.6667 34.9582 11.7906 32.9579 13.7909C30.9575 15.7913 29.8337 18.5044 29.8337 21.3334C29.8337 24.1624 30.9575 26.8755 32.9579 28.8759C34.9582 30.8763 37.6713 32.0001 40.5003 32.0001Z" fill="#0AA6A5"/>
</svg>


            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
Register Visitors Easily{" "}
     </p>
            <p
              className=" font-normal open-sans-regular text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >{" "}
       Record each visitor's entry manually
with quick data input at the gate.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
    <svg width="43" height="54" viewBox="0 0 43 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4996 0.333252C9.7369 0.333252 0.166233 9.90392 0.166233 21.6533C0.0888995 38.8399 20.6889 53.0906 21.4996 53.6666C21.4996 53.6666 42.9102 38.8399 42.8329 21.6666C42.8329 9.90392 33.2622 0.333252 21.4996 0.333252ZM21.4996 32.3333C15.6062 32.3333 10.8329 27.5599 10.8329 21.6666C10.8329 15.7733 15.6062 10.9999 21.4996 10.9999C27.3929 10.9999 32.1662 15.7733 32.1662 21.6666C32.1662 27.5599 27.3929 32.3333 21.4996 32.3333Z" fill="#0AA6A5"/>
</svg>



            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
              Live Movement Tracking{" "}
            </p>
            <p
              className=" font-normal  open-sans-regulartext-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
           View real-time records of who’s inside
the village for better control and
organization.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
      <svg width="55" height="38" viewBox="0 0 55 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.833 3.00002H17.4197C16.7192 2.2207 15.871 1.58814 14.9243 1.13898C13.9775 0.68982 12.9511 0.432999 11.9044 0.383392C10.8577 0.333785 9.81154 0.492379 8.82658 0.849988C7.84161 1.2076 6.93741 1.75711 6.16634 2.46669C4.45967 3.96002 3.49967 6.09336 3.49967 8.33336V32.3334C2.79243 32.3334 2.11415 32.6143 1.61406 33.1144C1.11396 33.6145 0.833008 34.2928 0.833008 35V37.6667H22.1663V35C22.1663 34.2928 21.8854 33.6145 21.3853 33.1144C20.8852 32.6143 20.2069 32.3334 19.4997 32.3334V13.6667H48.833C50.2475 13.6667 51.604 13.1048 52.6042 12.1046C53.6044 11.1044 54.1663 9.74784 54.1663 8.33336C54.1663 6.91887 53.6044 5.56231 52.6042 4.56212C51.604 3.56193 50.2475 3.00002 48.833 3.00002ZM11.4997 12.3334C10.4388 12.3334 9.42139 11.9119 8.67125 11.1618C7.9211 10.4116 7.49967 9.39422 7.49967 8.33336C7.49967 7.27249 7.9211 6.25507 8.67125 5.50493C9.42139 4.75478 10.4388 4.33336 11.4997 4.33336C12.5605 4.33336 13.578 4.75478 14.3281 5.50493C15.0782 6.25507 15.4997 7.27249 15.4997 8.33336C15.4997 9.39422 15.0782 10.4116 14.3281 11.1618C13.578 11.9119 12.5605 12.3334 11.4997 12.3334ZM23.4997 11L19.4997 5.66669H23.4997L27.4997 11H23.4997ZM34.1663 11L30.1663 5.66669H34.1663L38.1663 11H34.1663ZM44.833 11L40.833 5.66669H44.833L48.833 11H44.833Z" fill="#0AA6A5"/>
</svg>


            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
             Avoid Entry Crowds  {" "}
            </p>
            <p
              className=" font-normal open-sans-regular text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
       Avoid long lines and congestion
with a faster check-in process.
            </p>
          </div>
        </div>
      </div>
          {/* How Do Village Gatekeepers / Security Staff Benefit? */}

<div className="w-screen flex flex-col gap-6 mt-10 pt-10 pb-5 h-fit px-6 bg-elven lg:px-20 overflow-hidden">
        <p
          className="text-center judson-regular  font-normal text-six text-[32px] lg:text-[48px]"
          data-aos="fade-down"
        >
How Do Village Gatekeepers / Security Staff Benefit?   </p>
        <p
          className="text-center font-normal open-sans-regular  text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
Quick QR-based entry, less crowding, and live visitor logs for better gate control.        </p> 

   {/* one */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
  <Filed title="Fast and efficient visitor check-in." />
  <div className="pt-6 sm:pt-10  hidden md:block">
  <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z" fill="#0AA6A5"/>
<path d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z" fill="#0AA6A5"/>
</svg>

  </div>
</div>
   {/* two */}
<div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Reduced crowding and professional gate experience." />
  <div className="pt-6 sm:pt-10  hidden md:block">
 <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z" fill="#0AA6A5"/>
<path d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z" fill="#0AA6A5"/>
</svg>


  </div>
</div>
   {/* three */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Real-time record of who is currently inside the village." />
  <div className="pt-6 sm:pt-10  hidden md:block">
 
  </div>
</div>

   
</div>
 {/*How Do Village Management Benefit?*/}

<div className="w-screen flex flex-col gap-6 mt-10  pb-5  pt-10 h-fit px-6  lg:px-20 overflow-hidden">
        <p
          className="text-center judson-regular font-normal text-six text-[32px] lg:text-[48px]"
          data-aos="fade-down"
        >
How Do Village Management Benefit?</p>
        <p
          className="text-center font-normal open-sans-regular  text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
Instant access to entry data and visitor flow for enhanced security and smoother operations.</p> 

   {/* one */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
  <Filed title="Immediate access to accurate entry data. " act={true} />
  <div className="pt-6 sm:pt-10  hidden md:block">
  <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z" fill="#0AA6A5"/>
<path d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z" fill="#0AA6A5"/>
</svg>

  </div>
</div>
   {/* two */}
<div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Real-time tracking of visitor flow." act={true} />
  <div className="pt-6 sm:pt-10  hidden md:block">
 <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z" fill="#0AA6A5"/>
<path d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z" fill="#0AA6A5"/>
</svg>


  </div>
</div>
   {/* three */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Enhanced security and operational control." act={true} />
  <div className="pt-6 sm:pt-10  hidden md:block">
 

  </div>
</div>

</div>
      <Footer />
    </div>
  );
};

export default GatekeeperApp;
