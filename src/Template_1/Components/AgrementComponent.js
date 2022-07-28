import './Agrement.css';
import AppBar from './AppBar';
import Footer from './Footer';

import CalimaniImg from '../Media/activities/2.jpg';
import PartieImg from '../Media/activities/1.jpg';

const AgrementComponent = ({indexPointer})=>{
    const config = [
        {
            title: 'Parcul National Calimani',
            desc: 'Desc caliman',
            img: CalimaniImg,
            map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10521.845139397821!2d25.345192037464926!3d47.26470416677336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47358e886f5f3c9b%3A0x7e7522b5680a12f5!2sParcul%20Na%C8%9Bional%20C%C4%83limani!5e0!3m2!1sro!2sro!4v1659013012584!5m2!1sro!2sro" 
            width="100%" 
            height="100%" 
            style={{border:'none', outline:'none'}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        },
        {
            title: 'Partia dealul negru',
            desc: 'Desc partie',
            img: PartieImg,
            map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.7344111711614!2d25.333287050035647!3d47.319526815657525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4735927a7b226153%3A0xc3b1b0f3d995e65c!2sP%C3%A2rtia%20Dealu%20Negru!5e0!3m2!1sro!2sro!4v1659013256181!5m2!1sro!2sro" 
            width="100%" 
            height="100%" 
            style={{border:'none', outline:'none'}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        }
    ]

    let bgIntro ="https://drive.google.com/uc?id=1zlL-EhlRPNQhbRE2se5Z76PYhga1Z-Vl"

    return(
        <div className='t1-home-container' name='top-ref-t1'>
            <AppBar />
            <div className='t1-section-1' style={{
                backgroundImage: `url(${bgIntro})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }}>
                <div className='t1-section-1-top'>
                    <div className='t1-section1-about'>
                        <span>Agrement: {config[indexPointer]["title"]}</span>
                    </div>
                </div>
            </div>
            <div className='t1-section-agrement-container'>
                <div className='t1-section-agrement-container-title'>
                    <span>{config[indexPointer]["title"]}</span>
                </div>
                <div className='t1-section-agrement-container-img'>
                    <img src={config[indexPointer]["img"]}/>
                </div>

                <div className='t1-section-agrement-container-desc'>
                    <span>Acest parc mirific reprezintă o arie protejată de interes național și oferă un altfel de spectacol. Parcul Național Călimani se întinde pe teritoriul a patru județe (Mureș, Suceava, Harghita și Bistrița-Năsăud) și este o zonă specială de conservare. 
                        Un subiect incitant legat de Munții Călimani este prezența pe aceste meleaguri în vechime a haiducilor, unii celebri ca Pintea sau alții mai puțin cunoscuți ca Pohontu, Pleșcă, Miu și nu în ultimul rând Haralambie Niculita. Povestea lor împletește momente de bărbăție și sete de dreptate, îmbinate cu viața grea și dură în inima munților. Au rămas în urmă legende cu comori ascunse în peșteri păzite de personaje din mitologia populară. Palma lui Pintea este încrustată în stâncă la Apa Rece. Tot în apropiere se găsește și Izvorul lui Pintea.
                    </span>
                </div>
                <div className='t1-section-agrement-container-map'>
                    {config[indexPointer]["map"]}
                </div>
            </div>
            <Footer/>
        </div>
        )
}
export default AgrementComponent;