import React from 'react'
import { FaCrown } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import TryButton from '../common/TryButton';

function Navbar() {
  return (
    <nav>
      <div className='py-4 flex justify-between items-center text-richblack'>
        <div className=' flex justify-center items-center text-xl font-bold gap-2'><FaCrown/><p>Landguru</p></div>
        <div className=' flex justify-between items-center gap-8'>
          <button>Home</button>
          <button className=' flex justify-center items-center'>Adversite<IoChevronDown/></button>
          <button className=' flex justify-center items-center'>Supports<IoChevronDown/></button>
          <button>Contact</button>
        </div>
        <div>
          <TryButton text={"Try For Free"}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar