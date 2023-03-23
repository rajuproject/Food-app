import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from '../img/avatar.png'
import { motion } from "framer-motion";

import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";


import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "./context/StateProvider";


function Header() {

 const [isMenu, setIsMenu] = useState(true)

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    // const [{user}, dispatch] = useStateValue()

    const logIn = async () =>{
        const response = await signInWithPopup(firebaseAuth, provider)
        console.log(response)
    }
  return (
    <header className="fixed w-screen bg-primary z-50 p-3 px-4 md:p-6 md:px-16">
      {/* destop & taplet  */}
      <div className="hidden md:flex w-full h-full  justify-between">
        <Link to="/" className="flex  items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 object-cover" />
          <p className="text-slate-900 text-xl font-bold">TestMe</p>
        </Link>
        <div className="flex justify-center items-center">
          <motion.ul initial = {{opacity: 0, x:200}} 
          animate = {{opacity: 1, x:0}}
          exit = {{opacity: 0, x:200}}  
          className="flex items-center gap-8">
            <li className="text-base font-bold  text-headingColor hover:text-textColor  ease-in-out cursor-pointer transition-all duration-100">
              Home
            </li>
            <li className="text-base font-bold text-headingColor hover:text-textColor  ease-in-out cursor-pointer transition-all duration-100">
              Menu
            </li>
            <li className="text-base font-bold text-headingColor hover:text-textColor  ease-in-out cursor-pointer transition-all duration-100">
              About Us
            </li>
            <li className="text-base font-bold text-headingColor hover:text-textColor  ease-in-out cursor-pointer transition-all duration-100">
              Service
            </li>
          </motion.ul>

          <div className="flex relative items-center justify-center">
            <MdShoppingBasket className="text-slate-900 text-2xl ml-8 cursor-pointer" />
            <div className="absolute -top-2 -right-1.5 w-5 h-5 rounded-full justify-center text-center flex items-center bg-cartNumbg">
              <p className="text-xm  text-white font-semibold">2</p>
            </div>
          </div>

{
  isMenu && (

    <div>
        <motion.img
        whileTap={{ scale: 0.6 }}
        src={Avatar}
         className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl ml-8 cursor-pointer" 
         alt="userProfile"
        onClick={logIn}
       
         />
         

    <div className="w-42 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute bottom-[-60px]  right-14 px-4 py-2">

      <div> <p className="flex items-center cursor-pointer gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base rounded p-1">New Item <MdAdd/></p>
    <p className="flex items-center cursor-pointer gap-9 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base  rounded p-1">Logout <MdLogout/></p>
   </div> 

   {/* <p className="flex items-center cursor-pointer gap-9 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base  rounded p-1">LogIn <MdLogout/></p> */}

   
    </div>
         
        </div>
        
  )
}

    


        </div>
      </div>
      {/* mobile  */}
      <div className="md:hidden flex items-center justify-between w-full h-full">
      <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 object-cover" />
          <p className="text-slate-900 text-xl font-bold">TestMe</p>
        </Link>
        <div className="flex relative items-center justify-center">
            <MdShoppingBasket className="text-slate-900 text-2xl ml-8 cursor-pointer" />
            <div className="absolute -top-2 -right-1.5 w-5 h-5 rounded-full justify-center text-center flex items-center bg-cartNumbg">
              <p className="text-xm  text-white font-semibold">2</p>
            </div>
          </div>
        <div>


    <div>
        <motion.img
        whileTap={{ scale: 0.6 }}
        src={Avatar}
         className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl ml-8 cursor-pointer" 
         alt="userProfile"
        onClick={logIn}
         />


    <div className="w-42 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute  right-5 px-4 py-2">

      <div> <p className="flex items-center cursor-pointer gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base rounded p-1">New Item <MdAdd/></p>
    <p className="flex items-center cursor-pointer gap-9 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base  rounded p-1">Logout <MdLogout/></p>
   </div> 

   {/* <p className="flex items-center cursor-pointer gap-9 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base  rounded p-1">LogIn <MdLogout/></p> */}

   
    </div>
         
        </div>
      </div>
        </div>
    </header>
  );
}

export default Header;
