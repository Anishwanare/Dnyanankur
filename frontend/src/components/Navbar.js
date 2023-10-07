import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import News from "./News";
import {BiUserCircle} from "react-icons/bi"
import toast from "react-hot-toast";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    navigate("/", { replace: true });
    // window.location.reload();
    toast("Successfully Logout")
  };

  const onClickMenu = () => {
    setMenu((prev) => !prev);
  };

  const [clickUser , setClickUser] = useState(false);

  const handleClickUser = ()=>{
    setMenu(false)
    setClickUser((preve)=>!preve)
  }

  return (
    <div className="">
      <div>
        <News news="Welcome to our website! I'm Dnyaneshwar Sontakke, delighted to have you here. Explore, engage, and enjoy your visit.from Dnyneshwar Sontakke" />
      </div>
      <div className="my-8 flex flex-row md:flex-row justify-between items-center h-20 uppercase px-10 fixed top-0 w-full z-20 bg-gradient-to-l from-[#FDBF01] to-[#C7DEFF]">
        <div className="md:mb-0 text-white">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-16 md:w-20" />
          </Link>
        </div>
        <div className="flex items-center justify-between text-4xl">
          <div
            className={`flex items-center justify-between cursor-pointer md:hidden`}
            onClick={onClickMenu}
          >
            {menu ? <FaTimes /> : <BiMenu />}
          </div>
          <div
            className={`${
              menu ? "block" : "hidden"
            } md:flex mt-4 md:mt-0 md:relative z-50`}
          >
            <ul
              onClick={onClickMenu}
              className={`flex flex-col items-center h-screen md:h-0 whitespace-nowrap md:flex-row gap-8 md:gap-10 text-lg md:text-2xl font-semibold md:right-0 md:static absolute top-20 right-0 px-10 py-5 z-0 bg-gradient-to-r md:bg-none from-[#FDBF01] to-[#e7cd92]`}
            >
              <li>
                <Link to={"/"} className="active:text-white focus:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/nmms"}
                  className="active:text-white focus:text-white"
                >
                  NMMS
                </Link>
              </li>
              {authToken ? (
                <>
                  <li>
                    <Link
                      to={"/quiz"}
                      className="active:text-white focus:text-white"
                    >
                      Test
                    </Link>
                  </li>
                  <li
                    className="text-4xl relative active:text-white"
                    onClick={handleClickUser}
                  >
                    <BiUserCircle />
                  </li>
                  {clickUser ? (
                    <div className="absolute top-60 rounded-xl md:left-72 md:top-10 flex flex-col gap-2 md: bg-gray-700 p-2">
                      <li className="active:text-white text-white p-1 rounded-lg cursor-pointer focus:text-white" onClick={()=>{toast("Comming Soon")}}>
                        DashBoard
                      </li>
                      <hr className="" />
                      <li
                        onClick={handleLogout}
                        className="active:text-white text-white p-1 rounded-lg cursor-pointer bg-red-700 focus:text-white"
                      >
                        LogOut
                      </li>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to={"/login"}
                      className="active:text-white focus:text-white text-blue-700 hover:underline"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/signup"}
                      className="active:text-white focus:text-white text-blue-700 hover:underline"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
