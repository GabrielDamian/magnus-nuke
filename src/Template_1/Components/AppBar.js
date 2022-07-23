import '../Styles/AppBar.css';
import LogoIcon from '../Media/icons/logo.png';

const AppBar = ()=>{
    const Items1 = [
        {
            name: 'HOME',
            link: '/'
        },
        {
            name: 'ABOUT US',
            link: '/'
        },
        {
            name: 'ROOMS',
            link: '/'
        },
        {
            name: 'SERVICES',
            link: '/'
        },
    ]
const Items2 = [
    {
        name: 'GALLERY',
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
            <div className='t1-appbar-items-row'>
            {
                Items1.map((el)=>{
                    return(
                        <a href='https://www.google.com'>{el.name}</a>
                    )
                })
            }
            </div>
            <div className='t1-appbar-logo-container'>
                <img src={LogoIcon} alt='logo'/>
            </div>
            <div className='t1-appbar-items-row'>
                {
                    Items2.map((el)=>{
                        return(
                            <a href='https://www.google.com'>{el.name}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AppBar;
