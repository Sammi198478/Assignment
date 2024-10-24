import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';
import { FaBell } from "react-icons/fa6";
import { FaSearchDollar } from "react-icons/fa";

// import { LuBellRing} from "react-icons/fa";

function Navbar() {
  return (
   <>
    <nav className='fixed w-full top-0 left-0 right-0 mb-80'>
        <ul className='max-w-[90vw] flex flex-wrap justify-center mx-auto'>
          <img className='mr-20' src="img\logo.png" alt="" />
            <a href="" className='mr-24 font-semibold text-2xl font-Onest weight-700 size-[14px] '>Dashboard</a>

            <div className='flex '>
             
              <li className='text-[#A1A1AA] pl-7  '><NavLink to="/">Incidents</NavLink></li>
              
              <li className='text-[#A1A1AA] pl-7 '><NavLink to="/Locations">Locations</NavLink></li>
              <li className='text-[#A1A1AA] pl-7  '><NavLink to="/Activities">Activities</NavLink></li>
              <li className='text-[#A1A1AA] pl-7 '><NavLink to="/Documents">Documents</NavLink></li>
              <li className='text-[#A1A1AA] pl-7 '><NavLink to="/Cypher AI">Cypher AI</NavLink></li>
              
            </div>
            <div className="flex mx-auto mr-10">
             <div className="flex items-center">
             <a href="#" className="flex items-center gap-2">
             <FaBell />
             <img className="flex" src="img/Rectangle 5412.png" alt="User Profile" />
             </a>
             <p className="text-[#A1A1AA] ml-2">
             Usman Zafar<br />
             usmanzafar@gmail.com
             </p>
           </div>
         </div>
            



 
        </ul>
        <div className='pt-20 flex justify-between border border-t'>
              <p className='text-[#A1A1AA] '>Welcome back<br></br>
              <span className='font-semibold text-2xl font-Onest weight-700 size-[14px] text-[#09090B]'>Dashboard</span>
                </p>
                <div className="flex gap-10">
                <button className=' flex items-center py-2 px-4 transition-all duration-300 rounded-md border border-1px text-[#A1A1AA] '><FaSearchDollar /> Search incident</button>
              <button className=' py-2 px-4 transition-all duration-300 rounded-md border border-1px text-[#A1A1AA] '>Sort By: Date modified</button>
              <button className='py-2 px-4 transition-all duration-300 rounded-md border border-1px bg-[#F26922] text-white'>Cypher AI</button>
                </div>
            
            </div>
           
    </nav>
   
    <Outlet/>
   
   
   </>
  )
}

export default Navbar;