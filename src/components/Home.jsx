import React, { useState } from 'react'
import mainBackground from "../assets/mainBackground.png";
const Home = ({lang}) => {
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
    <div className='relative h-screen bg-cover' style={{backgroundImage:`url(${mainBackground})`}}>
        <div className='absolute inset-0 bg-black/75'></div>

        <div className='relative w-full h-screen flex flex-col justify-center items-center text-white gap-4'>
          <h1 className='font-black text-3xl sm:text-5xl md:text-6xl'>{lang === "en" ? "Unlimited movies, TV" : "अनलिमिटेड फ़िल्में, टीवी"}</h1>
          <h1 className='font-black text-3xl sm:text-5xl md:text-6xl'>{lang === "en" ? "shows and more" : "शो, और बहुत कुछ"}</h1>
          <h3 className='font-black text-xl'>{lang === "en" ? "Starts at ₹149. Cancel at any time." :"₹149 से शुरू होता है. कभी भी कैंसल करें."}</h3>
          <h4 className='font-light text-sm sm:text-base w-[90%] text-center'>{lang==="en"?"Ready to watch? Enter your email to create or restart your membership." :"देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."}</h4>

          <div className='flex flex-col sm:flex-row w-full justify-center items-center gap-5 '>
              <input type="email" name="" id="" placeholder="Enter address" className='border bg-gray-900/40 p-3 w-[90%] max-w-90 rounded-sm' onChange={(e)=>setMail(e.target.value)} />
              <button className='font-bold text-xl bg-[#e50914] hover:bg-[rgb(150,6,13)] p-3 rounded-sm cursor-pointer' onClick={handleSubmit}>{lang === "en" ? "Get Started >":"शुरू करें >"}</button>
          </div>

        </div>       
    </div>
  )
}

export default Home
