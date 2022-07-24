import React from 'react';
import './ServiceGeneric.css';
import AppBar from './AppBar';
import Footer from './Footer';
import ContactUsWidget from './ContactUsWidget';
import {scroller} from 'react-scroll';

const ServiceGeneric = ({title,image,text1,text2,text3})=>{
    React.useEffect(()=>{
        scroller.scrollTo('top-ref', {
            duration: 700,
            delay: 100,
            smooth: true,
            offset: -100, 
          })
    },[])
    return(
        <div className='services-container' name='top-ref'>
            <AppBar/>
            <div className='app-bar-sticky-fix'>
            </div>
            <div className='services-content'>
                <div className='services-content-top'>
                    <div className='content-top-content'>
                        Servicii > {title}
                    </div>
                </div>
                <div className='services-image-section'>
                    <img src={image} alt="service-icon"/>
                </div>
                <div className='services-content-data'>
                    <div className='services-data-header'>
                        <h2>{title}</h2>
                    </div>
                    <div className='services-data-text'>
                        {text1}
                        <br></br>
                        <br></br>
                        {text2}
                        <br></br>
                        <br></br>
                        {text3}
                    </div>
                </div>  
                <ContactUsWidget />
                <div className='separator'/>
            </div>
            <Footer/>
        </div>
    )
}
export default ServiceGeneric;
