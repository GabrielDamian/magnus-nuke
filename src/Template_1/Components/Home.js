import React,{useState, useEffect} from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import '../Styles/Home.css';
import IntroBg from '../Media/bg/intro-bg.png';

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

import MapIcon from '../Media/icons/map.png';
import PhoneIcon from '../Media/icons/phone-call.png';

import ImageSlider from './ImageSlider';

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

    const widget_1_section_3 = [
        {
            title:'Parcul National Calimani',
            desc: `Parcul Național Călimani se întinde pe teritoriul a patru județe (Mureș, Suceava, Harghita și Bistrița-Năsăud) și este o zonă specială de conservare.`, 
            image: Activity2
        },
        {
            title:'Partia Dealul Negru',
            desc: 'Pârtia de schi Dealul Negru are un grad de dificultate mediu şi lungimea de 3000 metri. Altitudinea la plecare este de 1250 metri şi la sosire de 850 m, diferenţa de nivel fiind de 400 m.',
            image: Activity1
        },
        {
            title:'Agrement ',
            desc: 'Agrement in Vatra Dornei si zonele apropiate. Posibilitati de petrecere a timpului liber, modalitati de relaxare sau activitati de turism activ.',
            image: Activity3
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
            name:'Camere duble',
            icon: Opt2
        },
        {
            name:'Parcare gratuita',
            icon: Opt1
        },
        {
            name:'Accepta animale de companie',
            icon: Opt3
        },
        {
            name:'Bar',
            icon: Opt4
        },
        {
            name:'Echitatie',
            icon: Opt5
        },
        {
            name:'Restaurant',
            icon: Opt6
        },
    ]

    //TABS SECTION 5
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    let bgIntro ="https://drive.google.com/uc?id=1zlL-EhlRPNQhbRE2se5Z76PYhga1Z-Vl"

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
                        <span>Pensiune</span>
                    </div>
                    <div className='t1-section-1-top-bottom'>
                        <span>- in Vatra Dornei -</span>
                    </div>
                </div>

                {/* <div className='t1-section-1-bottom'>
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
                </div> */}
            </div>
            {/* <div className='t1-section-2'>
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
            </div> */}
            <div className='t1-section-0'>
                <div className='t1-setcion-0-left'>
                    <div className='t1-setcion-0-left-top'>
                        <span><b>Pensiunea Laricea, in Vatra Dornei</b></span>
                    </div>
                    <div className='t1-setcion-0-left-bot'>
                        <span>Cauți o locație primitoare, pentru o vacanta, mini-vacanta plina de relaxare, obiective turistice care merita vizitate și reconectare cu natura? Pensiunea Laricea este locația ideala! Pensiunea dispune de patru camere spațioase și luminoase cu capacitate de opt persoane fiecare cameră cu baie proprie și balcon, bucătărie complet utilată cu loc de luat masa, curte spațioasă, locuri de parcare, loc de joaca pentru copii, grătar cu cărbune și ciubăr.</span>
                    </div>
                </div>
                <div className='t1-setcion-0-right'>
                    <div className='t1-setcion-0-right-left'>
                        <div className='t1-setcion-0-right-left-top'>
                                <div className='t1-setcion-0-right-left-icon-container-icon'>
                                    <img src={MapIcon}/>
                                    <span>Locatie</span>
                                </div>
                                <div className='t1-setcion-0-right-left-icon-container-data'>
                                <span>Vatra Dornei, Comuna Panaci</span>
                                </div>
                        </div>
                        <div className='t1-setcion-0-right-left-top'>
                                <div className='t1-setcion-0-right-left-icon-container-icon'>
                                    <img src={PhoneIcon}/>
                                    <span>Contact</span>
                                </div>
                                <div className='t1-setcion-0-right-left-icon-container-data'>
                                    <p style={{display:'block'}}> +40 073 300 6550</p>
                                    <p style={{display:'block'}}> +40 073 300 6550</p>
                                </div>
                        </div>
                    </div>
                    <div className='t1-setcion-0-right-right'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37500.68340867107!2d25.352079118561534!3d47.25751691286002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47358f5ee472d239%3A0xb1223f946fe1c41c!2sPensiunea%20Laricea!5e0!3m2!1sro!2sro!4v1659002489020!5m2!1sro!2sro" 
                        width="100%" 
                        height="100%" 
                        allowfullscreen="" 
                        loading="lazy" 
                        style={{outline:'none', border:'none'}}
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
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

           
            <div className='t1-section-5'>
            {/* <Box sx={{ width: '100%', typography: 'body1',padding: '20px' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab icon={<BedIcon />} label="CAMERE" />
                        <Tab icon={<CountertopsIcon />} label="BUCATARIE" />
                        <Tab icon={<PoolIcon />} label="PISCINA" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box> */}
            <ImageSlider/>
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
    const shrinkText = (text)=>{
        console.log(window.innerWidth)
        if(window.innerWidth < 1000)
        {
            if(text.length > 30)
            {
                return `${text.slice(0,30)}...`
            }
        }
        else 
        {
            return text
        }
    }
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
                            <span>{shrinkText(elements[0]["desc"])}</span>
                            {/* <span>{elements[0]["desc"]}</span> */}
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
                                            <span>{shrinkText(el.desc)}</span>
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

