import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PhoneIcon from '@mui/icons-material/Phone';
import CountertopsIcon from '@mui/icons-material/Countertops';
import PoolIcon from '@mui/icons-material/Pool';
import BedIcon from '@mui/icons-material/Bed';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ForestIcon from '@mui/icons-material/Forest';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import WavesIcon from '@mui/icons-material/Waves';
import { Carousel } from 'react-responsive-carousel';

import Bar1 from '../Media/sorted/Bar/1.jpg';
import Bar2 from '../Media/sorted/Bar/2.jpg';
import Bar3 from '../Media/sorted/Bar/3.jpeg';

import Restaurant1 from '../Media/sorted/Restaurant/1.jpg';
import Restaurant2 from '../Media/sorted/Restaurant/2.jpg';
import Restaurant3 from '../Media/sorted/Restaurant/3.jpg';
import Restaurant4 from '../Media/sorted/Restaurant/4.jpg';
import Restaurant5 from '../Media/sorted/Restaurant/5.jpg';
import Restaurant6 from '../Media/sorted/Restaurant/6.jpeg';
import Restaurant7 from '../Media/sorted/Restaurant/7.jpeg';

import Camere1 from '../Media/sorted/Camere/1.jpg';
import Camere2 from '../Media/sorted/Camere/2.jpg';
import Camere3 from '../Media/sorted/Camere/3.jpg';
import Camere4 from '../Media/sorted/Camere/4.jpg';
import Camere5 from '../Media/sorted/Camere/5.jpg';
import Camere6 from '../Media/sorted/Camere/6.jpg';
import Camere7 from '../Media/sorted/Camere/7.jpg';
import Camere8 from '../Media/sorted/Camere/8.jpg';
import Camere9 from '../Media/sorted/Camere/9.jpeg';
import Camere10 from '../Media/sorted/Camere/10.jpeg';
import Camere11 from '../Media/sorted/Camere/11.jpeg';
import Camere12 from '../Media/sorted/Camere/12.jpeg';

import Bucatarie1 from '../Media/sorted/Bucatarie/1.jpg';
import Bucatarie2 from '../Media/sorted/Bucatarie/2.jpg';
import Bucatarie3 from '../Media/sorted/Bucatarie/3.jpeg';

import Imprejur1 from '../Media/sorted/Imprejurari/1.jpg';
import Imprejur2 from '../Media/sorted/Imprejurari/2.jpg';
import Imprejur3 from '../Media/sorted/Imprejurari/3.jpg';
import Imprejur4 from '../Media/sorted/Imprejurari/4.jpg';
import Imprejur5 from '../Media/sorted/Imprejurari/5.jpg';
import Imprejur6 from '../Media/sorted/Imprejurari/6.jpg';
import Imprejur7 from '../Media/sorted/Imprejurari/7.jpg';
import Imprejur8 from '../Media/sorted/Imprejurari/8.jpg';
import Imprejur9 from '../Media/sorted/Imprejurari/9.jpg';
import Imprejur10 from '../Media/sorted/Imprejurari/10.jpg';
import Imprejur11 from '../Media/sorted/Imprejurari/11.jpg';
import Imprejur12 from '../Media/sorted/Imprejurari/12.jpg';
import Imprejur13 from '../Media/sorted/Imprejurari/13.jpg';
import Imprejur14 from '../Media/sorted/Imprejurari/14.jpg';
import Imprejur15 from '../Media/sorted/Imprejurari/15.jpg';
import Imprejur16 from '../Media/sorted/Imprejurari/16.jpeg';
import Imprejur17 from '../Media/sorted/Imprejurari/17.jpeg';
import Imprejur18 from '../Media/sorted/Imprejurari/18.jpeg';
import Imprejur19 from '../Media/sorted/Imprejurari/19.jpeg';
import Imprejur20 from '../Media/sorted/Imprejurari/20.jpeg';
import Imprejur21 from '../Media/sorted/Imprejurari/21.jpeg';

