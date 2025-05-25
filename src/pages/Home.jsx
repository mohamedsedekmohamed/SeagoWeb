import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cirlc from "../assets/cirlc.png";
import Pichome from "../assets/Pichome.jpg";
import Nav from "./Nav";
import onehero from "../assets/onehero.png";
import twoHero from "../assets/twoHero.png";
import threehreo from "../assets/threehreo.png";
import { BsPhoneFill } from "react-icons/bs";
import { RiHome5Fill } from "react-icons/ri";
import { LuSquareSplitVertical } from "react-icons/lu";
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import man from "../assets/man.png";
import mantwo from "../assets/mantwo.png";
import manthree from "../assets/manthree.png";
import chaer from '../assets/chaer.png'
import { Footer } from "./Footer";
import { useLocation } from 'react-router-dom';


const Home = () => {
  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const data = [
    {
      label: "What is sea go and what does it offer?",
      description: `
    sea go is a comprehensive digital solution designed for tourist villages. It provides a suite of applications that streamline
operations, enhance visitor experiences, and empower service providers. Our platform offers:
Visitor App for seamless exploration of the village and services.
Gatekeeper App for secure entry and exit management.
Village Dashboard for managing daily operations, bookings, and analytics.
Provider Dashboard for service providers to manage requests and offerings.
    `,
    },
    {
      label: "How can tourist villages join the platform?",
      description: `Tourist villages can easily join sea go by reaching out to us through our Contact Us page. After an initial consultation, we will
customize the platform to meet the village's specific needs. We guide the integration process and provide full support to ensure
smooth onboarding.`,
    },
    {
      label: "Do your services require special staff training?",
      description: `While sea go is designed to be user-friendly, we do offer training for staff members to ensure they make the most of the
platform. This training covers all aspects of using the system, from managing the visitor app to handling the dashboards
and maintaining secure data.`,
    },
    {
      label: "Can the solutions be customized for each village?",
      description: `Yes, our solutions are fully customizable. We understand that each tourist village has its own set of needs, so we tailor our
services to suit those unique requirements. Whether it's the design of the app, the functionalities in the dashboard, or the
service offerings, we ensure a personalized experience.`,
    },
  ];
  const images = [
    {
      src: LuSquareSplitVertical,
      title: "Secure Entry via QR Code ",
      desc: "Visitors check in quickly and securely by scanning a QR code at the village gate, beach, or pool entrance.",
      angle: 0,
    },
    {
      src: RiHome5Fill,
      title: "Explore All Services and Facilities",
      desc: "Through the app, visitors can browse all available services like rooms, spa, restaurants, and activities.",
      angle: 60,
    },
    {
      src: IoCallSharp,
      title: " Direct Contact with Service Providers",
      desc: "The app allows users to easily contact the nearest or most suitable service providers using listed contact details.",
      angle: 120,
    },
    {
      src: BsPhoneFill,
      title: " List Chalets for Sale or Rent",
      desc: "Owners can showcase their chalets for rent or sale directly through the app for other users to see.",
      angle: 180,
    },
    {
      src: HiOutlineSquares2X2,
      title: "Comprehensive Dashboard for Village Management ",
      desc: "Village admins can manage bookings, entry records, analytics,and event scheduling from a unified dashboard.",
      angle: 240,
    },
    {
      src: FaTools,
      title: " Dedicated Panel for Service Providers ",
      desc: "Each provider has a personalized dashboard to manage requests, update offerings, and communicate with users efficiently.",
      angle: 300,
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [selected, setSelected] = useState(images[0]);
  const [rotation, setRotation] = useState(0); // State for the overall rotation

  const handleImageClick = (item) => {
    setSelected(item);

    setRotation(item.angle + 120);
  };

  return (
    <div className="w-screen m-0 p-0">
      {/* nav */}
      <div className="absolute w-full top-0 z-50">
        <Nav />
      </div>

      {/* hero */}
      <div
        className="w-screen h-screen bg-cover bg-center flex flex-col gap-10 justify-center items-center"
        style={{ backgroundImage: `url(${Pichome})` }}
      >
        <div className="w-[90%]" data-aos="fade-up">
          <p className="w-[90%] mx-auto text-3xl md:text-4xl lg:text-8xl text-white text-center font-bold">
            Enhance Visitor Experience with sea go{" "}
          </p>
          <p className="w-full text-[18px] md:text-[24px] lg:text-[32px] text-white text-center font-normal mt-5">
            We offer innovative digital solutions for tourist villages to
            streamline communication and improve visitor experience. Join our
            platform today for advanced tools that support your growth
          </p>
        </div>

        <div className="flex flex-wrap  justify-center gap-4" data-aos="zoom-in-up">
          <button className="text-[20px] w-[296px] h-[72px] bg-four rounded-3xl text-white delay-100 transform transition hover:bg-gradient-to-b from-six to-four hover:scale-95">
            Discover Our Solutions
          </button>

          <button className="text-[20px] w-[296px] h-[72px] bg-five rounded-3xl text-white delay-300 transform transition hover:scale-95">
            Contact Us
          </button>
        </div>
      </div>

      <div className="relative h-[200px] overflow-hidden flex items-center justify-center">
        <div className="whitespace-nowrap marquee flex gap-4">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <img
                src={onehero}
                className="w-[200px] h-[200px] rounded-xl"
                alt="hero 1"
              />
              <img
                src={twoHero}
                className="w-[200px] h-[200px] rounded-xl"
                alt="hero 2"
              />
              <img
                src={threehreo}
                className="w-[200px] h-[200px] rounded-xl"
                alt="hero 3"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* our services */}
      <div id="Services" className="w-screen py-10 px-8">
        <p
          className="text-center font-normal text-six text-[32px]"
          data-aos="fade-down"
        >
          Our Services
        </p>
        <p
          className="text-center font-normal text-seven text-[24px] my-5"
          data-aos="fade-up"
        >
          At sea go, we provide a comprehensive digital ecosystem tailored for
          all parties involved in tourist villages. Our smart solutions simplify
          management, enhance visitor experience, and empower service providers
        </p>

        <div className="flex flex-col gap-8 items-center mx-auto">
          <div className="flex gap-8 flex-wrap justify-center">
            <div
              className="text-center p-10 gap-2 flex flex-col items-center bg-nine w-[300px] lg:w-[600px] transition-all hover:scale-105 hover:shadow-2xl"
              data-aos="fade-right"
            >
              <BsPhoneFill className="w-10 h-[64px] text-four" />
              <p className="text-[32px] font-normal text-four">User App</p>
              <p className="text-[20px] font-normal text-eight">
                Explore, request services, and stay updated on village
                events—all in one place.
              </p>
            </div>

            <div
              className="text-center p-10 gap-2 flex flex-col items-center bg-nine w-[300px] lg:w-[600px] transition-all hover:scale-105 hover:shadow-2xl"
              data-aos="fade-left"
            >
              <svg
                width="54"
                height="38"
                viewBox="0 0 54 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.333 3.00002H16.9197C16.2192 2.2207 15.371 1.58814 14.4243 1.13898C13.4775 0.68982 12.4511 0.432999 11.4044 0.383392C10.3577 0.333785 9.31154 0.492379 8.32658 0.849988C7.34161 1.2076 6.43741 1.75711 5.66634 2.46669C3.95967 3.96002 2.99967 6.09336 2.99967 8.33336V32.3334C2.29243 32.3334 1.61415 32.6143 1.11406 33.1144C0.613959 33.6145 0.333008 34.2928 0.333008 35V37.6667H21.6663V35C21.6663 34.2928 21.3854 33.6145 20.8853 33.1144C20.3852 32.6143 19.7069 32.3334 18.9997 32.3334V13.6667H48.333C49.7475 13.6667 51.104 13.1048 52.1042 12.1046C53.1044 11.1044 53.6663 9.74784 53.6663 8.33336C53.6663 6.91887 53.1044 5.56231 52.1042 4.56212C51.104 3.56193 49.7475 3.00002 48.333 3.00002ZM10.9997 12.3334C9.93881 12.3334 8.92139 11.9119 8.17125 11.1618C7.4211 10.4116 6.99967 9.39422 6.99967 8.33336C6.99967 7.27249 7.4211 6.25507 8.17125 5.50493C8.92139 4.75478 9.93881 4.33336 10.9997 4.33336C12.0605 4.33336 13.078 4.75478 13.8281 5.50493C14.5782 6.25507 14.9997 7.27249 14.9997 8.33336C14.9997 9.39422 14.5782 10.4116 13.8281 11.1618C13.078 11.9119 12.0605 12.3334 10.9997 12.3334ZM22.9997 11L18.9997 5.66669H22.9997L26.9997 11H22.9997ZM33.6663 11L29.6663 5.66669H33.6663L37.6663 11H33.6663ZM44.333 11L40.333 5.66669H44.333L48.333 11H44.333Z"
                  fill="#0AA6A5"
                />
              </svg>

              <p className="text-[32px] font-normal text-four">
                Gatekeeper App
              </p>
              <p className="text-[20px] font-normal text-eight">
                Control village access with secure and efficient entry
                management.
              </p>
            </div>
          </div>

          <div className="flex gap-8 flex-wrap justify-center">
            <div
              className="text-center p-10 flex flex-col items-center bg-nine w-[300px] lg:w-[600px] transition-all hover:scale-105 hover:shadow-2xl"
              data-aos="fade-right"
            >
              <RiHome5Fill className="w-10 h-[64px] text-four" />
              <p className="text-[32px] font-normal text-four">
                Village Dashboard
              </p>
              <p className="text-[20px] font-normal text-eight">
                Manage bookings, events, and operations with real-time insights.
              </p>
            </div>

            <div
              className="text-center p-10 flex flex-col items-center bg-nine w-[300px] lg:w-[600px] transition-all hover:scale-105 hover:shadow-2xl"
              data-aos="fade-left"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 16V0H48V16H26.6667ZM0 26.6667V0H21.3333V26.6667H0ZM26.6667 48V21.3333H48V48H26.6667ZM0 48V32H21.3333V48H0Z"
                  fill="#0AA6A5"
                />
              </svg>

              <p className="text-[32px] font-normal text-four">
                Provider Dashboard
              </p>
              <p className="text-[20px] font-normal text-eight">
                Let service providers connect with users and handle requests
                seamlessly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* how it works */}
    <div id="Work" className="w-screen py-10 px-6 md:px-8 bg-elven">
  <p
    className="text-center font-normal text-six text-[32px] md:text-[48px]"
    data-aos="zoom-in-up"
  >
    How Does sea go Work?
  </p>
  <p
    className="text-center font-normal text-seven text-[18px] md:text-[24px] my-5 max-w-3xl mx-auto"
    data-aos="fade-up"
  >
    We harness technology to connect all stakeholders in a tourist village
    through one integrated digital system—from the moment a visitor
    arrives, to exploring services, and managing operations.
  </p>

  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 py-10 overflow-hidden">
    <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[650px] h-[400px] sm:h-[500px] md:h-[635px]">
      {/* Center Image */}
      <img
        src={cirlc} // الصورة اللي انت عايزها في النص
        alt="center"
        className="absolute top-1/2 left-1/2 rounded-full border-4 border-white shadow-xl -translate-x-1/2 -translate-y-1/2 z-10"
      />

      {/* Images around the circle */}
      <div
        className="absolute z-10 top-1/2 left-1/2 w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }}
      >
        {images.map((item, i) => {
          
          let radius = 140; // default small radius for mobile
          if (window.innerWidth >= 768) radius = 280; // md and up

          const totalImages = images.length;
          const selectedIndex = images.findIndex(
            (img) => img.title === selected.title
          );

          const relativeIndex =
            (i - selectedIndex + totalImages) % totalImages;

          const angleDeg =  relativeIndex * (360 / totalImages);
          const angleRad = (angleDeg * Math.PI) / 180;

          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          const isActive = i === selectedIndex;
          return (
            <div
              key={i}
              onClick={() => handleImageClick(item)}
              className={`flex items-center justify-center w-[80px] sm:w-[110px] md:w-[150px] h-[80px] sm:h-[110px] md:h-[150px] rounded-full border-2 absolute cursor-pointer transition-transform hover:scale-110
                ${
                  isActive
                    ? "bg-four text-white shadow-2xl scale-110"
                    : "bg-five text-four shadow-md"
                }
              `}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%) rotate(-${rotation}deg)`,
              }}
            >
              <item.src
                className={`${
                  isActive
                    ? "bg-four text-white scale-110"
                    : "bg-five text-four"
                } w-6 sm:w-9 md:w-12 h-6 sm:h-9 md:h-12`}
              />
            </div>
          );
        })}
      </div>
    </div>

    <div className="text-start max-w-xl px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-four mb-2">
        {selected.title}
      </h2>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] text-ten">
        {selected.desc}
      </p>
    </div>
  </div>
</div>


      {/* who we are */}
      <div id="About" className="w-screen py-10 px-8">
        <p
          className="text-center font-normal text-six text-[48px]"
          data-aos="zoom-in-up"
        >
          Who We Are{" "}
        </p>
        <p
          className="text-center font-normal text-seven text-[24px] my-5"
          data-aos="fade-up"
        >
          To be the trusted partner in developing tourist villages by delivering
          modern technologies that enrich the visitor experience and streamline
          operations.
        </p>
        <div className=" flex flex-wrap justify-center gap-4 ">
          {/*  */}

          <div className="w-100 h-100 bg-elven flex flex-col gap-2 items-center justify-center p-2">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M99.625 48.25C91.4167 30.4583 72.9167 12.5 50 12.5C27.0833 12.5 8.58333 30.4583 0.375 48.25C0.127806 48.8003 0 49.3967 0 50C0 50.6033 0.127806 51.1997 0.375 51.75C8.58333 69.5417 27.0833 87.5 50 87.5C72.9167 87.5 91.4167 69.5417 99.625 51.75C99.8722 51.1997 100 50.6033 100 50C100 49.3967 99.8722 48.8003 99.625 48.25ZM50 70.8333C45.8796 70.8333 41.8516 69.6115 38.4256 67.3223C34.9996 65.0331 32.3293 61.7794 30.7525 57.9726C29.1757 54.1658 28.7631 49.9769 29.567 45.9356C30.3708 41.8943 32.355 38.1822 35.2686 35.2686C38.1822 32.355 41.8943 30.3708 45.9356 29.567C49.9769 28.7631 54.1658 29.1757 57.9726 30.7525C61.7794 32.3293 65.0331 34.9996 67.3223 38.4256C69.6115 41.8516 70.8333 45.8796 70.8333 50C70.8267 55.5233 68.6297 60.8185 64.7241 64.7241C60.8185 68.6297 55.5233 70.8267 50 70.8333Z"
                fill="#0AA6A5"
              />
              <path
                d="M50 62.5C56.9036 62.5 62.5 56.9036 62.5 50C62.5 43.0964 56.9036 37.5 50 37.5C43.0964 37.5 37.5 43.0964 37.5 50C37.5 56.9036 43.0964 62.5 50 62.5Z"
                fill="#0AA6A5"
              />
            </svg>
            <p
              className=" text-start w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
              Our Vision{" "}
            </p>
            <p
              className=" font-normal text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              To be the trusted partner in developing tourist villages by
              delivering modern technologies that enrich the visitor experience
              and streamline operations.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-2 items-center justify-center p-2">
            <svg
              width="100"
              height="81"
              viewBox="0 0 100 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 38.2869C0.213003 37.8006 0.112942 37.2728 0.15009 36.7716C0.341823 34.2494 0.840928 31.7911 1.5045 29.3564C2.24417 26.6407 3.2996 24.0517 4.59828 21.5625C5.85383 19.1584 7.34845 16.9109 9.06595 14.8115C11.7547 11.5287 14.8754 8.72221 18.4408 6.42294C20.9791 4.78633 23.6778 3.46129 26.5226 2.41935C29.2826 1.40767 32.123 0.759676 35.0172 0.334273C36.0844 0.176095 37.1742 0.142543 38.2569 0.0775344C39.1979 0.021513 40.1377 -0.0246221 41.0772 0.0146229C43.1895 0.103598 45.2917 0.26567 47.3828 0.641043C50.1485 1.13954 52.8232 1.90797 55.4266 2.9538C58.9775 4.3831 62.2454 6.3031 65.2469 8.67997C66.7619 9.88009 68.2061 11.1614 69.5246 12.5715C70.8841 14.0245 72.1477 15.5619 73.2984 17.1883C73.48 17.4436 73.4425 17.57 73.1894 17.7174C71.1663 18.8801 69.1471 20.0424 67.1366 21.2249C66.8077 21.4187 66.69 21.197 66.5557 21.0128C65.4692 19.511 64.269 18.1081 62.9263 16.8351C60.8394 14.857 58.5509 13.1533 56.0326 11.751C53.4829 10.3319 50.7855 9.3022 47.961 8.60058C46.331 8.19615 44.6773 7.93012 42.9984 7.8079C41.9001 7.72791 40.8046 7.60209 39.7045 7.64852C35.4729 7.82677 31.374 8.61646 27.4642 10.3109C24.3923 11.6407 21.5804 13.3756 19.0516 15.5544C16.14 18.0613 13.72 20.9876 11.8308 24.3348C9.93564 27.6901 8.68878 31.2905 8.05936 35.0868C7.70765 37.2272 7.5246 39.3977 7.64473 41.5709C7.86493 45.5861 8.68878 49.4642 10.282 53.1781C11.4347 55.8611 12.9006 58.3539 14.7188 60.6229C17.3542 63.9147 20.4935 66.6508 24.179 68.7368C26.8722 70.2604 29.7179 71.3976 32.7272 72.1121C34.3 72.4845 35.8908 72.746 37.5038 72.8677C38.5709 72.9465 39.635 73.0735 40.7045 73.0274C43.9739 72.8928 47.1857 72.4369 50.3139 71.4114C53.4158 70.3931 56.2969 68.9528 58.9718 67.0939C60.1141 66.2967 61.1789 65.4042 62.2226 64.4803C64.2894 62.6523 66.0237 60.5448 67.5429 58.2569C68.9356 56.1604 70.0594 53.9234 70.9195 51.5523C71.5678 49.753 72.066 47.9222 72.4033 46.0415C72.586 45.0244 72.6615 43.9954 72.7924 42.9741C72.9012 42.1185 72.8608 41.2605 72.9102 40.4076C72.9692 39.3501 72.8551 38.2773 72.7607 37.2159C72.6004 35.431 72.2685 33.6739 71.8089 31.9415C71.415 30.4519 70.9108 29.0038 70.3098 27.5889C70.181 27.2863 70.2199 27.1398 70.5153 26.9726C72.5123 25.8354 74.5001 24.6826 76.4833 23.5203C76.7643 23.3567 76.8578 23.4049 76.9887 23.694C78.2613 26.4888 79.1939 29.3905 79.7862 32.401C80.2233 34.6071 80.4501 36.8291 80.5363 39.081C80.5942 40.6766 80.5382 42.2626 80.4246 43.8393C80.2485 46.2182 79.8186 48.5693 79.187 50.8779C78.3877 53.8135 77.2958 56.6325 75.8581 59.3099C74.5288 61.7826 72.9851 64.1106 71.1546 66.2488C70.1936 67.3716 69.2211 68.4785 68.1465 69.4926C66.0564 71.4626 63.8053 73.2221 61.3499 74.7254C58.799 76.2889 56.1171 77.5555 53.2852 78.5193C50.6479 79.4147 47.949 80.0324 45.1854 80.3644C44.5104 80.4459 43.8393 80.5678 43.1656 80.6702C41.6695 80.6702 40.171 80.6702 38.6748 80.6702C38.5751 80.5519 38.4376 80.5852 38.3118 80.5852C37.0143 80.5765 35.7228 80.4671 34.4492 80.2619C31.7503 79.8308 29.1044 79.1975 26.5274 78.2595C23.6784 77.2206 20.9839 75.8916 18.4441 74.255C14.8787 71.9567 11.758 69.1493 9.06955 65.8656C7.35055 63.7679 5.85593 61.5181 4.60038 59.1158C3.30199 56.6253 2.24627 54.0358 1.5066 51.3213C0.843323 48.8854 0.344221 46.4291 0.152189 43.9046C0.11504 43.404 0.215099 42.8773 0.00209592 42.3896C-1.15202e-06 41.022 0 39.6541 0 38.2869Z"
                fill="#0AA6A5"
              />
              <path
                d="M99.9996 11.8227C98.8606 12.4701 97.7174 13.1097 96.5832 13.764C94.2687 15.0983 91.9598 16.4386 89.6485 17.7768C89.2279 18.0201 88.7647 18.2103 88.3953 18.515C87.5721 19.1956 86.7165 19.1579 85.7722 18.8281C84.9816 18.5521 84.1539 18.3832 83.3531 18.1345C83.0364 18.0375 82.7977 18.1217 82.5379 18.2726C78.9223 20.3628 75.3039 22.447 71.6882 24.5375C67.4866 26.97 63.2889 29.4119 59.083 31.8427C56.3655 33.4137 53.6396 34.9667 50.9194 36.5362C48.1165 38.1552 45.3133 39.7741 42.5245 41.4161C41.4892 42.0266 40.4496 41.899 39.8388 41.0842C39.2109 40.2492 39.3795 39.0431 40.2708 38.4913C41.5503 37.7013 42.8649 36.9685 44.1677 36.2154C47.3071 34.4005 50.4476 32.5905 53.5857 30.7744C56.0797 29.3307 58.5648 27.8742 61.0615 26.4338C64.1031 24.6792 67.155 22.9416 70.1966 21.1852C73.7293 19.1441 77.2548 17.0878 80.7902 15.0519C81.0616 14.8946 81.1727 14.69 81.2446 14.4149C81.5613 13.2301 81.8965 12.0495 82.194 10.8589C82.2551 10.6163 82.3812 10.5048 82.5694 10.397C85.2219 8.87122 87.872 7.34306 90.5242 5.814C92.02 4.95241 93.5134 4.08693 95.0874 3.1792C94.9098 4.25649 94.7546 5.24989 94.5817 6.23941C94.3792 7.38231 94.1641 8.52191 93.958 9.66331C93.9059 9.93832 93.9334 10.1396 94.2821 10.2298C96.1899 10.7154 98.0952 11.2244 99.9994 11.7241C99.9997 11.7577 99.9996 11.7903 99.9996 11.8227Z"
                fill="#0AA6A5"
              />
              <path
                d="M15.8388 40.696C15.8076 36.202 16.7915 32.3353 18.7348 28.7199C20.3265 25.7589 22.456 23.2409 25.092 21.1436C28.0983 18.7526 31.4788 17.1771 35.2262 16.3755C37.2928 15.9321 39.3934 15.7305 41.5013 15.8629C46.8533 16.1996 51.6499 18.0148 55.8207 21.4132C57.167 22.5118 58.3734 23.7544 59.4501 25.1214C59.6814 25.4147 59.673 25.5549 59.315 25.758C57.0598 27.0315 54.8192 28.3296 52.5852 29.6388C52.3042 29.8026 52.1787 29.7945 51.9486 29.5486C49.3818 26.8056 46.2323 25.1094 42.5226 24.5696C39.5004 24.1292 36.5531 24.5396 33.7613 25.8389C29.3892 27.8733 26.4973 31.2107 25.0372 35.7945C24.4482 37.639 24.2792 39.5474 24.4182 41.4617C24.6624 44.8131 25.8352 47.8218 27.9976 50.4128C30.7163 53.6794 34.1816 55.6303 38.4135 56.1339C42.6939 56.6429 46.5738 55.5533 49.978 52.9248C53.2826 50.373 55.2665 46.9979 55.966 42.8706C56.3594 40.5501 56.2176 38.267 55.567 36.0114C55.5013 35.7834 55.4912 35.6687 55.7482 35.5231C58.0667 34.2002 60.3732 32.8538 62.6778 31.5057C62.9394 31.3527 63.0382 31.3715 63.1539 31.6795C63.8034 33.3775 64.2411 35.1217 64.4864 36.923C64.6835 38.3709 64.8046 39.8218 64.7324 41.2798C64.5871 44.2885 63.9714 47.1977 62.7761 49.9748C61.7749 52.2981 60.4567 54.4233 58.8156 56.3421C57.2908 58.1273 55.5163 59.6285 53.5472 60.9065C50.9911 62.5659 48.2233 63.7187 45.2452 64.3217C43.4084 64.6965 41.5405 64.8996 39.6559 64.8256C37.3347 64.7366 35.0624 64.3762 32.8455 63.6725C30.1654 62.8229 27.7055 61.55 25.4775 59.8397C22.8244 57.8062 20.6648 55.34 19.0033 52.4263C17.4427 49.6884 16.4832 46.7624 16.0284 43.6618C15.8672 42.5548 15.7873 41.4398 15.8388 40.696Z"
                fill="#0AA6A5"
              />
              <path
                d="M40.0123 32.2178C41.8086 32.1588 43.3188 32.6663 44.7019 33.5908C45.1977 33.9218 45.178 33.9368 44.6831 34.2208C42.9754 35.2061 41.2409 36.1537 39.583 37.2199C37.9586 38.2648 37.6294 40.2675 38.6992 41.8643C39.6962 43.352 41.657 43.7265 43.2615 42.7678C44.7346 41.8879 46.2322 41.0518 47.7094 40.1788C48.0938 39.9509 48.1687 40.056 48.1498 40.4526C48.0584 42.4907 47.3433 44.2588 45.9278 45.7414C44.2741 47.4664 42.2292 48.2959 39.8724 48.2211C35.8364 48.0925 32.6372 44.9976 32.2007 41.2292C32.0221 39.6692 32.2165 38.1833 32.8699 36.7864C33.757 34.8972 35.1839 33.5246 37.1432 32.7531C38.0985 32.3769 39.0884 32.1387 40.0123 32.2178Z"
                fill="#0AA6A5"
              />
            </svg>

            <p
              className=" text-start w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
              Our Mission{" "}
            </p>
            <p
              className=" font-normal text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
              To empower tourist villages with innovative digital solutions that
              enhance operations and improve visitor engagement.
            </p>
          </div>
          <div className="w-100 h-100 bg-elven flex flex-col gap-2 items-center justify-center p-2">
            <svg
              width="125"
              height="100"
              viewBox="0 0 125 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_977_1520)">
                <path
                  d="M95.3126 37.3242H65.6251L65.6251 47.4532C65.6251 54.8086 60.336 61.5156 53.0177 62.252C44.6017 63.0983 37.5001 56.5059 37.5001 48.2617V24.6875L32.713 27.5645C24.0626 32.7735 18.7579 42.1289 18.7579 52.2461L3.13289 61.2891C0.154373 62.9983 -0.896408 66.8321 0.837967 69.8106L16.463 96.8809C18.1964 99.8594 22.0294 100.885 25.0079 99.1758L45.2032 87.5059H71.8829C78.7677 87.5059 84.3829 81.8906 84.3829 75.0059C89.5606 75.0059 93.7579 70.8086 93.7579 65.6309V56.25H95.3204C97.9083 56.25 100.008 54.1504 100.008 51.5625L100.008 42.1875C100 39.5899 97.9102 37.3242 95.3126 37.3242ZM124.16 30.1758L108.545 3.10549C106.812 0.126977 102.979 -0.898413 100 0.810571L79.8048 12.4805H67.5841C60.1915 12.4805 52.9493 14.5528 46.6661 18.4629C44.8634 19.6094 43.7501 21.6016 43.7501 23.75L43.75 48.4375C43.75 52.7598 47.2422 56.25 51.5625 56.25C55.8848 56.25 59.375 52.7578 59.375 48.4375V31.0742H95.3125C101.354 31.0742 106.25 35.9707 106.25 42.0117V47.5782L121.875 38.5449C124.863 36.9922 125.879 33.1641 124.16 30.1758Z"
                  fill="#0AA6A5"
                />
              </g>
              <defs>
                <clipPath id="clip0_977_1520">
                  <rect width="125" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p
              className=" text-start w-full font-normal text-six text-[32px]"
              data-aos="zoom-in-up"
            >
              Our Values{" "}
            </p>
            <p
              className=" font-normal text-start text-seven text-[20px] my-5"
              data-aos="fade-up"
            >
              {" "}
              We value innovation, collaboration, and sustainability—delivering
              creative, eco-friendly solutions through strong partnerships with
              our clients.
            </p>
          </div>
        </div>
      </div>
      {/* Customer */}
      <div  id="Testimonials" className="w-screen py-10 px-8 bg-elven">
        <p
          className="text-center font-normal text-six text-[48px]"
          data-aos="zoom-in-up"
        >
          Customer Testimonials{" "}
        </p>
        <p
          className="text-center font-normal text-seven text-[24px] my-5"
          data-aos="fade-up"
        >
          At sea go, we proudly serve tourist villages worldwide. Hear from our
          clients about how our digital solutions have enhanced their operations
          and boosted visitor satisfaction.
        </p>

        <div className=" flex flex-wrap justify-center  ">
          {/*  */}

          <div className="w-120  h-50 lg:h-100 bg-elven flex gap-5 items-center justify-center p-2">
            <img src={man} />
            <div>
              <div className="text-four text-2xl py-2">★★★★☆</div>
              <p
                className=" text-start w-full font-normal text-seven text-[18px]"
                data-aos="zoom-in-up"
              >
                sea Go changed how I explore my hometown!{" "}
              </p>
              <p
                className=" font-normal text-start text-seven text-[16px] my-2"
                data-aos="fade-up"
              >
                Jenny Wilson
              </p>
            </div>
          </div>
          {/* -- */}

          <div className="w-120 h-50 lg:h-100 bg-elven flex gap-5 items-center justify-center p-2">
            <img src={mantwo} />
            <div>
              <div className="text-four text-2xl py-2">★★★★★</div>
              <p
                className=" text-start w-full font-normal text-seven text-[18px]"
                data-aos="zoom-in-up"
              >
                sea Go changed how I explore my hometown!{" "}
              </p>
              <p
                className=" font-normal text-start text-seven text-[16px] my-2"
                data-aos="fade-up"
              >
                Jenny Wilson
              </p>
            </div>
          </div>
          {/* -- */}

          <div className="w-120 h-50 lg:h-100 bg-elven flex gap-5 items-center justify-center p-2">
            <img src={manthree} />
            <div>
              <div className="text-four text-2xl py-2">★★★★★</div>
              <p
                className=" text-start w-full font-normal text-seven text-[18px]"
                data-aos="zoom-in-up"
              >
                sea Go changed how I explore my hometown!{" "}
              </p>
              <p
                className=" font-normal text-start text-seven text-[16px] my-2"
                data-aos="fade-up"
              >
                Jenny Wilson
              </p>
            </div>
          </div>
          {/* -- */}
        </div>
      </div>
      {/*Frequently Asked Questions      */}
      <div  className="w-screen py-10   overflow-hidden">
        <p
          className="text-center font-normal text-six text-[48px]"
          data-aos="zoom-in-up"
        >
          Frequently Asked Questions{" "}
        </p>
        <p
          className="text-center font-normal text-black text-[24px] my-5"
          data-aos="fade-up"
        >
          We’re here to answer your questions and help you better understand our
          services
        </p>
        <div className="w-full px-10 mx-auto flex flex-col gap-5">
          {data.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className=" bg-elven   ">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-xl font-semibold text-threeteen p-4 w-full">
                    {item.label}
                  </h3>
                  <span className="text-2xl text-threeteen p-4">
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                <div className="h-4 bg-white w-full " />
                {isOpen && (
                  <div className="mt-3">
                    <p className="text-[18px] p-2 text-threeteen">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* boxs */}
      <div className="w-screen py-10 px-8 flex gap-30 flex-wrap justify-center bg-elven">
        <div className="flex flex-col  ">
          <p className=" text-[20px] font-normal">Supported Villages</p>
          <p className="text-four text-center text-[48px] font-normal">50+ </p>
        </div>
        <div className="flex flex-col ">
          <p className=" text-[20px] font-normal">Active Users </p>
          <p className="text-four text-center text-[48px] font-normal">10K+ </p>
        </div>
        <div className="flex flex-col ">
          <p className=" text-[20px] font-normal">Service Providers </p>
          <p className="text-four text-center text-[48px] font-normal">500+ </p>
        </div>
        <div className="flex flex-col ">
          <p className=" text-[20px] font-normal">Check-ins Recorded </p>
          <p className="text-four  text-center text-[48px] font-normal">30K+ </p>
        </div>
       
        <div className="flex flex-col ">
          <p className=" text-[20px] font-normal">User Satisfaction </p>
          <p className="text-four  text-center text-[48px] font-normal">95% </p>
        </div>
      </div>
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
    <p className="text-four font-normal w-full text-start text-[32px] lg:text-[48px] mb-4">Contact Us</p>
    <p className="text-seven font-normal text-[18px] lg:text-[24px] mb-4">
      <span className="text-four">sea go</span> makes it simple for tourist villages and service providers
      to connect with visitors and improve operations. Follow these easy steps to get started.
    </p>

    {/* الفورم الكامل */}
    <div className="w-full">
      <label className="text-seven text-[14px] font-normal w-full text-start py-2 block">Name:</label>
      <input type="text" placeholder="Your Name" className="w-full rounded-3xl p-3 border mb-2" />

      <label className="text-seven text-[14px] font-normal w-full text-start py-2 block">Email:</label>
      <input type="email" placeholder="Your Email" className="w-full rounded-3xl p-3 border mb-2" />

      <label className="text-seven text-[14px] font-normal w-full text-start py-2 block">Phone:</label>
      <input type="number" placeholder="Your Phone" className="w-full rounded-3xl p-3 border mb-2" />

      <label className="text-seven text-[14px] font-normal w-full text-start py-2 block">Message:</label>
      <textarea placeholder="How can we help?" className="w-full rounded-3xl p-3 border h-24 resize-none" />
    </div>
    <button className="bg-fourteen px-5 py-2 text-white text-[24px] font-normal rounded-3xl hover:scale-90 delay-100 transform transition ease-in w-100 mt-6 mb-2">Send Message</button>
  </div>
</div>
<div   data-aos="fade-down">
<Footer/>
</div>
    </div>
  );
};

export default Home;
