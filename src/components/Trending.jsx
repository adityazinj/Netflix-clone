import React from "react";
import saiyara from "../assets/saiyara.webp";
import bob from "../assets/bob.webp";
import wday from "../assets/wensday.webp";
import kpl from "../assets/kpl.webp";
import mahaavtar from "../assets/mahaavtar.webp";
import iz from "../assets/iz.webp";
import ksam from "../assets/ksam.webp";
import r2 from "../assets/r2.webp";
import ff from "../assets/ff.webp";
import ffm from "../assets/ffm.webp";
import tv from "../assets/tv.svg";
import down from "../assets/download.svg";
import torch from "../assets/torch.svg";
import face from "../assets/face.svg";

const arr = [
  {
    title: {
      en: "Enjoy on your TV",
      hi: "अपने टीवी पर आनंद लें"
    },
    desc: {
      en: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      hi: "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें."
    },
    img:{
      en: tv,
      hi: tv
    }
  },
  {
    title: {
      en: "Download your shows to watch offline",
      hi: "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें"
    },
    desc: {
      en: "Save your favourites easily and always have something to watch.",
      hi: "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें."
    },
    img:{
      en: down,
      hi: down
    }
  },
  {
    title: {
      en: "Watch everywhere",
      hi: "हर जगह देखें"
    },
    desc: {
      en: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      hi: "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें."
    },
    img:{
      en: torch,
      hi: torch
    }
  },
  {
    title: {
      en: "Create profiles for kids",
      hi: "बच्चों के लिए प्रोफ़ाइल बनाएं"
    },
    desc: {
      en: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      hi: "बच्चों को अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जाने दें जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री."
    },
    img:{
      en: face,
      hi: face
    }
  }
];

const trending = ({ lang }) => {
  return (
    <div className="relative h-full w-full bg-black">
      <div className="h-1 w-full bg-[#c81e4c]"></div>
      
      <div className="flex flex-col justify-center items-center text-white px-20 py-10 gap-5">
        <div className="text-xl font-black">
          {lang === "en" ? "Trending Now" : "ट्रेंडिंग नाव"}
        </div>
        <div className="flex left-0  bottom-0 gap-5 overflow-x-auto px-5 py-5 scrollbar w-full">
          <div className="flex-shrink-0">
            <img
              src={saiyara}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={bob}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={wday}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={kpl}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={mahaavtar}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={iz}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={ksam}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={r2}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={ff}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={ffm}
              alt=""
              className="h-40 sm:h-auto w-auto rounded-lg hover:scale-110 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col justify-center w-full h-full items-center">

        <div className="text-xl font-extrabold">
          {lang==="en"?"More reasons to join":"शामिल होने की ज़्यादा वजहें"}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-20 py-10 w-full">

          {arr.map((item, index) => (
            
            <div key={index} className="relative w-full flex flex-col h-52  sm:h-60  lg:h-80 bg-amber-200 rounded-xl  bg-gradient-to-b from-[#0f1123] via-[#1b1838] to-[#1c1436] px-4 py-5 gap-3">

              <h1 className="font-black text-xs sm:text-xl">{item.title[lang]}</h1>
              <p className="text-gray-500 text-xs sm:text-xl font-bold">{item.desc[lang]}</p>
              <img  src={item.img[lang]} alt="" className="h-52 w-80"/>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default trending;