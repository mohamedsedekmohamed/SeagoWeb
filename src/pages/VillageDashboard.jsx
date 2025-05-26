import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Nav from "./Nav";
import Filed from "../Ui/Filed";
import Footer from "./Footer";
import dash from '../assets/dash.png'
import Dashboard from '../assets/Dashboard.png'
const VillageDashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="overflow-x-hidden">
 <div className="absolute w-full top-0 z-50">
        <Nav />
      </div>
      <div className="w-screen flex flex-col md:flex-row gap-6 mt-15 h-fit px-6 lg:px-20">
        <div
          className="flex flex-col  gap-10 flex-1 py-10"
          data-aos="fade-right"
        >
          <p
            className="font-normal judson-regular  text-3xl sm:text-4xl lg:text-5xl text-one"
            data-aos="slide-right"
          >
        Effortless Management of Your
Tourist Village from One Platform{" "}
          </p>
          <p
            className="font-normal  open-sans-regula  text-base sm:text-lg lg:text-[20px] text-seven"
            data-aos="slide-right"
          >
           The sea go Village Dashboard offers smart tools to track
visitors, organize activities, and monitor performance—
enhancing guest experiences and improving operational
efficiency.
          </p>

          <div className="flex flex-wrap gap-4 mt-6" data-aos="zoom-in-up">
            <button className="text-base judson-regular  sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] bg-one rounded-3xl text-white transition hover:bg-gradient-to-b from-six to-one hover:scale-95">
              Discover Our Solutions
            </button>
            <button className="text-base judson-regular  sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] border border-one rounded-3xl text-one transition hover:scale-95">
              Contact Us
            </button>
          </div>
        </div>

        <div
          className="flex-1 flex items-start justify-center   lg:mt-0"
          data-aos="zoom-out-right"
        >
          <img
            className="object-cover w-full pt-20 min-w-[250px] max-w-[500px] "
            src={dash}
            alt="Village Experience"
          />
        </div>
      </div>
      {/* Dashboard Screens Overview  */}
      <div className="w-screen flex flex-col gap-6 mt-10 pt-10 min-h-screen px-6 bg-elven lg:px-20 overflow-hidden">
              <p
                className="text-center judson-regular  font-normal text-six text-[32px] lg:text-[48px]"
                data-aos="fade-down"
              >
    Dashboard Screens Overview       </p>
              <p
                className="text-center open-sans-regula  font-normal text-seven text-[18px] lg:text-[24px] my-5"
                data-aos="fade-up"
              >
Explore the main Dashboard screens and see how core features work in action.              </p>  
      
              {/* text-pic */}
          <div className="flex justify-between">
             <div className="flex flex-col justify-center gap-3 flex-1 py-10" data-aos="fade-right">
          <p className=" judson-regular  font-normal text-3xl sm:text-[48px] lg:text-[64px] text-fiveteen" data-aos="slide-right">
       Features:   </p>
          <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
    Easy Navigation:    </p>
          <p className="font-normal  open-sans-regula text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">
  Quickly access key sections like Owners,
Services, Security, and Beaches.   </p>
          <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
      Live Monitoring:   </p>
          <p className="font-normal open-sans-regula text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">Access options such as Create QR Code, Maintenance
Track requests, issues, and rentals effortlessly.     </p>
          <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
     Security Control:   </p>
          <p className="font-normal  open-sans-regula text-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">
   Manage gates and entry records efficiently. </p>
          <p className="font-normal text-base sm:text-lg lg:text-[32px] text-one" data-aos="slide-right">
    Gallery & Insights: </p>
          <p className="font-normal  open-sans-regulatext-base sm:text-[20px] lg:text-[20px] text-ten" data-aos="slide-right">
  Browse media and view helpful visual reports. </p>
        </div>
      
        <div className="flex-1 flex items-center justify-center relative   lg:mt-0" data-aos="zoom-out-right">
          <img className="object-cover w-full lg:min-w-[250px]  lg:max-w-[500px]  z-20" src={Dashboard} alt="Village Experience" />
          <div className="absolute  w-0 h-0 lg:w-[800px] lg:h-200 left-10 bg-white rounded-full top-[15%]  z-10"></div>
        </div>
          </div>
      </div>
      {/*Village Dashboard – How It Works*/}
  <div  className="w-screen py-10 px-8">
        <p
          className="text-center judson-regular  font-normal text-six text-[48px]"
          data-aos="zoom-in-up"
        >
Village Dashboard – How It Works        </p>
        <p
          className="text-center open-sans-regula  font-normal text-seven text-[24px] my-5"
          data-aos="fade-up"
        >
