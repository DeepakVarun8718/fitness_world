import React from 'react'
import { useState, useEffect } from 'react';
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {fetchData, excerciseOptions, youtubeOptions} from '../utils/fetchData';

import  {Details}  from '../Component/Details';
import ExcerciseVideos from '../Component/ExcerciseVideos';
// import SimilarExcercise from '../Component/SimilarExcercise';


const ExcerciseDetail = () => {

  const [excerciseDetail , setExcerciseDetail] = useState({});
  const [excerciseVideos,setExcerciseVideos] =useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();

  console.log(excerciseVideos.length);

  useEffect(()=>{

    const fetchExcerciseData= async  ()=>{
    const excerciseDbUrl='https://exercise.p.rapidapi.com';

    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const excerciseDetailData = await fetchData(`${excerciseDbUrl}/exercises/exercise/${id}`,excerciseOptions);
    setExcerciseDetail(excerciseDetailData)

    const excerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${excerciseDetailData.name} exercise`, youtubeOptions);
    setExcerciseVideos(excerciseVideosData.contents);
    // setExerciseVideos(exerciseVideosData.contents);

    const targetMuscleExercisesData = await fetchData(`${excerciseDbUrl}/exercises/target/${excerciseDetailData.target}`, excerciseOptions);
    setTargetMuscleExercises(targetMuscleExercisesData);

    const equimentExercisesData = await fetchData(`${excerciseDbUrl}/exercises/equipment/${excerciseDetailData.equipment}`, excerciseOptions);
    setEquipmentExercises(equimentExercisesData);

    

    }
    fetchExcerciseData();
  },[])
  return (

    <Box>
      <Details  excerciseDetail={excerciseDetail} />
      <ExcerciseVideos excerciseVideos={excerciseVideos} name={excerciseDetail.name} />
      {/* <SimilarExcercise  targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> */}

    </Box>
  )
}
export  default ExcerciseDetail;
