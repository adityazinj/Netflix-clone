import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = ({showOptions,lang,toggleLang }) => {
  return (
    <div className='absolute w-full top-6 left-0 z-50 bg-transparent flex flex-col  sm:flex-row justify-between items-center px-6 sm:px-20 lg:px-40'>

      <div>
        <NavLink to='/'><img src={logo} alt="" className='w-30 h-20 sm:w-40'/></NavLink>
      </div>
      {showOptions === true ?
        <div className='flex gap-8 m-2'>

          <select value={lang} onChange={toggleLang} name="Language" className='text-white bg-transparent border rounded-md p-1 text-center'>
            <option value="en" className='text-black'>🌐 English</option>
            <option value="hi" className='text-black'>🌐 हिन्दी</option>    
          </select>

          <NavLink className='font-bold border-0 text-center px-4 py-1 rounded-md text-white bg-[#e50914]' to='/signin'>{lang === "en" ? "Sign In" : "साइन इन करें"}</NavLink>

        </div>
      : ' '}

    </div>
  )
}

export default Navbar