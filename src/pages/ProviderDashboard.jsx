import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Nav from "./Nav";
import Filed from "../Ui/Filed";
import Footer from "./Footer";
import dash from "../assets/dash.png";
import show from "../assets/show.png";
const ProviderDashboard = () => {
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
            className="font-normal text-3xl sm:text-4xl lg:text-5xl text-one judson-regular "
            data-aos="slide-right"
          >
            A Professional Dashboard for Village Service Providers{" "}
          </p>
          <p
            className="font-normal text-base sm:text-lg open-sans-regular lg:text-[20px] text-seven"
            data-aos="slide-right"
          >
            The Provider Dashboard allows service providers to manage requests,
            showcase offerings, and communicate with visitors smoothly—ensuring
            a streamlined and effective experience for both sides.
          </p>

          <div className="flex flex-wrap gap-4 mt-6" data-aos="zoom-in-up">
            <button className="text-base sm:text-lg w-full sm:w-[200px] judson-regular  lg:w-[296px] h-[60px] lg:h-[72px] bg-one rounded-3xl text-white transition hover:bg-gradient-to-b from-six to-one hover:scale-95">
              Discover Our Solutions
            </button>
            <button className="text-base sm:text-lg w-full sm:w-[200px] judson-regular  lg:w-[296px] h-[60px] lg:h-[72px] border border-one rounded-3xl text-one transition hover:scale-95">
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
         Dashboard Screens Overview{" "}
        </p>
        <p
          className="text-center font-normal open-sans-regular text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
         Explore the main Dashboard screens and see how core features work in action.{" "}
        </p>

        {/* text-pic */}
        <div className="flex justify-between">
          <div
            className="flex flex-col justify-center gap-3 flex-1 py-10"
            data-aos="fade-right"
          >
            <p
              className="font-normal judson-regular  text-3xl sm:text-[48px] lg:text-[64px] text-fiveteen"
              data-aos="slide-right"
            >
              Features:{" "}
            </p>
            <p
              className="font-normal text-base sm:text-lg lg:text-[32px] text-one"
              data-aos="slide-right"
            >
               Manage Content{" "}
            </p>
            <p
              className="font-normal open-sans-regular text-base sm:text-[20px] lg:text-[20px] text-ten"
              data-aos="slide-right"
            >
           Upload photos, update your menu, and keep
your service gallery fresh.{" "}
            </p>
            <p
              className="font-normal text-base sm:text-lg lg:text-[32px] text-one"
              data-aos="slide-right"
            >
          Promote Your Business{" "}
            </p>
            <p
              className="font-normal  open-sans-regular text-base sm:text-[20px] lg:text-[20px] text-ten"
              data-aos="slide-right"
            >
             Create offers, discounts, and ads to boost visibility inside the app.{" "}
            </p>
            <p
              className="font-normal text-base sm:text-lg lg:text-[32px] text-one"
              data-aos="slide-right"
            > Track & Control{" "}
            </p>
            <p
              className="font-normal  open-sans-regular text-base sm:text-[20px] lg:text-[20px] text-ten"
              data-aos="slide-right"
            >
            Monitor subscription status and adjust your
profile settings easily.{" "}
            </p>
            
          </div>

          <div
            className="flex-1 flex items-center justify-center relative   lg:mt-0"
            data-aos="zoom-out-right"
          >
            <img
              className="object-cover w-full lg:min-w-[250px]  lg:max-w-[500px]  z-20"
              src={show}
              alt="Village Experience"
            />
            <div className="absolute  w-0 h-0 lg:w-[800px] lg:h-200 left-10 bg-white rounded-full top-[15%]  z-10"></div>
          </div>
        </div>
      </div>
      {/*Provider Dashboard – How It Works*/}
      <div className="w-screen py-10 px-8">
        <p
          className="text-center font-normal text-six text-[48px]"
          data-aos="zoom-in-up"
        >
          Provider Dashboard – How It Works{" "}
        </p>
        <p
          className="text-center open-sans-regular font-normal text-seven text-[24px] my-5"
          data-aos="fade-up"
        >
         Service providers manage their offerings and user interactions with ease.{" "}
        </p>
        <div className=" flex flex-wrap justify-center gap-4 ">
          {/*  */}

          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.5 2.66675V61.3334H8.5V2.66675H56.5ZM43.1667 18.6667H21.8333V24.0001H43.1667V18.6667ZM43.1667 29.3334H21.8333V34.6667H43.1667V29.3334ZM43.1667 40.0001H21.8333V45.3334H43.1667V40.0001Z" fill="#0AA6A5"/>
</svg>


            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
            Showcase Your Services{" "}
            </p>
            <p
              className=" font-normal text-start open-sans-regular text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
             List your services (spa, food delivery,
transport, etc.) with descriptions
and pricing.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
       <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1025_421)">
<path d="M36.5 16.344V0H28.5V16.344L22.5 10.344L16.844 16L32.5 31.656L48.156 16L42.5 10.344L36.5 16.344ZM0.5 32H24.5V40H40.5V32H64.5V64H0.5V32Z" fill="#0AA6A5"/>
</g>
<defs>
<clipPath id="clip0_1025_421">
<rect width="64" height="64" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
              Manage Requests Effectively{" "}
            </p>
            <p
              className=" font-normal text-start open-sans-regular text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
           Receive and track service requests
with real-time status updates.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-5 items-center justify-center p-2">
      <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1025_426)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.4406 6.85713C30.5296 6.82262 28.6305 7.1653 26.8521 7.86556C25.0736 8.56582 23.4508 9.60992 22.0763 10.9381C20.7018 12.2663 19.6028 13.8524 18.842 15.6059C18.0813 17.3593 17.6738 19.2455 17.6429 21.1566V41.1428C17.6429 42.3553 17.1612 43.518 16.3039 44.3753C15.4466 45.2326 14.2838 45.7143 13.0714 45.7143H7.35714C5.53852 45.7143 3.79437 44.9918 2.50841 43.7059C1.22245 42.4199 0.5 40.6758 0.5 38.8571L0.5 29.7143C0.5 27.8956 1.22245 26.1515 2.50841 24.8655C3.79437 23.5796 5.53852 22.8571 7.35714 22.8571H10.7857V21.0743C10.8274 18.2646 11.4222 15.4907 12.5361 12.911C13.65 10.3313 15.2611 7.99623 17.2775 6.03924C19.294 4.08225 21.6761 2.54165 24.288 1.50543C26.8999 0.4692 29.6904 -0.0423511 32.5 -1.25433e-05C35.3096 -0.0423511 38.1001 0.4692 40.712 1.50543C43.3239 2.54165 45.706 4.08225 47.7225 6.03924C49.7389 7.99623 51.35 10.3313 52.4639 12.911C53.5778 15.4907 54.1726 18.2646 54.2143 21.0743V22.8571H57.6429C59.4615 22.8571 61.2056 23.5796 62.4916 24.8655C63.7776 26.1515 64.5 27.8956 64.5 29.7143V38.8571C64.5 40.6758 63.7776 42.4199 62.4916 43.7059C61.2056 44.9918 59.4615 45.7143 57.6429 45.7143H54.2143V48C54.2149 51.0892 53.078 54.0704 51.0207 56.3748C48.9633 58.6792 46.1295 60.1455 43.06 60.4937C42.4639 61.558 41.5947 62.444 40.542 63.0603C39.4893 63.6767 38.2913 64.001 37.0714 64H30.2143C28.3957 64 26.6515 63.2775 25.3656 61.9916C24.0796 60.7056 23.3571 58.9615 23.3571 57.1428C23.3571 55.3242 24.0796 53.5801 25.3656 52.2941C26.6515 51.0081 28.3957 50.2857 30.2143 50.2857H37.0714C39.5491 50.2857 41.7206 51.5977 42.9229 53.568C44.1829 53.2784 45.3074 52.5701 46.1128 51.5587C46.9182 50.5474 47.3569 49.2928 47.3571 48V21.152C47.3258 19.2311 46.914 17.3354 46.1455 15.5746C45.3771 13.8138 44.2673 12.2228 42.8802 10.8936C41.4931 9.5643 39.8563 8.52316 38.0644 7.83033C36.2725 7.13751 34.3611 6.80673 32.4406 6.85713Z" fill="#0AA6A5"/>
</g>
<defs>
<clipPath id="clip0_1025_426">
<rect width="64" height="64" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


            <p
              className=" text-center w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
              Talk to Users Directly{" "}
            </p>
            <p
              className=" font-normal open-sans-regular text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
             Reply to inquiries or coordinate
