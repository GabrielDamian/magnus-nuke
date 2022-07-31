
import MapIcon from '../Media/icons/map.png';
import PhoneIcon from '../Media/icons/phone-call.png';
import AppBar from './AppBar';
import Footer from './Footer';
import EmailIcon from '../Media/icons/email.png';

import ContactBg from '../Media/bg/contact-bg.png';


const ContactPage = ()=>{

    let bgIntro ="https://drive.google.com/uc?id=1d1SYoLcJiE3gCzcuInW44NmJOkJdoaXx"

    return(
        <div className='t1-home-container' name='top-ref-t1'>
        <AppBar />
        <div className='t1-section-1' style={{
            backgroundImage: `url(${ContactBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            height:'70vh'
        }}>
            <div className='t1-section-1-top'>
                <div className='t1-section1-about'>
                    <span>Contact</span>
                </div>
            </div>
            </div>

            <div className='t1-section-0'>
                {/* <div className='t1-setcion-0-left'>
                    <div className='t1-setcion-0-left-top'>
                        <span><b>Pensiunea Laricea, in Vatra Dornei</b></span>
                    </div>
                    <div className='t1-setcion-0-left-bot'>
                        <span>Cauți o locație primitoare, pentru o vacanta, mini-vacanta plina de relaxare, obiective turistice care merita vizitate și reconectare cu natura? Pensiunea Laricea este locația ideala! Pensiunea dispune de patru camere spațioase și luminoase cu capacitate de opt persoane fiecare cameră cu baie proprie și balcon, bucătărie complet utilată cu loc de luat masa, curte spațioasă, locuri de parcare, loc de joaca pentru copii, grătar cu cărbune și ciubăr.</span>
                    </div>
                </div> */}
                <div className='t1-setcion-0-right' style={{width:'100%'}}>
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
                    <div className='t1-setcion-0-right-left'>
                        <div className='t1-setcion-0-right-left-top' style={{height:'33%'}}>
                                <div className='t1-setcion-0-right-left-icon-container-icon'>
                                    <img src={MapIcon}/>
                                    <span>Locatie</span>
                                </div>
                                <div className='t1-setcion-0-right-left-icon-container-data'>
                                <span>Vatra Dornei, Comuna Panaci</span>
                                </div>
                        </div>
                        <div className='t1-setcion-0-right-left-top'  style={{height:'33%'}}>
                                <div className='t1-setcion-0-right-left-icon-container-icon'>
                                    <img src={PhoneIcon}/>
                                    <span>Contact</span>
                                </div>
                                <div className='t1-setcion-0-right-left-icon-container-data'>
                                    <p style={{display:'block'}}> +40 733 006 550</p>
                                    <p style={{display:'block'}}> +40 733 006 551</p>
                                </div>
                        </div>
                        <div className='t1-setcion-0-right-left-top'  style={{height:'33%'}}>
                                <div className='t1-setcion-0-right-left-icon-container-icon'>
                                    <img src={EmailIcon}/>
                                    <span>Email</span>
                                </div>
                                <div className='t1-setcion-0-right-left-icon-container-data'>
                                    <p style={{display:'block'}}> emailTemporar@gmail.com</p>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
export default ContactPage