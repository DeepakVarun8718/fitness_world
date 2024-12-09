import React, { useState } from 'react'
// import {useState} from 'react';
import { Box } from '@mui/material';
import Excercises from '../Component/Excercises';
import SearchExcercises from '../Component/SearchExcercises';
import HeroBanner from '../Component/HeroBanner';

const Home = () => {

  const [bodyPart, setBodyPart] = useState('all');
  const [excercise, setExcercise] = useState([]);
  console.log(setExcercise);
  // console.log(setBodyPart);
  return (
    <Box>
      <HeroBanner />

      <SearchExcercises
        setExcercise={setExcercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercises
        excercise={excercise}
        setExcercise={setExcercise}
        bodyPart={bodyPart}

      />

    </Box>
  )
}
export default Home;
