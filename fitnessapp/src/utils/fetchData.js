
 export const excerciseOptions={
  method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key':  '92b88447f4msh25d7cf48aa7604bp110a6ejsnc89b133274a4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '92b88447f4msh25d7cf48aa7604bp110a6ejsnc89b133274a4',
  },
};


export  const fetchData = async (url,options)=>{

    const response= await fetch(url,options);
     const data=await response.json();
     console.log(data);
     return data; 
}