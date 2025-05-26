import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // روابط التنقل مع تحديد hash للروابط التي تستهدف أقسام في الصفحة الرئيسية
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Services", subLinks: true },
    { name: "About Us", path: "/#About" },
    { name: "Testimonials", path: "/#Testimonials" },
    { name: "Contact Us", path: "/#Contact" },
    { name: "How Does It Work?", path: "/#Work" },
  ];

  const servicesLinks = [
    { name: "User App", path: "/user" },
    { name: "Gatekeeper App", path: "/gatekeeperApp" },
    { name: "Village Dashboard", path: "/villageDashboard" },
    { name: "Provider Dashboard", path: "/providerDashboard" },
  ];

  const currentService = servicesLinks.find((service) =>
    location.pathname.startsWith(service.path)
  );

  const isInServices = Boolean(currentService);

  const isActive = (path) => {
    const cleanPath = path.split("#")[0];
    return location.pathname == !cleanPath;
  };

  return (
    <nav className=" open-sans-light bg-two text-three/60 backdrop-blur z-50  w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:gap-5 lg:justify-start lg:gap-30 h-[88px] items-center">
          <div className=" open-sans-bold text-[20px] md:text-[20px] lg:text-[40px] text-one font-bold">
            Sea Go
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-5 relative">
            {navLinks.map((link, i) => {
              if (link.subLinks) {
                return (
                  <div
                    key={i}
                    className="relative"
                    onClick={() => setDropdownOpen((p) => !p)}
                  >
                    <button
                      className={`relative md:text-[14px] lg:text-[16px] xl:text-[20px] font-normal group px-3 py-2 inline-block ${
                        isInServices ? "text-one " : ""
                      }`}
                    >
                      {isInServices ? currentService.name : link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-one transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    {dropdownOpen && (
                      <div className="absolute left-0 mt-10 w-[230px] bg-two flex flex-col shadow-lg rounded-[24px] py-2 z-[9999]">
                        {servicesLinks.map((service, idx) => (
                          <Link
                            to={service.path}
                            key={idx}
                            onClick={() => {
                              setDropdownOpen(false);
                            }}
                            className="flex items-center justify-between px-3 py-2 text-three/80 text-[20px] hover:text-three transition w-full text-left"
                          >
                            {service.name}
                            <MdArrowOutward className="text-three w-5 h-5" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative md:text-[14px] lg:text-[16px] xl:text-[20px] font-normal group px-2 py-2 ${
                    isActive(link.path) ? "text-one " : ""
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-one transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-two backdrop-blur">
          {navLinks.map((link, i) => {
            if (link.subLinks) {
              return (
                <div key={i}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`w-full flex justify-between items-center px-3 py-2 font-normal rounded ${
                      isInServices
                        ? "bg-one text-white"
                        : "text-three/80 hover:bg-one hover:text-white"
                    }`}
                  >
                    {isInServices ? currentService.name : link.name}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {servicesLinks.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setIsOpen(false);
                            navigate(service.path);

                            setMobileDropdownOpen(false);
                          }}
                          className="block px-3 py-2 text-three/80 hover:bg-one hover:text-white rounded"
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={i}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded font-normal group relative ${
                  isActive(link.path)
                    ? "bg-one text-white"
                    : "text-three/80 hover:bg-one hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Nav;
