import React from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <div className="bg-blue-900 px-4 py-8 md:px-8 xl:px-10 2xl:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-around text-white">
        {/* Home Link */}
        <div className="w-full md:w-1/3 flex items-center space-x-4 mb-6 md:mb-0">
          <Link to="/" className="md:text-3xl hover:text-blue-300">
            Home
          </Link>
          <Link to="/nmms" className="md:text-3xl hover:text-blue-300">
            NMMS
          </Link>
        </div>

        {/* Contact Item 1: Phone */}
        <div className="w-full md:w-1/3 flex items-center space-x-4 mb-6 md:mb-0">
          <FaPhone className="md:text-3xl" />
          <div className="md:text-xl">
            <p className="font-semibold">Call us:</p>
            <div className="flex flex-col">
              <a href="tel:8805754219" className="hover:text-blue-300">
                9623161432
              </a>
            </div>
          </div>
        </div>

        {/* Contact Item 2: Email */}
        <div className="w-full md:w-1/3 flex items-center space-x-4 mb-6 md:mb-0">
          <FaEnvelope className="md:text-3xl" />
          <div className="md:text-xl">
            <p className="font-semibold">Email:</p>
            <a
              href="mailto:dnyanankurdms@gmail.com"
              className="hover:text-blue-300"
            >
              dnyanankurdms@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Item 3: Location */}
        <div className="w-full md:w-1/3 flex items-center space-x-4">
          <FaMapMarker className="md:text-3xl" />
          <div className="md:text-xl">
            <p className="font-semibold">Visit us:</p>
            <p className="break-words text-sm">
              (Pathrot) Dist: Amravati Tq: Achalpur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