bookings with users through
integrated communication tools..
            </p>
          </div>
        </div>
      </div>
      {/* How Does the Village Management Benefit? */}

      <div className="w-screen flex flex-col gap-6 mt-10 pt-10 pb-5 h-fit px-6 bg-elven lg:px-20 overflow-hidden">
        <p
          className="text-center  judson-regular  font-normal text-six text-[32px] lg:text-[48px]"
          data-aos="fade-down"
        >
        How Service Providers Benefit?{" "}
        </p>
        <p
          className="text-center  open-sans-regular font-normal text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
        Gain more visibility, manage requests efficiently, and deliver better service through
a smart and organized dashboard.{" "}
        </p>

        {/* one */}
        <div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
          <Filed
            title="Monitor all activities in real-time from one organized
dashboard."
          />
          <div className="pt-6 sm:pt-10  hidden md:block">
            <svg
              width="206"
              height="78"
              viewBox="0 0 206 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z"
                fill="#0AA6A5"
              />
              <path
                d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z"
                fill="#0AA6A5"
              />
            </svg>
          </div>
        </div>
        {/* two */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
          <Filed
            title="Your services are easily discoverable by visitors through
clearly structured sections."
          />
          <div className="pt-6 sm:pt-10  hidden md:block">
            <svg
              width="206"
              height="78"
              viewBox="0 0 206 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z"
                fill="#0AA6A5"
              />
              <path
                d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z"
                fill="#0AA6A5"
              />
            </svg>
          </div>
        </div>
        {/* three */}
        <div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-1">
          <Filed
            title="Clear, smooth communication helps drive positive reviews
and repeat requests."
          />
          <div className="pt-6 sm:pt-10  hidden md:block"></div>
        </div>
      </div>
      {/* How Do Village Owners Benefit? */}

      <div className="w-screen flex flex-col gap-6 mt-10 pt-10 pb-5 h-fit px-6 bg-elven lg:px-20 overflow-hidden">
        <p
          className="text-center judson-regular  font-normal text-six text-[32px] lg:text-[48px]"
          data-aos="fade-down"
        >
       How Do Village Owners Benefit?{" "}
        </p>
        <p
          className="text-center  open-sans-regular font-normal text-seven text-[18px] lg:text-[24px] my-5"
          data-aos="fade-up"
        >
    sea go enhances efficiency, boosts satisfaction, and simplifies operations for village owners.{" "}
        </p>

        {/* one */}
        <div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
          <Filed
            title="Continuously track service requests."
          />
          <div className="pt-6 sm:pt-10  hidden md:block">
            <svg
              width="206"
              height="78"
              viewBox="0 0 206 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z"
                fill="#0AA6A5"
              />
              <path
                d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z"
                fill="#0AA6A5"
              />
            </svg>
          </div>
        </div>
        {/* two */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
          <Filed
            title="Update offers and services provided."
          />
          <div className="pt-6 sm:pt-10  hidden md:block">
            <svg
              width="206"
              height="78"
              viewBox="0 0 206 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z"
                fill="#0AA6A5"
              />
              <path
                d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z"
                fill="#0AA6A5"
              />
            </svg>
          </div>
        </div>
        {/* three */}
        <div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
          <Filed
            title="Direct interaction with visitors via the dashboard."
          />
          <div className="pt-6 sm:pt-10  hidden md:block">
            <svg
              width="206"
              height="78"
              viewBox="0 0 206 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z"
                fill="#0AA6A5"
              />
              <path
                d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z"
                fill="#0AA6A5"
              />
            </svg>
          </div>
        </div>
        {/* four */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
          <Filed
            title="Improve service quality based on interactions and data."
          />
          <div className="pt-6 sm:pt-10  hidden md:block">
            <svg
              width="206"
              height="78"
              viewBox="0 0 206 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z"
                fill="#0AA6A5"
              />
              <path
                d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z"
                fill="#0AA6A5"
              />
            </svg>
          </div>
        </div>
           {/* five */}
        <div className="flex flex-col sm:flex-row items-center gap-6 px-4 sm:px-10 py-3">
          <Filed
            title="Manage special offers effectively."
          />
          <div className="pt-6 sm:pt-10  hidden md:block">
            <svg
              width="206"
              height="78"
              viewBox="0 0 206 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6L10 11.7735V0.226497L0 6ZM6 6V7H10V6V5H6V6ZM14 6V7H18V6V5H14V6ZM22 6V7H26V6V5H22V6ZM30 6V7H34V6V5H30V6ZM38 6V7H42V6V5H38V6ZM46 6V7H50V6V5H46V6ZM54 6V7H58V6V5H54V6ZM62 6V7H66V6V5H62V6ZM70 6V7H74V6V5H70V6ZM78 6V7H82V6V5H78V6ZM86 6V7H90V6V5H86V6ZM94 6V7H98V6V5H94V6ZM102 6V7H106V6V5H102V6ZM110 6V7H114V6V5H110V6ZM118 6V7H122V6V5H118V6ZM126 6V7H130V6V5H126V6ZM134 6V7H138V6V5H134V6ZM142 6V7H146V6V5H142V6ZM150 6V7H154V6V5H150V6ZM158 6V7H162V6V5H158V6ZM166 6V7H170V6V5H166V6ZM174 6V7H178V6V5H174V6ZM182 6V7H186V6V5H182V6ZM190 6V7H194V6V5H190V6ZM198 6V7H200V6V5H198V6Z"
                fill="#0AA6A5"
              />
              <path
                d="M200 78L205.774 68H194.226L200 78ZM200 71.9167H201V67.8611H200H199V71.9167H200ZM200 63.8056H201V59.75H200H199V63.8056H200ZM200 55.6944H201V51.6389H200H199V55.6944H200ZM200 47.5833H201V43.5278H200H199V47.5833H200ZM200 39.4722H201V35.4167H200H199V39.4722H200ZM200 31.3611H201V27.3055H200H199V31.3611H200ZM200 23.25H201V19.1944H200H199V23.25H200ZM200 15.1389H201V11.0833H200H199V15.1389H200ZM200 7.02776H201V5H200H199V7.02776H200Z"
                fill="#0AA6A5"
              />
            </svg>
          </div>
        </div>
        {/* six */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-6 px-4 sm:px-10 py-1">
          <Filed
            title="Enhance operational efficiency and increase visitor satisfaction."
          />
          <div className="pt-6 sm:pt-10  hidden md:block">
            <svg
              width="206"
              height="78"
              viewBox="0 0 206 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M206 6L196 11.7735V0.226497L206 6ZM200 6V7H196V6V5H200V6ZM192 6V7H188V6V5H192V6ZM184 6V7H180V6V5H184V6ZM176 6V7H172V6V5H176V6ZM168 6V7H164V6V5H168V6ZM160 6V7H156V6V5H160V6ZM152 6V7H148V6V5H152V6ZM144 6V7H140V6V5H144V6ZM136 6V7H132V6V5H136V6ZM128 6V7H124V6V5H128V6ZM120 6V7H116V6V5H120V6ZM112 6V7H108V6V5H112V6ZM104 6V7H100V6V5H104V6ZM96 6V7H92V6V5H96V6ZM88 6V7H84V6V5H88V6ZM80 6V7H76V6V5H80V6ZM72 6V7H68V6V5H72V6ZM64 6V7H60V6V5H64V6ZM56 6V7H52V6V5H56V6ZM48 6V7H44V6V5H48V6ZM40 6V7H36V6V5H40V6ZM32 6V7H28V6V5H32V6ZM24 6V7H20V6V5H24V6ZM16 6V7H12V6V5H16V6ZM8 6V7H6V6V5H8V6Z"
                fill="#0AA6A5"
              />
              <path
                d="M6 78L0.226497 68H11.7735L6 78ZM6 71.9167H5V67.8611H6H7V71.9167H6ZM6 63.8056H5V59.75H6H7V63.8056H6ZM6 55.6944H5V51.6389H6H7V55.6944H6ZM6 47.5833H5V43.5278H6H7V47.5833H6ZM6 39.4722H5V35.4167H6H7V39.4722H6ZM6 31.3611H5V27.3055H6H7V31.3611H6ZM6 23.25H5V19.1944H6H7V23.25H6ZM6 15.1389H5V11.0833H6H7V15.1389H6ZM6 7.02776H5V5H6H7V7.02776H6Z"
                fill="#0AA6A5"
              />
            </svg>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProviderDashboard;