import Ciubar1 from '../Media/sorted/Ciubar/1.jpg';
import Ciubar2 from '../Media/sorted/Ciubar/2.jpeg';
import Ciubar3 from '../Media/sorted/Ciubar/3.jpeg';

import Camera_1_1 from '../Media/Camere/1/1.jpg';
import Camera_1_2 from '../Media/Camere/1/2.jpg';
import Camera_1_3 from '../Media/Camere/1/3.jpg';

import Camera_2_1 from '../Media/Camere/2/1.jpg';
import Camera_2_2 from '../Media/Camere/2/2.jpg';
import Camera_2_3 from '../Media/Camere/2/3.jpg';

import Camera_3_1 from '../Media/Camere/3/1.jpg';
import Camera_3_2 from '../Media/Camere/3/2.jpg';
import Camera_3_3 from '../Media/Camere/3/3.jpg';

import Camera_4_1 from '../Media/Camere/4/1.jpg';
import Camera_4_2 from '../Media/Camere/4/2.jpg';
import Camera_4_3 from '../Media/Camere/4/3.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ImageSlider() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  let BarImgs = [Bar1,Bar2, Bar3]
  let RestImgs = [Restaurant1,Restaurant2,Restaurant3,Restaurant4,Restaurant5,Restaurant6,Restaurant7]
  let CamereImgs = [Camere1,Camere2,Camere3,Camere4,Camere5,Camere6,Camere7,Camere9,Camere10,Camere12]
  let Bucatarie = [Bucatarie1,Bucatarie2,Bucatarie3]
  let Imprejur = [Imprejur2,Imprejur4,Imprejur6,Imprejur7,Imprejur8,Imprejur9,Imprejur10,Imprejur11,Imprejur12,Imprejur13,Imprejur14,Imprejur15,Imprejur16,Imprejur17,Imprejur18,Imprejur19,Imprejur20,Imprejur21]
  let Ciubar = [Ciubar1,Ciubar2]

  let Camera_1 = [Camera_1_1,Camera_1_2,Camera_1_3]
  let Camera_2 = [Camera_2_1,Camera_2_2,Camera_2_3]
  let Camera_3 = [Camera_3_1,Camera_3_2,Camera_3_3]
  let Camera_4 = [Camera_4_1,Camera_4_2,Camera_4_3]

  return (
    <Box sx={{ width: '100%', padding: '30px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
          <Tab icon={<BedIcon />} label="Camera 1" {...a11yProps(0)} />
          <Tab icon={<BedIcon />} label="Camera 2" {...a11yProps(1)} />
          <Tab icon={<BedIcon />} label="Camera 3" {...a11yProps(2)} />
          <Tab icon={<BedIcon />} label="Camera 4" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Carousel width="100%">
            {
                Camera_1.map((el)=>{
                    return(
                        <div style={{height:'70vh', backgroundColor:'grey'}}>
                            <img src={el} style={{height: '100%',objectFit:'contain'}} />
                        </div>
                    )
                })
            }
        </Carousel>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Carousel style={{height:'70vh'}}>
        {
                Camera_2.map((el)=>{
                    return(
                        <div style={{height:'70vh', backgroundColor:'grey'}}>
                            <img src={el} style={{height: '100%',objectFit:'contain'}} />
                        </div>
                    )
                })
            }
        </Carousel>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Carousel style={{height:'70vh'}}>
            {
                    Camera_3.map((el)=>{
                        return(
                            <div style={{height:'70vh', backgroundColor:'gray'}}>
                                <img src={el} style={{height: '100%',objectFit:'contain'}} />
                            </div>
                        )
                    })
                }
            </Carousel>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Carousel style={{height:'70vh'}}>
            {
                    Camera_4.map((el)=>{
                        return(
                            <div style={{height:'70vh', backgroundColor:'gray'}}>
                                <img src={el} style={{height: '100%',objectFit:'contain'}} />
                            </div>
                        )
                    })
                }
            </Carousel>
      </TabPanel>
    </Box>
  );
}
