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


import Demo_1_car from './media/portfolio/1_bg.png';
import Demo_2_car from './media/portfolio/2_bg.png';
import Demo_3_car from './media/portfolio/3_bg.png';
import Demo_4_car from './media/portfolio/4_bg.png';
import Demo_5_car from './media/portfolio/5_bg.png';
import React from 'react';

import axios from 'axios';
import Visitors from './Visitors';

function App() {
 
  const PortfolioData = [
    {
      title: 'demo 1',
      imageHeader: Portfolio_1_bg,
      client: 'Demo Template',
      descriere: 'Demo Website',
      tehnologii: ['React', 'NodeJs', 'MongoDb', 'Material Ui'],
      live: '/template-1',
      route: '/portfolio-1',
      bg_imgs: [Demo_1_car,Demo_2_car,Demo_3_car,Demo_4_car,Demo_5_car]
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
          <Route path="/template-1" element={<Template_1/>}/>
          <Route path="/x" element={<Visitors />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
