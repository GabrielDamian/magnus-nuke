import '../Styles/AppBar.css';
import LogoIcon from '../Media/icons/logo.png';

const AppBar = ()=>{
    const Items1 = [
        {
            name: 'ACASA',
            link: '/'
        },
        {
            name: 'DESPRE NOI',
            link: '/'
        },
        {
            name: 'CAMERE',
            link: '/'
        },
        {
            name: 'SERVICII',
            link: '/'
        },
    ]
const Items2 = [
    {
        name: 'GALERIE',
        link: '/'
    },
    {
        name: 'BOOKING',
        link: '/'
    },
    {
        name: 'BLOG',
        link: '/'
    },
    {
        name: 'CONTACT',
        link: '/'
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
                        <a href=''>{el.name}</a>
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
                            <a href=''>{el.name}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AppBar;
