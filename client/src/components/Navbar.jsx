import React, { useState } from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import logo from "../../images/logo.png"

const NavbarItem = ({title,classProps})=>{
  return (
    <li className={`mx-5   cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
}

function Navbar() {
  const [toggle,setToggle] = useState(false);

  return (
   <nav className="w-full flex md:justify-center justify-between items-center">
    <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <img src={logo} alt="logo" className="w-32 cursor-pointer" />
    </div>
    <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      {["Market","Exchange","Tutorials","Wallets"].map((items,index)=>(
        <NavbarItem key={index+items} title={items} />
        ))}
        <li className="mx-5 w-15 text-center rounded-full cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
          Login
        </li>
    </ul>
    <div className="flex-relative">
    {!toggle && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggle(false)} />
        )}
        {toggle && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggle(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavbarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
    </div>
   </nav>
  )
}

export default Navbar
