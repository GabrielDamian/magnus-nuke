import React from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import './PortfolioProject.css';
import { Router, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {scroller} from 'react-scroll';

const PortfolioProject = ({title,imageHeader,client,descriere,tehnologii,live,bg_imgs})=>{
    let history = useNavigate();
    React.useEffect(()=>{
        scroller.scrollTo('port-proj-top-ref', {
            duration: 700,
            delay: 100,
            smooth: true,
            offset: -100, 
          })
    },[])
    return (
        <div className='portfolio-proj-container' name="port-proj-top-ref">
            <AppBar/>
            <div className='app-bar-sticky-fix'/>
            <div className='portfolio-proj-content'>
                <div className='portfolio-proj-content-header'>
                    <span>Portfolio > Proiect {title}</span>
                </div>
                <div className='proj-content-image'>
                    {/* <img src={imageHeader} alt="project-image"/> */}
                    <Carousel>
                        {
                            bg_imgs.map((el)=>{
                                return(
                                    <div>
                                    <img src={el} />
                                </div>
                                )
                            })
                        }
                       
                        {/* <div>
                            <img src={imageHeader} />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={imageHeader} />
                            <p className="legend">Legend 3</p>
                        </div> */}
                    </Carousel>
                </div>
                <div className='proj-content-details'>
                    <div className='proj-content-details-col'>
                        <div className='proj-content-details-col-head'>
                            <span>Client:</span>
                        </div>
                        <div className='proj-content-details-col-body'>
                            {client}
                        </div>

                    </div>
                    <div className='proj-content-details-col'>
                        <div className='proj-content-details-col-head'>
                            <span>Descriere:</span>
                        </div>
                        <div className='proj-content-details-col-body'>
                            {descriere}
                        </div>

                    </div>
                    <div className='proj-content-details-col'>
                        <div className='proj-content-details-col-head'>
                            <span>Tehnologii:</span>
                        </div>
                        <div className='proj-content-details-col-body'>
                            {
                                tehnologii.map((el)=>{
                                    return(
                                            <p style={{display:'block'}}>-{el}</p>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className='portfolio-proj-live'>
                <button onClick={()=>{
                    window.location.replace(live)
                }}>
                    LIVE WEBSITE
                </button>
            </div>
            <div className='separator'/>
            <Footer/>
        </div>
    )
}
export default PortfolioProject;
