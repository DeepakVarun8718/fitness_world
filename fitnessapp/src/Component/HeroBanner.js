import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (

    <Box sx={{mt:{lg:'212px',xs:'70px'},
    ml:{sm:"50px"}}} position={'relative'} p={'20px'}>
        <Typography color={'#FF2625'} fontWeight={'600'} fontSize={'26px'}>
            Fitness Club
        </Typography>
        <Typography color={'balck'} fontSize={'50px'} fontWeight={'700'} sx={
            {fontsize:{lg:"44px",xs:'40px'}}
        } mb={'23px'} mt={'30px'}>
            Smile , Sweat <br/> And Repeat
        </Typography>
        <Typography color={'balck'} fontSize={'22px'} lineHeight={'35px'}  mb={'10px'}>
            Cheack Out The Most Effeactive Excercises
        </Typography>
        <Button variant='contained' color='error' herf="#excercises" sx={{backgroundColor:'#FF2526', padding:"10px"}}>
             Explore Excercises
        </Button>
        <Typography fontWeight={'600'}
        sx={{opacity:'0.1',display:{lg:'block',xs:'none'}}} 
        color={"#FF2526"}
        fontSize={'200px'} marginTop={'50px'}>
            Excercises
        </Typography>
        
        <img src={HeroBannerImage} alt='Banner' className='hero-banner-img'/>
    </Box>
    )
}

export default HeroBanner;
