import React from 'react';
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

const Home = ()=>{
    const Rooms = [
        {
            name: 'Single Room',
            price: '150 RON',
            desc: "Lorem Ipsuorhe industry's standarrhe industry's standard dummy text ever since the 15",
            img: Room1
        },
        {
            name: 'Double Room',
            price: '250 RON',
            desc: "Lorem Ipsum is seen th's standarry's standard dummy text ever since the 15" ,
            img: Room2            
        },
        {
            name: 'Deluxe Double',
            price: '350 RON',
            desc: "Lorem Ipsum isnttry's strhe industry's standarandard dummy text ever since the 15" ,
            img: Room3
        },
    ]

    const section3Items = [
        {
            image:Activity1,
            title: 'Some random activity',
            desc: "Mauris egestauris egestas, tellus sed venenatis tincidunt, odio diam iaculis augue, nec tincidunt enim odio id arcu. Ut pelleas, tellus sed venenatis tincidunt, odio diam iaculis augue, nec tincidunt enim odio id arcu. Ut pellentesque, quam ut sagittis adipiscing, lectus metus mollis magna"
        },
        {
            image:Activity2,
            title: 'Wait, there are some more',
            desc: "Mauris egestas, tellus sed venenatis tincidunt, odio diam iaculis augue, nec tincidunauris egestas, tellus sed venenatis tincidunt, odio diam iaculis augue, nec tincidunt enim odio id arcu. Ut pellet enim odio id arcu. Ut pellentesque, quam ut sagittis adipiscing, lectus metus mollis magna"
        },
        {
            image:Activity3,
            title: 'And again, even more',
            desc: "Mauris egestas, tellus sed venenatis tincidunt, odio diam iaculis augue, nec tincidunt enim odio id arcu. Ut pellentesque, quam ut sagittis adipiscing, auris egestas, tellus sed venenatis tincidunt, odio diam iaculis augue, nec tincidunt enim odio id arcu. Ut pellelectus metus mollis magna"
        },
    ]

    const optionsItems = [
        {
            name:'Piscina',
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
        <div className='t1-home-container' >
            <AppBar />
            <div className='t1-section-1' style={{
                backgroundImage: `url(${IntroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }}>
                <div className='t1-section-1-top'>
                    <div className='t1-section-1-top-top'>
                        <span>Welcome to Grandium</span>
                    </div>
                    <div className='t1-section-1-top-center'>
                        <span>Experience the Freedom</span>
                    </div>
                    <div className='t1-section-1-top-bottom'>
                        <span>- in London -</span>
                    </div>
                </div>
                <div className='t1-section-1-bottom'>
                    <div className='t1-section-1-bottom-center'>
                        <input type='date' placeholder='ceva'/>
                        <input type='date' placeholder='ceva'/>
                        <select type='select' placeholder='ceva'>
                            <option value="Adults">Adults</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select type='select' placeholder='ceva'>
                            <option value="Childrens">Childrens</option>
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
            <div className='t1-section-3'>
                {
                    section3Items.map((el,index)=>{
                        if(index %2 == 0)
                        {
                            return(
                            <div className='t1-section-3-item'>
                                <div className='t1-section-3-left'>
                                    <img src={el.image} alt='activity'/>
                                </div>
                                <div className='t1-setion-3-right'>
                                    <div className='t1-section-3-right-top'>
                                        <span>{el.title}</span>
                                    </div>
                                    <div className='t1-section-3-right-bottom'>
                                        <span>{el.desc}</span>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        else 
                        {
                            return(
                                <div className='t1-section-3-item'>
                                    <div className='t1-setion-3-right'>
                                        <div className='t1-section-3-right-top'>
                                            <span>{el.title}</span>
                                        </div>
                                        <div className='t1-section-3-right-bottom'>
                                            <span>{el.desc}</span>
                                        </div>
                                    </div>
                                    <div className='t1-section-3-left'>
                                        <img src={el.image} alt='activity'/>
                                    </div>
                                </div>
                                )    
                        }
                    })
                }
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
            <Footer />
        </div>
    )
}

export default Home;
