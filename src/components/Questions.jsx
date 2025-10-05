import React, { useState } from "react";

const arr = [
  {
    q:{
      en:"What is Netflix?",
      hi:"Netflix क्या है?"
    },
    a:{
      en:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
      hi:"Netflix एक स्ट्रीमिंग सेवा है जो हजारों इंटरनेट-कनेक्टेड डिवाइस पर पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, वृत्तचित्र और बहुत कुछ प्रदान करती है। आप जितना चाहें उतना देख सकते हैं, जब भी आप चाहें बिना किसी एकल विज्ञापन के - वह भी एक कम मासिक मूल्य के लिए। हमेशा कुछ नया खोजने के लिए होता है और हर हफ्ते नए टीवी शो और फिल्में जोड़ी जाती हैं!"
    },
  },
  {
    q:{
      en:"How much does Netflix cost?",
      hi:"Netflix की कीमत कितनी है?"
    },
    a:{
      en:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
      hi:"अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर Netflix देखें, वह भी एक निश्चित मासिक शुल्क के लिए। योजनाएं ₹149 से ₹649 प्रति माह तक होती हैं। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं।"
    }
  },
  {
   q:{
      en:"Where can I watch?",
      hi:"मैं कहाँ देख सकता हूँ?"
   },
    a:{
      en:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      hi:"कहीं भी, कभी भी देखें। अपने Netflix खाते में साइन इन करें ताकि आप अपने व्यक्तिगत कंप्यूटर पर या किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत वेब पर netflix.com पर देख सकें जो Netflix ऐप प्रदान करता है, जिसमें स्मार्ट टीवी, स्मार्टफोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल शामिल हैं। आप iOS, Android, या Windows 10 ऐप के साथ अपने पसंदीदा शो भी डाउनलोड कर सकते हैं। जब आप यात्रा पर हों और बिना इंटरनेट कनेक्शन के देखें तो डाउनलोड का उपयोग करें। Netflix को कहीं भी अपने साथ ले जाएं।"
    }
  },
  {
    q:{
      en:"How do I cancel?",
      hi:"मैं कैसे रद्द करूं?"
    },
    a:{
      en:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      hi:"Netflix लचीला है। कोई परेशान करने वाले अनुबंध और कोई प्रतिबद्धताएं नहीं हैं। आप दो क्लिक में आसानी से अपने खाते को ऑनलाइन रद्द कर सकते हैं। कोई रद्दीकरण शुल्क नहीं है - कभी भी अपना खाता शुरू या बंद करें।"
    }
  },
  {
    q:{
      en:"What can I watch on Netflix?",
      hi:"मैं Netflix पर क्या देख सकता हूँ?"
    },
    a:{
      en:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      hi:"Netflix के पास फीचर फिल्में, वृत्तचित्र, टीवी शो, एनीमे, पुरस्कार विजेता Netflix मूल और बहुत कुछ का एक व्यापक पुस्तकालय है। आप जितना चाहें उतना देख सकते हैं, जब भी आप चाहें।"
    }
  },
  {
    q:{
      en:"Is Netflix good for kids?",
      hi:"क्या Netflix बच्चों के लिए अच्छा है?"
    },
    a:{
      en:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      hi:"Netflix Kids अनुभव आपके सदस्यता में शामिल है ताकि माता-पिता नियंत्रण कर सकें जबकि बच्चे अपने स्वयं के स्थान पर परिवार के अनुकूल टीवी शो और फिल्में का आनंद लें। बच्चों की प्रोफाइल में पिन-संरक्षित अभिभावक नियंत्रण होता है जो आपको उस सामग्री की परिपक्वता रेटिंग को प्रतिबंधित करने और विशिष्ट शीर्षकों को ब्लॉक करने देता है जिन्हें आप नहीं चाहते कि बच्चे देखें।"
    }
  }
];

const Questions = ({lang}) => {
    
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full text-white bg-black flex flex-col px-5 py-5 sm:px-20 sm:py-10 gap-5">
      <h1 className="text-sm sm:text-3xl font-bold mb-6">
      {lang === "en"?"Frequently Asked Questions":"अक्सर पूछे जाने वाले सवाल"}</h1>

      {arr.map((item, index) => (
        <div key={index} className="w-full bg-[#2d2d2d]">
          {/* Question */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between h-10 text-xs sm:h-24 items-center px-5 py-4 sm:text-2xl font-medium hover:bg-[#3d3d3d]  transition-all duration-100 ease-in-out"
          >
            <span>{item.q[lang]}</span>
            <span className="text-xs sm:text-3xl">{openIndex === index ? "×" : "+"}</span>
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="px-5 p-4 text-white text-xs sm:text-2xl">{item.a[lang]}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
