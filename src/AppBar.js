import React from 'react';
import './AppBar.css';
import LogoIcon from './media/logo.png';
import {scroller} from 'react-scroll';
import { Router, useNavigate } from "react-router-dom";

const AppBar = ()=>{
    let history = useNavigate();
    const Itemns = [
        {
            name:'Acasa',
            link: '/',
            scrollTo: 'acasa'
        },
        {
            name: 'Despre noi',
            link: '/despre',
            scrollTo: 'section-1'
        },
        {
            name: 'Servicii',
            link: '/servicii',
            scrollTo:'section-2'
        },
        {
            name: 'Portofoliu',
            link: '/servicii',
            scrollTo: 'section-3'
        },
    ]
    return (
        <div className='app-bar-container'>
            <div className='app-left-container'>
                <img src={LogoIcon} alt="logo" onClick={()=>{history('/')}}/>
            </div>
            <div className='app-right-container'>
                {
                    Itemns.map((el)=>{
                        return(
                            <div className='app-bar-item' onClick={()=>{
                                console.log("da")
                                history("/");
                                setTimeout(()=>{
                                    scroller.scrollTo(el.scrollTo, {
                                        duration: 800,
                                        delay: 100,
                                        smooth: true,
                                        offset: -100, 
                                      })
                                },0)
                            }}>
                                {el.name}
                            </div>
                        )
                    })
                }
                <div className='app-bar-item' style={{minWidth: '120px'}}>
                    <div className='contact-btn' onClick={()=>{
                        history('/contact')
                        setTimeout(()=>{
                            scroller.scrollTo('top-contact', {
                                duration: 0,
                                delay: 100,
                                smooth: true,
                                offset: -100, 
                              })
                        },0)
                    }}>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppBar