import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { excerciseOptions,fetchData} from '../utils/fetchData';
 import  ExcerciseCard  from './ExcerciseCard';
//  import { fetchData,excerciseOptions } from '../utils/fetchData';

 const Excercises = ({excercise,setExcercise,bodyPart}) => {
  // console.log(excercise);

  const [currentPage,setcurrentPage] = useState(1);

  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises= excercise.slice(indexOfFirstExercise,indexOfLastExercise);


  
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);

        console.log("hello deepak");
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions);
      }

      setExcercise(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const paginate=(e,value)=>{
    setcurrentPage(value);

    window.scrollTo({top:1800,behavior:'smooth'})
  }
  return (

    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'>
      <Typography variant='h4' mb="46px">Showing Result</Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
        {
          currentExercises.map((exercise,index)=>(
            // <p>{exercise.name}</p>
             <ExcerciseCard key={index}  exercise={exercise} />
          ))
        }

      </Stack>
      <Stack mt='100px' alignItems='center'>
            
            {excercise.length >9 && (
            <Pagination 
            color="standard" 
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercise.length / 9)}
            page={currentPage}
            onChange={paginate}
            size=" large"/>
              )}
      </Stack>

    </Box>
    )
}
export default Excercises;
