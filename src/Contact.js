import React from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import './Contact.css';
import PhoneIcon from './media/icons/phone.png';
import EmailIcon from './media/icons/email.png';
import MapIcon from './media/icons/map.png';
import {scroller} from 'react-scroll';

const Contact = ()=>{
    const RowItems = [
        {
            icon: PhoneIcon,
            title:'Apeleaza-ne',
            content:'+40 701 171 767'
        },
        {
            icon: EmailIcon,
            title:'e-Mail',
            content:'magnus.team.info@gmail.com'
        },
        {
            icon: MapIcon,
            title:'Locatie',
            content:'Bulevardul Tudor Vladimirescu 109-111, Iasi 700650'
        },
        
    ]
    const fields = ['Nume/Prenume*','Companie(optional)','Email*','Telefon*']
    React.useEffect(()=>{
        scroller.scrollTo('top-contact', {
            duration: 700,
            delay: 100,
            smooth: true,
            offset: -100, 
          })
    },[])

    return(
        <div className='contact-container' name='top-contact'>
            <AppBar/>
            <div className='app-bar-sticky-fix'>
            </div>
            <div className='contact-content'>
                <div className='contact-content-center'>
                    <div className='contact-contet-items-row'>
                        {
                            RowItems.map((el)=>{
                                return(
                                    <div className='contact-item-elem'>
                                        <div className='contact-item-elem-img'>
                                            <img src={el.icon} alt='contact-icon'/>
                                        </div>
                                        <div className='contact-item-elem-content'>
                                            <div className='contact-item-elem-content-top'>
                                                {el.title}
                                            </div>
                                            <div className='contact-item-elem-content-bottom'>
                                                {el.content}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='contact-content-call'>
                        <span>Vrei să iei legătura cu noi mai ușor? Completează formularul de mai jos.</span>
                    </div>
                    <div className='contact-content-form'>
                        <form>
                            <div className='contact-form-fields'>
                            {
                                fields.map((el)=>{
                                    return(
                                        <div className='contact-form-field'>
                                            <div className='contact-form-field-name'>
                                                <span>{el}</span>
                                            </div>
                                            <div className='contact-form-field-input'>
                                                <input type="text"/>
                                            </div>   
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className='contact-form-text-field'>
                                <span>Detalii despre proiect *</span>
                                <textarea>
                                </textarea>
                            </div>
                            <div className='contact-form-submit'>
                                <input type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='separator'/>
            <Footer/>
        </div>
    )
}
export default Contact;
