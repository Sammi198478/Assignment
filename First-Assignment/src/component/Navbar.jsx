import React from 'react'
import {NavLink} from 'react-router-dom';

// import { LuBellRing} from "react-icons/fa";

function Navbar() {
  return (
    <nav className='fixed w-full top-0 left-0 right-0'>
        <ul className='max-w-[90vw] flex flex-wrap justify-between mx-auto'>
          <img src="img\logo.png" alt="" />
            <a href="" className='font-semibold text-2xl font-Onest weight-700 size-[14px] gap-20'>Dashboard</a>

            <div className='flex [&>li]:pl-7'>
              <li className='text-[#A1A1AA]   '><NavLink to="/">Incidents</NavLink></li>
              <li className='text-[#A1A1AA]  '><NavLink to="/Locations">Locations</NavLink></li>
              <li className='text-[#A1A1AA]   '><NavLink to="/Activities">Activities</NavLink></li>
              <li className='text-[#A1A1AA]  '><NavLink to="/Documents">Documents</NavLink></li>
              <li className='text-[#A1A1AA]  '><NavLink to="/Cypher AI">Cypher AI</NavLink></li>
              
            </div>
            <a href=""><img src="img\Rectangle 5412.png" alt="" /></a>
            <p className='text-[#A1A1AA]   '>
            Usman Zafar<br></br>
            usmanzafar@gmail.com
            </p>  
        </ul>
        <div className='pt-20 flex justify-between border border-t'>
              <p className='text-[#A1A1AA] '>Welcome back<br></br>
              <span className='font-semibold text-2xl font-Onest weight-700 size-[14px] text-[#09090B]'>Dashboard</span>
                </p>
              
              <button className='py-2 px-4 transition-all duration-300 rounded-md border border-1px text-[#A1A1AA] '> Search incident</button>
              <button className='py-2 px-4 transition-all duration-300 rounded-md border border-1px text-[#A1A1AA] '>Sort By: Date modified</button>
              <button className='py-2 px-4 transition-all duration-300 rounded-md border border-1px bg-[#F26922] text-white'>Cypher AI</button>
            
            </div>
           
    </nav>
  )
}

export default Navbar;