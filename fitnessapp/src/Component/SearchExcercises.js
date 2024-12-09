import React from 'react'
import {Box,Stack,Button,Typography,TextField} from '@mui/material';
import { useEffect,useState } from 'react';
// import { fetchData,excerciseOptions } from '../utils/fetchData.js';
import { fetchData,excerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

 const SearchExcercises = ( {setExcercise,bodyPart,setBodyPart}) => {
    const [search,setSearch]=useState('');
    // const [excercise,setExcercise]=useState([]);
    const [bodyParts,setBodyParts]=useState([]);

    useEffect(()=>{
      const fetchExcerciseData = async()=>{

        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',excerciseOptions);

        setBodyParts(['all' , ...bodyPartsData]);
                // console.log(bodyParts);
        //  console.log(bodyPartsData);
      }
      fetchExcerciseData();
    

    },[]);

    const handleSearch = async()=>{
        if(search){

        
        const excerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises' ,excerciseOptions);
         console.log(excerciseData);
        
        const searchedExcercise = excerciseData.filter(
            (excercise)=>excercise.name.toLowerCase().includes(search)
            ||excercise.target.toLowerCase().includes(search)
            ||excercise.equipment.toLowerCase().includes(search)
            ||excercise.bodyPart.toLowerCase().includes(search) 
        )
        // console.log(excerciseData);
        setSearch('');
        setExcercise(searchedExcercise);
         }
        
    }
  return (
     <Stack justifyContent={'center'} alignItems={'center'} mt={'37px'} p={'20px'}>
        <Typography textAlign={'center'} fontWeight={'700'} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb={'50px'}>
            Awesome Excercise You <br/>
            Should Know
        </Typography>
        <Box>
            <TextField type='text' value={search} placeholder='Search Excercise' height={'76px'} onChange={(e)=>{ setSearch(e.target.value.toLowerCase())}} 
            sx={{
                input:{fontWeight:'700',border:'none',borderRadius:'4px'}
                , width:{lg:'800px', xs:'350px'},
                backgroundColor:'#FFF',
                borderRadius:"40px"
            }}>
            </TextField>
            <Button sx={{
                bgcolor:'#FF2526',
                color:'#FFF',
                textTransform:'none',
                width:{lg:'175px',xs:'80px'},
                fontSize:{lg:'20px',xs:'14px'},
                height:'56px',
                position:'absoulte',
                right:'0'
            }} onClick={handleSearch}>
                Search
            </Button>
        </Box>
        <Box sx={{ position :"relative", width:"100%" , p:"20px"}}>

           <HorizontalScrollbar data={bodyParts} 
           bodyPart={bodyPart}  
           setBodyPart={setBodyPart} />
        </Box>
     </Stack>
    )
}
export default SearchExcercises;
