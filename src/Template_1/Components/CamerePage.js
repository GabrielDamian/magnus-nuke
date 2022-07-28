import AppBar from "./AppBar";
import Footer from "./Footer";
import './Camere.css';
import ImageSlider from './ImageSlider';

import Opt1 from '../Media/options/1.png';
import Opt2 from '../Media/options/2.png';
import Opt3 from '../Media/options/3.png';
import Opt4 from '../Media/options/4.png';
import Opt5 from '../Media/options/5.png';
import Opt6 from '../Media/options/6.png';

import CheckImg from '../Media/icons/chekced.png';

import CamereBg from '../Media/bg/camere-bg.png';

const CamerePage = ()=>{
    
    let bgIntro ="https://drive.google.com/uc?id=1d1SYoLcJiE3gCzcuInW44NmJOkJdoaXx"

    let facilitati = [
        {
            nume: 'Baie in camera',
            icon: CheckImg
        },
        {
            nume: 'Camere cu balcon',
            icon: CheckImg
        },
        {
            nume: 'Internet in camera',
            icon: CheckImg
        },
        {
            nume: 'Vedere spre curtea interioara',
            icon: CheckImg
        },
        {
            nume: 'Vedere spre munte',
            icon: CheckImg
        },
        {
            nume: 'Camera cu TV',
            icon: CheckImg
        },
    ]
    return (
        <div className='t1-home-container' name='top-ref-t1'>
        <AppBar />
        <div className='t1-section-1' style={{
            backgroundImage: `url(${CamereBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'60vh'
        }}>
            <div className='t1-section-1-top'>
                <div className='t1-section1-about'>
                    <span>Camere</span>
                </div>
            </div>
            </div>
            <div className="t1-section-camere-container">
                <div className="t1-section-camere-top">
                    <div className="t1-section-camere-top-left">
                        <span>Camera dubla</span>
                    </div>
                    <div className="t1-section-camere-top-right">
                        <a href=''>Rezerva acum</a>
                    </div>
                </div>
                <div className="t1-section-camere-price">
                    <div className="t1-section-camere-price-top">
                        <span>Pret: 150 RON/noapte</span>
                    </div>
                    <div className="t1-section-camere-price-bot">
                        <span>Descriere camera</span>
                    </div>
                </div>
                <div className="t1-section-camere-pictures">
                    <ImageSlider/>
                </div>
                <div className="t1-section-camere-options">
                    <div className="t1-section-camere-options-title">
                        <span>Facilitati</span>
                    </div>
                    <div className="t1-section-camere-options-content">
                    {
                        facilitati.map((el)=>{
                            return(
                                <div className="option-camera-x">
                                    <div className="option-camera-x-icon">
                                        <img src={el.icon}/>
                                    </div>
                                    <div className="option-camera-x-data">
                                        {el.nume}
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default CamerePage;