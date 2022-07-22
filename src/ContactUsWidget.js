import React from 'react';
import { Router, useNavigate } from "react-router-dom";

const ContactUsWidget = ()=>{
  
    let history = useNavigate();

   
    return(
        <div className='contact-us'>
        <div className='contact-us-left'>
          <span>
            Vrei să discutăm despre proiectul tău ?
          </span>
        </div>
        <div className='contact-us-right'>
          <button onClick={()=>{
            history('/contact')
          }}>
            CONTACTEAZA-NE
          </button>
        </div>
      </div>
    )
}
export default ContactUsWidget;
