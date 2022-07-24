import React from 'react';
import LogoMagnus from './media/logo.png';
import PhoneIcon from './media/icons/phone.png';
import EmailIcon from './media/icons/email.png';

const Footer = ()=>{
    return(
<div className='footer'>
          <div className='footer-left'>
            <div className='footer-left-top'>
              <img src={LogoMagnus} alt='logo'/>
            </div>
            <div className='footer-left-bottom'>
              <span>
                Magnus este o marcă înregistrată.
                Toate drepturile asupra conținutului prezent pe website sunt rezervate.
              </span>
              <br></br>
              <br></br>
              <span>
              Orice reproducere parțială sau integrală se pedepsește conform legilor în vigoare.
              </span>
            </div>
          </div>
          <div className='footer-right'>
            <div className='footer-right-column'>
              <div className='footer-right-column-item'>
                <img src={PhoneIcon}/>
                <span>+40 701 171 767</span>
              </div>
              <div className='footer-right-column-item'>
                <img src={EmailIcon}/>
                <span>magnus.team.info@gmail.com</span>
              </div>
              
            </div>
          </div>
        </div>
    )
}
export default Footer;