Owners can manage bookings, visitor flow, and events from one smart dashboard.     </p>
        <div className=" flex flex-wrap justify-center gap-4 ">
          {/*  */}

          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
         <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83398 23.9999C5.83398 18.9706 5.83398 16.4586 7.39665 14.8959C8.95932 13.3333 11.4713 13.3333 16.5007 13.3333H48.5007C53.53 13.3333 56.042 13.3333 57.6047 14.8959C59.1673 16.4586 59.1673 18.9706 59.1673 23.9999C59.1673 25.2559 59.1673 25.8853 58.778 26.2773C58.386 26.6666 57.754 26.6666 56.5007 26.6666H8.50065C7.24465 26.6666 6.61532 26.6666 6.22332 26.2773C5.83398 25.8853 5.83398 25.2533 5.83398 23.9999ZM5.83398 47.9999C5.83398 53.0293 5.83398 55.5413 7.39665 57.1039C8.95932 58.6666 11.4713 58.6666 16.5007 58.6666H48.5007C53.53 58.6666 56.042 58.6666 57.6047 57.1039C59.1673 55.5413 59.1673 53.0293 59.1673 47.9999V34.6666C59.1673 33.4106 59.1673 32.7813 58.778 32.3893C58.386 31.9999 57.754 31.9999 56.5007 31.9999H8.50065C7.24465 31.9999 6.61532 31.9999 6.22332 32.3893C5.83398 32.7813 5.83398 33.4133 5.83398 34.6666V47.9999Z" fill="#0AA6A5"/>
<path d="M19.168 8V16M45.8346 8V16" stroke="#0AA6A5" stroke-width="2" stroke-linecap="round"/>
</svg>



            <p
              className=" text-center  w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
Manage Bookings & Events{" "}
     </p>
            <p
              className=" font-normal text-start open-sans-regula  text-seven text-[20px] my-5"
              data-aos="fade-up"
            >{" "}
       Schedule events, manage chalet
bookings, and assign services to
specific providers.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
<svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5007 5.33325C32.7566 5.33297 36.9266 6.53087 40.5335 8.78987C44.1404 11.0489 47.0384 14.2777 48.8959 18.1068C50.7535 21.936 51.4954 26.2107 51.0369 30.4419C50.5784 34.673 48.938 38.6896 46.3033 42.0319L56.042 51.7706C56.5278 52.2735 56.7965 52.9471 56.7905 53.6463C56.7844 54.3455 56.5039 55.0143 56.0095 55.5088C55.5151 56.0032 54.8463 56.2836 54.1471 56.2897C53.4479 56.2958 52.7743 56.027 52.2713 55.5413L42.5327 45.8026C39.6939 48.0398 36.3612 49.5657 32.8127 50.253C29.2643 50.9403 25.6029 50.7691 22.134 49.7535C18.6652 48.738 15.4895 46.9076 12.872 44.4152C10.2544 41.9227 8.27083 38.8404 7.08675 35.4255C5.90267 32.0105 5.55243 28.3619 6.06523 24.784C6.57804 21.2062 7.93902 17.8028 10.0346 14.8579C12.1303 11.913 14.8997 9.51198 18.112 7.8551C21.3243 6.19822 24.8863 5.33356 28.5007 5.33325ZM28.5007 10.6666C23.9036 10.6666 19.4948 12.4928 16.2442 15.7434C12.9935 18.994 11.1673 23.4028 11.1673 27.9999C11.1673 32.597 12.9935 37.0058 16.2442 40.2564C19.4948 43.5071 23.9036 45.3333 28.5007 45.3333C33.0978 45.3333 37.5066 43.5071 40.7572 40.2564C44.0078 37.0058 45.834 32.597 45.834 27.9999C45.834 23.4028 44.0078 18.994 40.7572 15.7434C37.5066 12.4928 33.0978 10.6666 28.5007 10.6666ZM28.5007 13.3333C32.3905 13.3333 36.121 14.8785 38.8716 17.629C41.6221 20.3796 43.1673 24.1101 43.1673 27.9999C43.1673 31.8898 41.6221 35.6203 38.8716 38.3708C36.121 41.1214 32.3905 42.6666 28.5007 42.6666C24.6108 42.6666 20.8803 41.1214 18.1298 38.3708C15.3792 35.6203 13.834 31.8898 13.834 27.9999C13.834 24.1101 15.3792 20.3796 18.1298 17.629C20.8803 14.8785 24.6108 13.3333 28.5007 13.3333Z" fill="#0AA6A5"/>
</svg>




            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
             Visitor & Service Monitoring{" "}
            </p>
            <p
              className=" font-normal open-sans-regula text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
          Track visitor numbers, services
