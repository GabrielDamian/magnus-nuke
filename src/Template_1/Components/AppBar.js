import '../Styles/AppBar.css';
import LogoIcon from '../Media/icons/logo.png';
import MobileMenu from '../Media/icons/menu.png';
import {useState,useEffect} from 'react';
import CloseImg from '../Media/icons/close.png';

const AppBar = ()=>{
    const Items1 = [
        {
            name: 'ACASA',
            link: '/template-1'
        },
        {
            name: 'CAMERE',
            link: '/template-1/camere'
        },
    ]
const Items2 = [
    {
        name: 'DESPRE NOI',
        link: '/template-1/despre'
    },
    {
        name: 'CONTACT',
        link: '/template-1/contact'
    },]

    const [openMobile, setOpenMobile] = useState(false);
    useEffect((prev)=>{
        console.log("openMobile:",openMobile)
    },[openMobile])

    const handleBurgerClick = ()=>{
        setOpenMobile((prev)=>{
            return !prev
        })
    }
    return (
        <div className='t1-appbar-container'>
            <div className='mobile-menu'>
                <img src={MobileMenu} alt="burger-menu" onClick={handleBurgerClick}/>
            </div>
            <div className='mobile-menu-container' style={{
                animationName: openMobile ? 'moveMobileMenu1':'moveMobileMenu2',
                animationDuration: '0.3s',
                animationTimingFunction:'linear',
                animationFillMode: 'forwards',
                animationDirection: 'alternate-reverse'
            }}>
                <div className='mobile-app-bar-exit'>
                    <img src={CloseImg} alt="close" onClick={handleBurgerClick}/>
                </div>
                {
                    Items1.map((el)=>{
                        return(
                            <div className='mobile-app-bar-item'>
                            <a href={el.link}>{el.name}</a>
                        </div>
                        )
                    })
                }
                {
                    Items2.map((el)=>{
                        return(
                            <div className='mobile-app-bar-item'>
                            <a href={el.link}>{el.name}</a>
                        </div>
                        )
                    })
                }
            </div>
            <div className='t1-appbar-items-row'
                style={{
                    animation: 'menu-from-left 1.5s ease',
                    animationFillMode: 'forwards',
                    transform: 'translateX(-100%)'
                }}
            >
            {
                Items1.map((el)=>{
                    return(
                        <a href={el.link}>{el.name}</a>
                    )
                })
            }
            </div>
            <div className='t1-appbar-logo-container'>
                <img src={LogoIcon} alt='logo'/>
            </div>
            <div 
                className='t1-appbar-items-row'
                style={{
                    animation: 'menu-from-right 1.5s ease',
                    animationFillMode: 'forwards',
                    transform: 'translateX(100%)'
                }}
            >
                {
                    Items2.map((el)=>{
                        return(
                            <a href={el.link}>{el.name}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AppBar;
