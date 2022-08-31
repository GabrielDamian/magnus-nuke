import './App.css';
import Home from './Home';
import Contact from './Contact';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import ComputerIcon from './media/icons/computer.png';
import MobileIcon from './media/icons/mobile.png';
import StoreIcon from './media/icons/store.png';
import PlatformIcon from './media/icons/Platform.png';
import Portfolio_1_bg  from './media/portfolio/1_bg.png';
import PortfolioProject from './PortfolioProject';
import Template_1 from './Template_1/Components/Home';

//
import Demo_1_car from './media/portfolio/1_bg.png';
import Demo_2_car from './media/portfolio/2_bg.png';
import Demo_3_car from './media/portfolio/3_bg.png';
import Demo_4_car from './media/portfolio/4_bg.png';
import Demo_5_car from './media/portfolio/5_bg.png';

import Demo_6_car from './media/portfolio/6_bg.png';
import Demo_7_car from './media/portfolio/7_bg.png';
import Demo_8_car from './media/portfolio/8_bg.png';
import Demo_9_car from './media/portfolio/9_bg.png';

import React from 'react';

import axios from 'axios';
import Visitors from './Visitors';

import AboutUs from './Template_1/Components/AboutUs';
import CamerePage from './Template_1/Components/CamerePage';
import ContactPage from './Template_1/Components/Contact';
import AgrementComponent from './Template_1/Components/AgrementComponent';

function App() {
 
  const PortfolioData = [
    {
      title: 'Pensiunea Laricea',
      imageHeader: Portfolio_1_bg,
      client: 'Pensiunea Laricea',
      descriere: 'Website Pensiune',
      tehnologii: ['React','Material Ui'],
      live: 'https://pensiunealaricea.com/',
      route: '/portfolio-1',
      bg_imgs: [Demo_1_car,Demo_2_car,Demo_3_car,Demo_4_car,Demo_5_car,Demo_6_car,Demo_7_car,Demo_8_car,Demo_9_car]
    },
  ]

  React.useEffect(()=>{
    console.log("entry useEffect")
    let magnusLink = 'https://api.countapi.xyz/hit/magnus-team.com/awesomeclick'
    if(window.localStorage.getItem('oldVisitor') === null)
    {
      console.log("case 1")
      axios.get(magnusLink)
      .then((resp)=>{
        window.localStorage.setItem('oldVisitor',true)
      })
      .catch((err)=>{
        console.log("err")
      })
    }
    else 
    {
      console.log("case 2:",window.localStorage.getItem('oldVisitor'))
    }
  })


  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          {
            PortfolioData.map((el)=>{
              return(
                <Route path={el.route} element={
                  <PortfolioProject 
                    {...el}
                  />
                }/>
              )
            })
          }
          {/* Pensiunea Laricea */}
          <Route path="/template-1" element={<Template_1/>}/>
          <Route path="/template-1/despre" element={<AboutUs/>}/>
          <Route path="/template-1/camere" element={<CamerePage/>}/>
          <Route path="/template-1/contact" element={<ContactPage/>}/>
          
          <Route path="/template-1/parcul-calimani" element={<AgrementComponent indexPointer={0}/>}/>
          <Route path="/template-1/partia-dealul-negru" element={<AgrementComponent indexPointer={1}/>}/>
          
          {/*Statistici*/}
          <Route path="/x" element={<Visitors />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
