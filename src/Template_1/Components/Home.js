import React,{useState, useEffect} from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import '../Styles/Home.css';
import IntroBg from '../Media/bg/intro-bg.png';
import Room1 from '../Media/rooms/room_1.jpg';
import Room2 from '../Media/rooms/room_2.jpg';
import Room3 from '../Media/rooms/room_3.jpg';

import Activity1 from '../Media/activities/1.jpg';
import Activity2 from '../Media/activities/2.jpg';
import Activity3 from '../Media/activities/3.jpg';

import Opt1 from '../Media/options/1.png';
import Opt2 from '../Media/options/2.png';
import Opt3 from '../Media/options/3.png';
import Opt4 from '../Media/options/4.png';
import Opt5 from '../Media/options/5.png';
import Opt6 from '../Media/options/6.png';

import {scroller} from 'react-scroll';
import axios from 'axios';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = ()=>{
    //click counter
    useEffect(()=>{
        console.log("entry useEffect")
        let magnusLink = 'https://api.countapi.xyz/hit/magnus-template-1.com/awesomeclick'
        if(window.localStorage.getItem('oldTemplate') === null)
        {
          console.log("case 1")
          axios.get(magnusLink)
          .then((resp)=>{
            window.localStorage.setItem('oldTemplate',true)
          })
          .catch((err)=>{
            console.log("err")
          })
        }
        else 
        {
          console.log("case 2:",window.localStorage.getItem('oldTemplate'))
        }
    })
    
    useEffect(()=>{
    scroller.scrollTo('top-ref-t1', {
        duration: 700,
        delay: 100,
        smooth: true,
        offset: -100, 
      })
    },[])

    const Rooms = [
        {
            name: 'Cameră Single',
            price: '150 RON',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  1500s",
            img: Room1
        },
        {
            name: 'Cameră Dublă',
            price: '250 RON',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettinghas bes",
            img: Room2            
        },
        {
            name: 'Dublă Deluxe',
            price: '350 RON',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting indnnce the 1500s",
            img: Room3
        },
    ]
    const widget_1_section_3 = [
        {
            title:'Partia Durău',
            desc: 'rem Ipsum is simpl i',
            image: Activity1
        },
        {
            title:'Partia Durău',
            desc: 'rem Ipsum is simply  the i',
            image: Activity1
        },
        {
            title:'Partia Durău',
            desc: 'rem Ipsum is simpthe i',
            image: Activity1
        },
    ]
    const widget_2_section_3 = []
    const section3Items = [
        {
            image:Activity1,
            title: 'Partia Durău',
            frame:  <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10884.864296671865!2d25.918553492799795!3d46.99673015496876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47355596834592e5%3A0x525c68c214a9c7b9!2sPartia%20Durau%20-%20Durau%20Park!5e0!3m2!1sro!2sro!4v1658668568870!5m2!1sro!2sro" 
            width="100%" 
            height="100%" 
            // style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            >
        </iframe>    
        },
        {
            image:Activity2,
            title: 'Lacul Izvorul Muntelui (Bicaz)',
            frame: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43525.1044311476!2d26.037288724664357!3d47.014342542236406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47355e4a41ebda19%3A0xe2df506fe5222caf!2sLacul%20Bicaz!5e0!3m2!1sro!2sro!4v1658669687487!5m2!1sro!2sro" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         },
        {
            image:Activity3,
            title: 'Cascada Duruitoarea',
            frame: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36630.328632510515!2d25.91879687489409!3d46.970227064881165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474a9fbb0e5b2d49%3A0xfe0fda9e8f870706!2sCascada%20Duruitoarea!5e0!3m2!1sro!2sro!4v1658669742722!5m2!1sro!2sro" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        },
    ]
    const optionsItems = [
        {
            name:'Piscină',
            icon: Opt1
        },
        {
            name:'Camere duble',
            icon: Opt2
        },
        {
            name:'Teren de fotbal',
            icon: Opt3
        },
        {
            name:'Teren de tenis',
            icon: Opt4
        },
        {
            name:'Biliard',
            icon: Opt5
        },
        {
            name:'Restaurant',
            icon: Opt6
        },
    ]
    return(
        <div className='t1-home-container' name='top-ref-t1'>
            <AppBar />
            <div className='t1-section-1' style={{
                backgroundImage: `url(${IntroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }}>
                <div className='t1-section-1-top'>
                    <div className='t1-section-1-top-top'>
                        <span>Bine ai venit</span>
                    </div>
                    <div className='t1-section-1-top-center'>
                        <span>Pensiune - Spa - Restaurant</span>
                    </div>
                    <div className='t1-section-1-top-bottom'>
                        <span>- in Durău -</span>
                    </div>
                </div>

                <div className='t1-section-1-bottom'>
                    <div className='t1-section-1-bottom-center'>
                        <input type='date' placeholder='ceva'/>
                        <input type='date' placeholder='ceva'/>
                        <select type='select' placeholder='ceva'>
                            <option value="Adults">Adulți</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select type='select' placeholder='ceva'>
                            <option value="Childrens">Copii</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <button>
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </div>
            <div className='t1-section-2'>
                {
                    Rooms.map((el)=>{
                        return(
                            <div className='t1-room-item-container'>
                                <div className='t1-room-item-img'>
                                    <img src={el.img} alt='room-img'/>
                                </div>
                                <div className='t1-room-title'>
                                    {el.name}
                                </div>
                                <div className='t1-room-price'>
                                    {el.price}
                                </div>
                                <div className='t1-room-desc'>
                                    {el.desc}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className='section-3-title'>
                    <span>Dotări</span>
            </div>
            <div className='t1-section-4'>
                {
                    optionsItems.map((el)=>{
                        return(
                            <div className='t1-opt-item-flex'>
                                <div className='t1-opt-item-img'>
                                    <img src={el.icon} alt='hotel-option'/>
                                </div>
                                <div className='t1-opt-item-name'>
                                    {el.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='section-3-title'>
                <span>Obiective in apropiere</span>
            </div>
            <div className='t1-section-3'>
                <WidgetsSection3 direction="left" elements={widget_1_section_3}/>
                {/* <WidgetsSection3 direction="right" elements={widget_1_section_3}/> */}
                {/* {
                    section3Items.map((el,index)=>{
                        
                            return(
                                <div className='t1-section-3-item'>
                                    <div className='t1-sec-3-top' >
                                        <span>{el.title}</span>
                                    </div>
                                    <div className='t1-sec-3-bot' >
                                        <div className='t1-section-3-left'>
                                            <img src={el.image} alt='activity'/>
                                        </div>
                                        <div className='t1-setion-3-right'>
                                           {el.frame}
                                        </div>
                                    </div>
                                    
                                  
                                </div>
                                )    
                    })
                } */}

            </div>
            <Footer />
        </div>
    )
}

const WidgetsSection3 = ({direction,elements})=>{
    //data = [{},{},{}]

    useEffect(()=>{
        console.log("data:",elements)
    })
    return(
        <div className='widget-section-3-container'>
            {
                direction == 'left'?
                <>
                  <div className='widget-3-first-container'>
                    <div className='widget-3-first-image'>
                        <img src={elements[0]["image"]} alt="option"/>
                    </div>
                    <div className='widget-3-first-text'>
                        <div className='widget-3-first-text-header'>
                            <span>{elements[0]["title"]}</span>
                        </div>
                        <div className='widget-3-first-text-body'>
                            <span>{elements[0]["desc"]}</span>
                        </div>
                    </div>
                </div>
            <div className='widget-3-second-container'>
                {
                    elements.map((el,index)=>{
                        if(index === 0 )
                        {
                            return null
                        }
                        else 
                        {
                            return(
                                <div className='widget-3-second-universal'>
                                    <div className='widget-3-second-univ-left'>
                                        <img src={el["image"]} alt="option"/>
                                    </div>
                                    <div className='widget-3-second-univ-right'>
                                        <div className='widget-3-second-univ-right-top'>
                                            <span>
                                                {el.title}
                                            </span>
                                        </div>
                                        <div className='widget-3-second-univ-right-bottom'>
                                            <span>
                                                {el.desc}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
                </>
            :
            <>
            <div className='widget-3-second-container'>
                {
                    elements.map((el,index)=>{
                        if(index === elements.length-1 )
                        {
                            return null
                        }
                        else 
                        {
                            return(
                                <div className='widget-3-second-universal'>
                                    <div className='widget-3-second-univ-left'>
                                        <img src={el["image"]} alt="option"/>
                                    </div>
                                    <div className='widget-3-second-univ-right'>
                                        <div className='widget-3-second-univ-right-top'>
                                            <span>
                                                {el.title}
                                            </span>
                                        </div>
                                        <div className='widget-3-second-univ-right-bottom'>
                                            <span>
                                                {el.desc}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className='widget-3-first-container'>
                    <div className='widget-3-first-image'>
                        <img src={elements[0]["image"]} alt="option"/>
                    </div>
                    <div className='widget-3-first-text'>
                        <div className='widget-3-first-text-header'>
                            <span>{elements[0]["title"]}</span>
                        </div>
                        <div className='widget-3-first-text-body'>
                            <span>{elements[0]["desc"]}</span>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}
export default Home;
