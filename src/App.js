import './App.css';
import Home from './Home';
import Contact from './Contact';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import ComputerIcon from './media/icons/computer.png';
import MobileIcon from './media/icons/mobile.png';
import StoreIcon from './media/icons/store.png';
import PlatformIcon from './media/icons/Platform.png';
import Portfolio_1_bg  from './media/portfolio/1_bg.png';
import PortfolioProject from './PortfolioProject';
import Template_1 from './Template_1/Components/Home';

function App() {
 
  const PortfolioData = [
    {
      title: 'demo 1',
      imageHeader: Portfolio_1_bg,
      client: 'no',
      descriere: 'blasdasdasdwdfw ddwd dwd sdfswdfw ddwd dwd sdfswdfw ddwd wdfw ddwd dwd sdfswdfw ddwd dwd sdfswdfw ddwd wdfw ddwd dwd sdfswdfw ddwd dwd sdfswdfw ddwd wdfw ddwd dwd sdfswdfw ddwd dwd sdfswdfw ddwd dwd sdfswdfw ddwd dwd sdfswdfw ddwd dwd sdfs',
      tehnologii: ['React', 'NodeJs', 'MongoDb', 'Material Ui'],
      live: '/',
      route: '/portfolio-1'
    },
    {
      title: 'demo 2',
      imageHeader: Portfolio_1_bg,
      client: 'no',
      descriere: 'blasdasdasdwdfw ddwd dwd sdfs',
      tehnologii: ['React', 'NodeJs', 'MongoDb', 'Material Ui'],
      live: '/',
      route: '/portfolio-2'
    },
    {
      title: 'demo 3',
      imageHeader: Portfolio_1_bg,
      client: 'no',
      descriere: 'blasdasdasdwdfw ddwd dwd sdfs',
      tehnologii: ['React', 'NodeJs', 'MongoDb', 'Material Ui'],
      live: '/',
      route: '/portfolio-3'
    }
  ]
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          {
            PortfolioData.map((el)=>{
              return(
                <Route path={el.route} element={
                  <PortfolioProject 
                    {...el}
                  />
                }/>
              )
            })
          }
          <Route path="/template-1" element={<Template_1/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
