import React, { useState, createContext } from "react";
import './index.css'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import MainPage from "./screens/main-login/main";
import Page1 from "./screens/pages/page1";
import Page2 from "./screens/pages/page2";
import Page3 from "./screens/pages/page3";
import Page4 from "./screens/pages/page4";
import Page5 from "./screens/pages/page5";
import Page6 from "./screens/pages/page6";
import Page7 from "./screens/pages/page7";
import Page8 from "./screens/pages/page8";
import Page9 from "./screens/pages/page9";
import Page10 from "./screens/pages/page10";
import Page11 from "./screens/pages/page11";
import Page12 from "./screens/pages/page12";
import Page13 from "./screens/pages/page13";




function App() {

  return (
    <div>
      <BrowserRouter basename='/'>

        
             <Routes>
                {/* public routes */}
                <Route path="/" element={ <MainPage/>} />
                <Route path="/KLM63n6M2/Ro+/cls+17Hg==" element={ <Page1/>} /> //bibhuti
                <Route path="/C40KETpfA2riog0xwWYB0A==" element={ <Page2/>} /> //arpita
                <Route path="/zWbuOYt4JdUvkJoAmYQrOg==" element={ <Page3/>} /> //preeti
                <Route path="/JLhhH/zGoxFTyuPWm/8vVw==" element={ <Page4/>} /> //rajasree
                <Route path="/XSd2RZEe/nvYNUCkiJsG/Q==" element={ <Page5/>} /> //shyla
                <Route path="/bAvDL2tsPHcVcw6EbLTFgQ==" element={ <Page6/>} /> //nikeeta
                <Route path="/kPTYCRB9uo2IbmsFhk6IdQ==" element={ <Page7/>} /> //prajna
                <Route path="/UKgEUvGI+WCtP2tUF33Ftw==" element={ <Page8/>} /> //veera
                <Route path="/nruRG+NPFAJoQ7s2ExDvqw==" element={ <Page9/>} /> //Santosh
                <Route path="/Vdyv2j/udw1GA4IBYB4lVQ==" element={ <Page10/>} /> //joshua
                <Route path="/FeDuWEbWi7TPUBYnUkuBPA==" element={ <Page11/>} /> //praveena
                <Route path="/U5G73be8RWRYVxUOd7QsSg==" element={ <Page12/>} /> //aishwarya
                <Route path="/hqySI7ZHS4r69VNGVGLmxQ==" element={ <Page13/>} /> //syed

                kPTYCRB9uo2IbmsFhk6IdQ==
                
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
