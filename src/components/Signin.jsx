import React from 'react'
import sbg from "../assets/signInbg.jpg";
import { NavLink } from 'react-router-dom'
import { useState } from 'react';



const Signin = () => {
  const [lang,setLang] = useState("en");
  const [contact,setContact] = useState("");
  const [pass,setPass] = useState("");
  const handleContact = () => {
    if(!(contact)) {
      alert("Please enter a valid email or mobile number");
    }
    
  };

  const handlePass = () => {
    if(!(pass)) {
      alert("Please enter password");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    handleContact();
    handlePass();
};  

  return (
    <div className='relative h-full bg-cover w-full' style={{backgroundImage:`url(${sbg})`}}>

      <div className='absolute inset-0 bg-black/50'></div>

      {/* sign in box */}
      <div className='flex justify-center items-center h-screen relative top-10'>

        <div className='flex flex-col bg-black/75 text-white w-[90%] max-w-md p-8 gap-5'>

          <h1 className='font-extrabold text-3xl'>{lang === "en" ? "Sign In" : "साइन इन करें" }</h1>

          <form className='flex flex-col gap-3'>
            <input className='border border-[#e50914] p-2 rounded-sm ' type="contact" placeholder='Email or mobile number' onChange={(e)=>setContact(e.target.value)} />
            <input className='border border-[#e50914] p-2 rounded-sm' type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)} />
          </form>

          <div className='flex flex-col gap-2'>
            <button onClick={handleSignIn} className='rounded-md w-full font-bold p-1 bg-[#e50914] hover:bg-red-700 transition-all cursor-pointer'>{lang === "en" ? "Sign In" : "साइन इन करें" }</button>

            <div className='text-center text-gray-500 font-medium'>{lang === "en" ? "OR" : "या" }</div>

            <button className='w-full rounded-md font-bold p-1 bg-gray-400/30 hover:bg-gray-600/50 transition-all '>{lang === "en" ? "Use a sign-in code":"साइन इन कोड का उपयोग करें"}</button>

            <NavLink className='text-center text-xs hover:text-gray-400/90'>{lang === "en" ? "Forgot Password ?" : "अपना ईमेल या फ़ोन नंबर भूल गए ?"}</NavLink>

          </div>

        <div className='flex gap-2'>
          <input type="checkbox" id="rem"  value="Bike"/>
          <label htmlFor="rem" className='text-xs'>{lang === "en" ? "Remember me":"याद है"}</label>
        </div>

        <div className='text-gray text-sm'>{lang === "en" ? "New to Netflix?" :"Netflix पर नए हैं ?"} <NavLink className='font-bold'>{lang === "en" ? "Sign up now." : "अब साइन अप करें."}</NavLink>
        </div>
            
        </div>

      </div>

      {/* footer */}
      <div className='relative z-50 flex flex-col gap-3 p-5 bg-[#161616] text-gray-400 text-base w-full'>
          <div className=''>
            {lang === "en" ? "Questions? Call 000-800-919-1743 (Toll-Free)" : "कोई सवाल हैं? 000-800-919-1743 (टोल फ़्री) पर कॉल करें"}
          </div>

          <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
            <NavLink>FAQ</NavLink>
            <NavLink>{lang === "en"?"Cookie Preferences":"कुकी प्रेफ़रेंसेज़"}</NavLink>
            <NavLink>{lang === "en"? "Help Centre" : "सहायता केंद्र"}</NavLink>
            <NavLink>{lang === "en" ? "Corporate Information" : "कॉरपोरेट जानकारी"}</NavLink>
            <NavLink>{lang === "en" ?"Terms of Use" : "उपयोग की शर्तें"}</NavLink>
            <NavLink>{lang === "en" ?"Privacy" : "प्रायवेसी"}</NavLink>

          </div>

          <div>
            <select value={lang} onChange={(e)=>{setLang(e.target.value)}} name="Language" className='text-white bg-transparent border rounded-md p-1 text-center'>
              <option value="en" className='text-black'>🌐 English</option>
              <option value="hi" className='text-black'>🌐 हिन्दी</option>    
            </select>
          </div>

        </div>        

    </div>
    
  )
}

export default Signin