requested, and service performance.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
     <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8333 32C21.0778 32 20.4449 32.256 19.9347 32.768C19.4244 33.28 19.1684 33.9129 19.1667 34.6667V42.6667C19.1667 43.4222 19.4227 44.056 19.9347 44.568C20.4467 45.08 21.0796 45.3351 21.8333 45.3333C22.5871 45.3316 23.2209 45.0756 23.7347 44.5653C24.2484 44.0551 24.5036 43.4222 24.5 42.6667V34.6667C24.5 33.9111 24.244 33.2782 23.732 32.768C23.22 32.2578 22.5871 32.0018 21.8333 32ZM43.1667 18.6667C42.4111 18.6667 41.7782 18.9227 41.268 19.4347C40.7578 19.9467 40.5018 20.5796 40.5 21.3333V42.6667C40.5 43.4222 40.756 44.056 41.268 44.568C41.78 45.08 42.4129 45.3351 43.1667 45.3333C43.9204 45.3316 44.5542 45.0756 45.068 44.5653C45.5818 44.0551 45.8369 43.4222 45.8333 42.6667V21.3333C45.8333 20.5778 45.5773 19.9449 45.0653 19.4347C44.5533 18.9244 43.9204 18.6684 43.1667 18.6667ZM32.5 37.3333C31.7444 37.3333 31.1116 37.5893 30.6013 38.1013C30.0911 38.6133 29.8351 39.2462 29.8333 40V42.6667C29.8333 43.4222 30.0893 44.056 30.6013 44.568C31.1133 45.08 31.7462 45.3351 32.5 45.3333C33.2538 45.3316 33.8876 45.0756 34.4013 44.5653C34.9151 44.0551 35.1702 43.4222 35.1667 42.6667V40C35.1667 39.2444 34.9107 38.6116 34.3987 38.1013C33.8867 37.5911 33.2538 37.3351 32.5 37.3333ZM13.8333 56C12.3667 56 11.1116 55.4782 10.068 54.4347C9.02444 53.3911 8.50178 52.1351 8.5 50.6667V13.3333C8.5 11.8667 9.02267 10.6116 10.068 9.568C11.1133 8.52444 12.3684 8.00178 13.8333 8H51.1667C52.6333 8 53.8893 8.52267 54.9347 9.568C55.98 10.6133 56.5018 11.8684 56.5 13.3333V50.6667C56.5 52.1333 55.9782 53.3893 54.9347 54.4347C53.8911 55.48 52.6351 56.0018 51.1667 56H13.8333ZM32.5 32C33.2556 32 33.8893 31.744 34.4013 31.232C34.9133 30.72 35.1684 30.0871 35.1667 29.3333C35.1649 28.5796 34.9089 27.9467 34.3987 27.4347C33.8884 26.9227 33.2556 26.6667 32.5 26.6667C31.7444 26.6667 31.1116 26.9227 30.6013 27.4347C30.0911 27.9467 29.8351 28.5796 29.8333 29.3333C29.8316 30.0871 30.0876 30.7209 30.6013 31.2347C31.1151 31.7484 31.748 32.0036 32.5 32Z" fill="#0AA6A5"/>
</svg>



            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
           Analytics & Insights {" "}
            </p>
            <p
              className=" font-normal open-sans-regula text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
    Use visual reports to improve guest
satisfaction and operational efficiency.
            </p>
          </div>
        </div>
      </div>
          {/* How Does the Village Management Benefit? */}

<div className="w-screen flex flex-col gap-6 mt-10 pt-10 pb-5 h-fit px-6 bg-elven lg:px-20 overflow-hidden">
        <p
          className="text-center judson-regular  font-normal text-six text-[32px] lg:text-[48px]"
          data-aos="fade-down"
        >
How Does the Village Management Benefit?  </p>
        <p
          className="text-center open-sans-regula font-normal text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
The Village Dashboard empowers managers to oversee all operations in real time—making it easier
to manage visitors, events, and services with confidence and clarity.       </p> 

   {/* one */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
  <Filed title="Manage bookings, events, and service customization from
a unified interface." />
  <div className="pt-6 sm:pt-10  hidden md:block">
  <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z" fill="#0AA6A5"/>
<path d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z" fill="#0AA6A5"/>
</svg>

  </div>
</div>
   {/* two */}
<div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Track entry and exit data to ensure safety and smooth flow
within the village." />
  <div className="pt-6 sm:pt-10  hidden md:block">
 <svg width="206" height="78" viewBox="0 0 206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z" fill="#0AA6A5"/>
<path d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z" fill="#0AA6A5"/>
</svg>


  </div>
</div>
   {/* three */}
<div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-1">
  <Filed title="Access visitor feedback and performance analytics to improve
planning and services." />
  <div className="pt-6 sm:pt-10  hidden md:block">
 
  </div>
</div>

   
</div>

      <Footer />
    </div>
  );
};



export default VillageDashboard