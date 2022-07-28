import AppBar from './AppBar';
import './AboutUs.css';
import Footer from './Footer';
import MapWidget from './MapWidget';

import AboutBg from '../Media/bg/despre-noi.png';
import DesoreNoiImg from '../Media/sorted/Imprejurari/7.jpg';

const AboutUs = ()=>{

    let bgIntro ="https://drive.google.com/uc?id=1d1SYoLcJiE3gCzcuInW44NmJOkJdoaXx"

    return (
        <div className='t1-home-container' name='top-ref-t1'>
        <AppBar />
        <div className='t1-section-1' style={{
            backgroundImage: `url(${AboutBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'60vh'
        }}>
           <div className='t1-section1-about'>
                <span>Despre noi</span>
           </div>
        </div>
        <div className='t1-section2-about'>
            <div className='t1-section2-about-left'>
                <img src={DesoreNoiImg} alt="about-us"/>
            </div>
            <div className='t1-section2-about-right'>
                <div className='t1-section2-about-right-bottom'>
                    <span>
                        Cauți o locație primitoare, pentru o vacanta, mini-vacanta plina de relaxare, obiective turistice care merita vizitate și reconectare cu natura? Pensiunea Laricea este locația ideala! Pensiunea dispune de patru camere spațioase și luminoase cu capacitate de opt persoane fiecare cameră cu baie proprie și balcon, bucătărie complet utilată cu loc de luat masa, curte spațioasă, locuri de parcare, loc de joaca pentru copii, grătar cu cărbune și ciubăr.                     </span>
                </div>
            </div>
        </div>
        <MapWidget/>
        <Footer />
        </div>
    )
}
export default AboutUs;
