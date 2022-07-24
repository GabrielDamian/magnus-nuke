import React from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import Video1 from './media/videos/3.mp4';
import Art1 from './media/art/1.png';
import ComputerIcon from './media/icons/computer.png';
import MobileIcon from './media/icons/mobile.png';
import StoreIcon from './media/icons/store.png';
import PlatformIcon from './media/icons/Platform.png';
import PlusIcon from './media/icons/plus.png';

import Rank_1 from './media/icons/rank_1.png';
import Rank_2 from './media/icons/rank_2.png';
import Rank_3 from './media/icons/rank_3.png';

import Dude_1 from './media/Dudes/dude_1.png';
import Dude_2 from './media/Dudes/dude_2.png';
import Dude_3 from './media/Dudes/dude_3.png';

import PhoneIcon from './media/icons/telephone-call.png';

import Portfolio1 from './media/portfolio/1.png';
import ArrowIcon from './media/icons/arrow.png';
import ContactUsWidget from './ContactUsWidget';
import { Router, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import CheckedIcon from './media/icons/checked.png'
import UncheckedIcon from './media/icons/unchecked.png'

const Home  = ()=>{
  
  const [showDudes, setShowDudes] = React.useState({
  })

  const [rotateCards, setRotateCards] = React.useState({

  })

  React.useEffect(()=>{
    console.log("showDudes:",showDudes)
  },[showDudes])

  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  
  React.useEffect(() => {

    console.log("inView:",window.innerWidth)

    if (inView) {
      console.log("true")
      setShowDudes({
        animationName: 'dude-anim',
        animationDuration: '1s',
        animationTimingFunction: 'ease',
        animationFillMode: 'forwards'
      }) 
      if(window.innerWidth < 750)
      {
        setRotateCards({
          animationName: 'rotate-card',
          animationDuration: '1s',
          animationTimingFunction: 'ease',
          animationFillMode: 'forwards'
        }) 
      }
    } else {
      console.log("false")
    }
  }, [inView]);

  React.useEffect(() => {
    if (inView1) {
      console.log("true")
      setRotateCards({
        animationName: 'rotate-card',
        animationDuration: '1s',
        animationTimingFunction: 'ease',
        animationFillMode: 'forwards'
      }) 
    } else {
      console.log("false")
    }
  }, [inView1]);


  let history = useNavigate();

    const DudesIcons = [
      {
        name: 'Alexandru Florea',
        role: '<Full Stack Web Developer>',
        photo: Dude_1,
        border: 'Right',
      },
      {
        name: 'Scandura Tutuianu',
        role: '<Full Stack Web Developer>',
        photo: Dude_3,
        border: 'Left'
      },
      {
        name: 'Denisa Chelarasu',
        role: '<Web Designer>',
        photo: Dude_2,
        border: 'Right'
      }
    ]
    const Cards = [
        {
          img: Rank_1,
          title:'Small',
          price: '100 RON/LUNA',
          details:[
            {
              data:'Domeniu .com',
              checked: true
            },
            {
              data:'Hosting',
              checked: true
            },
            {
              data:'Web Design 5 pagini',
              checked: true
            },
            {
              data:'Logo - 2 variante',
              checked: true
            },
            {
              data:'Panou customizare',
              checked: true
            },
            {
              data:'Comenzi/Rezervari in Aplicatie',
              checked: false
            },
            {
              data: 'Listare de produse',
              checked: false
            },
            {
              data:'Panou customizare',
              checked: false
            },
            {
              data:'User Login/Signup',
              checked: false
            }
            
          ],
          link: '/serviciu-dashboard'
        },
        {
          img: Rank_2,
          title:'Medium',
          price: '150 RON/LUNA',
          details:[
            {
              data:'Domeniu .com',
              checked: true
            },
            {
              data:'Hosting',
              checked: true
            },
            {
              data:'Web Design 5 pagini',
              checked: true
            },
            {
              data:'Logo - 2 variante',
              checked: true
            },
            {
              data:'Panou customizare',
              checked: true
            },
            {
              data:'Comenzi/Rezervari in Aplicatie',
              checked: true
            },
            {
              data: 'Listare de produse',
              checked: false
            },
            {
              data:'Panou customizare',
              checked: false
            },
            {
              data:'User Login/Signup',
              checked: false
            }
            
          ],
          content:'Doriți să comunicați simplu și eficient informații despre serviciile și produsele pe care le puneți la dispoziție?',
          link: '/serviciu-mobil'
        },
        {
          img: Rank_3,
          title:'Advanced',
          price: '250 RON/LUNA',
          details:[
            {
              data:'Domeniu .com',
              checked: true
            },
            {
              data:'Hosting',
              checked: true
            },
            {
              data:'Web Design 5 pagini',
              checked: true
            },
            {
              data:'Logo - 2 variante',
              checked: true
            },
            {
              data:'Panou customizare',
              checked: true
            },
            {
              data:'Comenzi/Rezervari in Aplicatie',
              checked: true
            },
            {
              data: 'Listare de produse',
              checked: true
            },
            {
              data:'Panou customizare',
              checked: true
            },
            {
              data:'User Login/Signup',
              checked: true
            }
          ],
          content:'Doriți să comunicați simplu și eficient informații despre serviciile și produsele pe care le puneți la dispoziție?',
          link: '/serviciu-shop'
        },
      ]
      const PortfolioItems = [
        {
          title:'Pensiunea Poiana',
          img: Portfolio1,
          desc: 'Demo Website',
          link: '/portfolio-1'
        },
      ]
      return (
        <>
            <div className='phone-widget'>
              <div className='phone-widget-content'>
                <img src={PhoneIcon} alt='phone' onClick={()=>{
                  history('/contact')
                }}/>
              </div>
            </div>
            <div className="home-container">
          
          <AppBar />
          <div className='intro-home-container' name='acasa'>
            <video autoPlay loop muted>
                <source src={Video1} type="video/mp4"/>
            </video>
            <div className='dark-layer'/>
            <div className='home-content'>
              <div className='intro-home-left'>
                <p className='first-heading'>Solutii web complete</p>
                <p className='second-heading'>incepand de la doar 100 RON/Luna</p>
              </div>
              <div className='intro-home-right'>
              </div>
            </div>
          </div>
          <div className="section-1" name='section-1'>
            
            <div className='section-1-right'>
              <div className='section-1-right-top'>
                <span>Despre Magnus</span>
              </div>
              <div className='section-1-right-bottom'>
                <span>Imaginea afacerii tale este prioritatea noastra.</span><br></br>
                <span>Va oferim oportunitatea de a detine propriul site web, dupa nevoile si preferintele dumneavostra, adaptat la ultimele standarde.</span><br></br>
                <span>Echipa noastra este una tanara si ambitioasa gata sa iti castige increderea.</span>
              </div>
            </div>
            {/* <div className='section-1-left'> */}
              <motion.div
                className='section-1-left'
                ref={ref}
              >
                {
                  DudesIcons.map((el,index)=>{
                    let animationDelayFactor = 0.5;
                    let animDelay = `${animationDelayFactor * (DudesIcons.length - 1 - index)}s`

                    return(
                      <div className='dude-container'
                        style={{
                          ...showDudes,
                          animationDelay: animDelay,
                        }}
                      >
                        <div className='dude-data-img'>
                          <img src={el.photo} alt='team-member'/>
                        </div>
                        <div className='dude-data-name'>
                          <span>{el.name}</span>
                        </div>
                        <div className='dude-data-role'>
                          <i><span>{el.role}</span></i>
                        </div>
                      </div>
                    )
                  })
                }
            </motion.div>
            {/* </div> */}
          </div>
          <div className='section-2' name='section-2'>
            <div className='section-2-header'>
              <span>Servicii</span>
            </div>
            <div className='section-2-cards-container'>
              {
                
                Cards.map((el,index)=>{
                  let animationDelayFactor = 0.5;
                  let animDelayRotate = `${animationDelayFactor * (DudesIcons.length - 1 - index)}s`

                  return(
                    <motion.div
                    className='service-card-elem'
                    style={{
                          ...rotateCards,
                          animationDelay: animDelayRotate,
                        }}
                    ref={ref1}
                    >
                    <div className='service-icon'>
                        <img src={el.img} alt="service-icon"/>
                      </div>
                      <div className='service-price'>
                        <span>{el.price}</span>
                      </div>
                      <div className='service-title'>
                        <span>{el.title}</span>
                      </div>
                      <div className='service-content'>
                        {el.details.map((el_det)=>{
                          if(el_det.checked)
                          {
                            return (
                              <div className='service-content-row'>
                                <p>{el_det.data}</p> 
                                <img src={CheckedIcon} alt='checked'/>
                              </div>
                            )
                          }
                          else 
                          {
                            return (
                              <div className='service-content-row'>
                                <p style={{color: 'gray'}}>{el_det.data}</p> 
                                <img src={UncheckedIcon} alt='checked'/>
                              </div>
                            )
                          }
                        })}
                      </div>
                    </motion.div>
                    // <div className='service-card-elem'>
                      
                    // </div>
                  )
                })
              }
            </div>
          </div>
          <div className='section-3' name='section-3'>
            <div className='portfolio-header'>
              <div className='portfolio-header-top'>
                <span>Clienti</span>
              </div>
              {/* <div className='portfolio-header-bottom'>
                <span>
                  Cele mai recente lucrări ale noastre de web design, logo design sau magazine online. Vezi ce am realizat în cei aproape 20 de ani de experiență online.
                </span>
              </div> */}
            </div>
            <div className='portfoli-content'>
              {
                PortfolioItems.map((el)=>{
                  return(
                    <div className='portfolio-item' onClick={()=>{
                      history(el.link)
                    }}>
                      <img src={el.img} alt="portfoli-img"/>
                      <div className='portfolio-item-elem'>
                        <div className='item-elem-top'>
                          <img src={PlusIcon} alt='plus-icon' onClick={()=>{
                            history(el.link)
                          }}/>
                        </div>
                        <div className='item-elem-middle'>
                          <span>{el.title}</span>
                        </div>
                        <div className='item-elem-bottom'>
                          <span>{el.desc}</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <ContactUsWidget />
            <div className='separator'/>
            <Footer/>
          </div>
       </div>
        </>
      
      );
}
export default Home;
