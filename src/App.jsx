import React, { lazy } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Home from './components/Home';
import Trending from './components/Trending';

import { useState } from 'react';
import Questions from './components/Questions';
import Footer from './components/Footer';


const App = () => {

  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "hi" : "en"));
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar showOptions={true} lang={lang} toggleLang={toggleLang} />
          <Home lang={lang} />
          <Trending lang={lang}/>
          <Questions lang={lang}/>
          <Footer lang={lang}/>
          
        </div>
      )
    },
    {
      path: '/signin',
      element: (
        <div>
          <Navbar showOptions={false} lang={lang} toggleLang={toggleLang} />
          <Signin />
        </div>
      )
    }
  ]);
  
  return (
    <div className=''>
      <div>
        <RouterProvider router={router}/>
        
      </div>
    </div>
  )
}
export default App
