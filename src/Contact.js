import React,{useState, useEffect, useRef} from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import './Contact.css';
import PhoneIcon from './media/icons/phone.png';
import EmailIcon from './media/icons/email.png';
import MapIcon from './media/icons/map.png';
import {scroller} from 'react-scroll';
import emailjs from '@emailjs/browser';

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

    const [name,setName] = useState('');
    const [company, setCompany] = useState('none')
    const [email,setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [content,setContent] = useState('');

    const [eroare, setEroare] = useState('');
    const [succes, setSucces] = useState('');

    const dateGenerator = ()=>{
        let date  = new Date();
        let ceva = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
        return ceva;
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2dqo4st', 'template_s21ul4v', form.current, '1tLfezjxHi-ZUipNB')
        .then((result) => {
            setSucces('Thank you for your email!')
            setName('')
            setEmail('')
            setContent('')
            setPhone('')
        }, (error) => {
            setEroare('Failed to send email. Please try again.')
        });
    };
    const form = useRef();

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
                        <form onSubmit={sendEmail} novalidate ref={form}>
                            <div className='contact-form-fields'>
                                <div className='contact-form-field'>
                                    <div className='contact-form-field-name'>
                                        <span>Nume/Prenume*</span>
                                    </div>
                                    <div className='contact-form-field-input'>
                                        <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} name="user_name"/>
                                    </div>   
                                </div>
                                <div className='contact-form-field'>
                                    <div className='contact-form-field-name'>
                                        <span>Email*</span>
                                    </div>
                                    <div className='contact-form-field-input'>
                                        <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} name="user_email"/>
                                    </div>   
                                </div>
                                <div className='contact-form-field'>
                                    <div className='contact-form-field-name'>
                                        <span>Telefon*</span>
                                    </div>
                                    <div className='contact-form-field-input'>
                                        <input type="text" value={phone} onChange={(event)=>{setPhone(event.target.value)}}/>
                                    </div>   
                                </div>
                            </div>
                            <div className='contact-form-text-field'>
                                <span>Detalii despre proiect *</span>
                                <textarea name="message" value={content} onChange={(event)=>{setContent(event.target.value)}}>
                                </textarea>
                            </div>
                            <div className='contact-form-submit'>
                                <input type="submit" />
                            </div>
                        </form>
                        <span style={{color:'red', width:'100%',fontFamily:'Poppins'}}>{eroare}</span>
                        <span style={{color:'green',fontFamily:'Poppins'}}>{succes}</span>
                    </div>
                </div>
            </div>
            <div className='separator'/>
            <Footer/>
        </div>
    )
}
export default Contact;
