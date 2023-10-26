import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineUser} from "react-icons/ai";
import {BsBag} from "react-icons/bs"
import { RiAdminFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Navbar() {
  const [scrolled, setscrolled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const ClickChecker = () => {
    setClicked(!clicked);
  };
  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
    if (window.scrollY <= 100 && window.innerWidth >= 1024) {
      setClicked(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  const linkStyle =
    "py-2 px-4  font-poppins font-[300] cursor-pointer hover:text-white  hover:rounded-full hover:bg-green-800  duration-300 ";

  const linkStyle2 = "flex text-2xl cursor-pointer hover:text-5xl";
  return (
    <div
      className="flex top-0 absolute md:relative lg:absolute w-[100%] px-4 md:px-12 lg:px-20  2xl:px-60 py-3   justify-between h-[75px] md:h-[90px] lg:h-[100px] items-center z-[100] shadow-md lg:shadow-none "
    >
      <motion.div
       initial={{ x: "-100%" }}
       animate={{ x: "0%" }}
       transition={{ duration: 0.5, ease: "easeOut" }}
       exit={{ opacity: 0 }}
       className="flex w-[20%] h-[100%]">
        <Link to='/'>
        <img
          src={logo}
          alt="logo"
          className="w-[100%] h-[100%] object-contain cursor-pointer"
        />
        </Link>
      </motion.div>

      <motion.div  initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="flex  h-auto w-[60%] justify-center items-center">
        <ul className="hidden lg:flex gap-10  text-green-800  capitalize font-poppins font-[500] tracking-wide">
        <Link to='/'> <li className={linkStyle}>home</li></Link>
          <li className={linkStyle}>about</li>
          <li className={linkStyle}>Services</li>
          <li className={linkStyle}>contact</li>
        </ul>
      </motion.div>

      <motion.div
       initial={{ x: "-100%" }}
       animate={{ x: "0%" }}
       transition={{ duration: 0.5, ease: "easeOut" }}
       exit={{ opacity: 0 }} className="hidden  w-[20%] lg:flex   items-center   text-white text-xl justify-end ">
        <Link
          to="/sign-up"
          className="flex  text-green-900  p-3 "
        >
          <AiOutlineUser/>
        </Link>
        <Link
          to="/admin"
          className=" flex bg-green-900   p-3 "
        >
          <RiAdminFill />
        </Link>

        <Link
          to="/cart"
          className=" flex  text-green-900 rounded-full  py-3 px-3 "
        >
          <BsBag />
        </Link>

      </motion.div>

      <motion.div
       initial={{ x: "-100%" }}
       animate={{ x: "0%" }}
       transition={{ duration: 0.5, ease: "easeOut" }}
       exit={{ opacity: 0 }}
        className="lg:hidden flex w-max h-max justify-center items-center text-3xl md:text-4xl  z-[99] cursor-pointer text-green-800  linear duration-300"
        onClick={() => setClicked(!clicked)}
        style={{ rotate: clicked ? "90deg" : "0deg" }}
      >
        {clicked ? <AiOutlineClose /> : <HiOutlineBars3BottomRight />}
      </motion.div>



      <div className="z-50 fixed flex-col " onClick={ClickChecker}>
        <div
          className="flex fixed right-5 w-[50px] h-[50px] bg-green-700 rounded-[100%] text-white text-xl justify-center items-center z-50  linear duration-300 "
          style={{
            top: scrolled ? "40px" : "-100px",
            rotate: clicked ? "90deg" : "0deg",
          }}
        >
          {clicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div
          className=" flex  flex-col items-center fixed  h-[100vh]  top-[0] right-0 bg-[#ffffffb6] overflow-hidden  backdrop-blur rounded-md ease-in-out duration-700 overflow-y-visible"
          style={{ width: clicked ? "100vw" : "0px" }}
        >
          <ul
            className=" flex  font-libre uppercase h-[80%] text-green-800 flex-col  justify-center items-center py-10 px-4 gap-10 linear duration-[1000ms]"
            style={{
              width: clicked ? "100%" : "0px",
              color: clicked ? "rgb(22 101 52 )" : "white",
            }}
          >
           <Link to='/'> <li className={linkStyle2}>home</li></Link>
            <li className={linkStyle2}>About</li>
            <li className={linkStyle2}>Services</li>
            <li className={linkStyle2}>contact</li>
          </ul>

          <Link
            to="/sign-up"
            className="flex w-[10%] py-3 px-3 bg-green-900  justify-center items-center rounded-md font-poppins text-white text-2xl top-0"
          >
            <CiUser />
          </Link>

          <Link
            to="/admin"
            className="flex w-[10%] py-3 px-3 bg-green-900  justify-center items-center rounded-md font-poppins text-white text-2xl top-0"
          >
            <RiAdminFill />
          </Link>
          <Link
            to="/cart"
            className="flex w-[10%] py-3 px-3   justify-center items-center rounded-md font-poppins text-green-900 text-2xl top-0"
          >
            <BsBag />
          </Link>
        </div>
      </div>
    </div>
  );
}
