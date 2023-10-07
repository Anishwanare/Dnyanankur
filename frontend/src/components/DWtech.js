import React from "react";

const DWtech = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-white">D&Wtech</h1>
            <p className="mt-2 text-gray-300">
              Innovate the Future with D&Wtech
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-white">Contact Us</h2>
            <a href="mailto:anishwanare9@gmail.com" className="text-gray-300">
              Email:
              anishwanare9@gmail.com
            </a>
            <br />
            <a href="tel:9767722793" className="text-gray-300">
              contact: 9767722793
            </a>
            <br />
            <a href="tel:7030878963" className="text-gray-300">
              contact: 7030878963
            </a>
          </div>
        </div>
        <hr className="border-t border-gray-700 my-6" />
        <div className="text-center text-gray-300">
          &copy; {new Date().getFullYear()} D&Wtech. All Rights Reserved.
        </div>
        <div className="text-center mt-2">
          <p className="text-gray-500">Website By: D&Wtech</p>
        </div>
      </div>
    </footer>
  );
};

export default DWtech;
