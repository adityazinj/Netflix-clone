import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Footer = ({lang}) => {
     const [email,setMail] = useState("");
      const handleSubmit = () => {
        if(!email) {
          alert("Please enter your email");
        }
        else{
          alert(`Submitted email ${email}`)
        }
      };
    

  return (
    <div className='relative z-50 flex flex-col gap-5 px-20 py-10 bg-black text-white text-base w-full'>
        <h4 className='font-light text-sm sm:text-base w-[90%] text-center'>{lang==="en"?"Ready to watch? Enter your email to create or restart your membership." :"देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."}</h4>

          <div className='flex flex-col sm:flex-row w-full justify-center items-center gap-5 '>
              <input type="email" name="" id="" placeholder="Enter address" className='border bg-gray-900/40 p-3 w-[100%] max-w-9/12 rounded-sm' onChange={(e)=>setMail(e.target.value)} />
              <button className='font-bold text-xs sm:text-xl bg-[#e50914] hover:bg-[rgb(150,6,13)] p-3 rounded-sm cursor-pointer' onClick={handleSubmit}>{lang === "en" ? "Get Started >":"शुरू करें >"}</button>
          </div>


          <div className=''>
            {lang === "en" ? "Questions? Call 000-800-919-1743 (Toll-Free)" : "कोई सवाल हैं? 000-800-919-1743 (टोल फ़्री) पर कॉल करें"}
          </div>

          <div className='grid grid-cols-2 gap-3 sm:grid-cols-4 underline'>
            <NavLink>FAQ</NavLink>
            <NavLink>{lang == "en" ? "Help Center":"सहायता केंद्र"}</NavLink>
            <NavLink>{lang == "en" ? "Account":"अकाउंट"}</NavLink>
            <NavLink>{lang == "en" ? "Media Center":"मीडिया केंद्र"}</NavLink>
            <NavLink>{lang == "en" ? "Investor Relations":"इंवेस्टर संबंध"}</NavLink>
            <NavLink>{lang == "en" ? "Jobs":"नौकरियां"}</NavLink>
            <NavLink>{lang == "en" ? "Ways to Watch":"देखने के तरीके"}</NavLink>
            <NavLink>{lang == "en" ? "Term of Use":"उपयोग की शर्तें"}</NavLink>
            <NavLink>{lang == "en" ? "Privacy":"प्रायवेसी"}</NavLink>
            <NavLink>{lang == "en" ? "Cookies Preferance":"कुकी प्रेफ़रेंस"}</NavLink>
            <NavLink>{lang == "en" ? "Corporate Information":"कॉरपोरेट जानकारी"}</NavLink>
            <NavLink>{lang == "en" ? "Contact Us":"हमसे संपर्क करें"}</NavLink>
            <NavLink>{lang == "en" ? "Speed Test":"स्पीड टेस्ट"}</NavLink>
            <NavLink>{lang == "en" ? "Legal Notices":"कानूनी सूचनाएं"}</NavLink>
            <NavLink>{lang == "en" ? "Only On Netflex":"सिर्फ़ Netflix पर"}</NavLink>

          </div>

          <div className='text-sm flex flex-col gap-5 py-5'>
            <span>{lang === "en"?"Netflix India":"Netflix भारत"}</span>
            <span>{lang==="en"?"This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.":"यह पक्का करने के लिए कि आप बॉट नहीं हैं, यह पेज Google reCAPTCHA द्वारा सुरक्षित है. और जानें."}</span>
          </div>
    </div>
  )
}

export default Footer
