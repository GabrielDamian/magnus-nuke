import '../Styles/Footer.css';
import FbIcon from '../Media/icons/facebook.png';
import IgIcon from '../Media/icons/instagram.png';
import TwitterIcon from '../Media/icons/twitter.png';
import LogoIcon from '../Media/icons/logo.png';

import MapIcon from '../Media/icons/map.png';
import PhoneIcon from '../Media/icons/phone-call.png';
import MailIcon from '../Media/icons/paper-plane.png';

const Footer = ()=>{
    let icons = [
        {
            icon: FbIcon,
            link: 'https://www.google.com'
        },
        {
            icon: IgIcon,
            link: 'https://www.google.com'
        },
        {
            icon: TwitterIcon,
            link: 'https://www.google.com'
        },
    ]
    let icons2 = [
        {
            icon: MapIcon,
            name: 'Vatra Dornei - Piatra Neamț'
        },
        {
            icon: PhoneIcon,
            name: '+40 733 006 550'
        },
        {
            icon: PhoneIcon,
            name: '+40 733 006 551'
        },
        {
            icon: MailIcon,
            name: 'ACUJBOAIEVICA@GMAIL.COM'
        },
    ]
    return (
        <div className='t1-footer-container'>
            {/* <div className='t1-footer-top'>
                <div className='t1-footer-top-name'>
                    <span style={{fontSize:'0.7rem'}}><b>SOCIAL MEDIA</b></span>
                    <span style={{fontSize:'0.9rem'}}>URMĂREȘTE PENSIUNEA POIANA</span>
                </div>
                <div className='t1-footer-top-icons'>
                {
                    icons.map((el)=>{
                        return(
                            <img src={el.icon} alt='social-media'/>
                        )
                    })
                }
                </div>
            </div> */}
            <div className='t1-footer-bottom'>
                <div className='t1-footer-bottom-top'>
                    <img src={LogoIcon} alt='logo'/>
                </div>
                <div className='t1-footer-bottom-bottom'>
                    <div className='t1-footer-bottom-bottom-copy'>
                        <span>COPYRIGHT © PENSIUNEA LARICEA</span>
                    </div>
                    <div className='t1-footer-bottom-bottom-data'>
                    {
                        icons2.map((el)=>{
                            return(
                                <div className='t1-footer-bottom-icons'>
                                    <img src={el.icon}/>
                                    <span>{el.name}</span>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
