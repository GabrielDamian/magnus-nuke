import '../Styles/AppBar.css';
import LogoIcon from '../Media/icons/logo.png';

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
    },
    ]
    return (
        <div className='t1-appbar-container'>
            <div 
                className='t1-appbar-items-row'
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
