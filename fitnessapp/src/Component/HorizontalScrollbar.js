import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import  BodyPart  from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/styles.css';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExcerciseCard';



// const LeftArrow = ()=>{
//     const {scrollPrev} = useContext(VisibilityContext);
//     return (
//         <Typography onClick={()=> scrollPrev() } className='right-arrow'>
//             <img src={LeftArrowIcon} alt="right-arrow"/>
//         </Typography>
//     )
// }

// const RightArrow = ()=>{
//     const {scrollPrev}=useContext(VisibilityContext);
//     return (
//         <Typography   onClick={()=> scrollPrev()} className='left-arrow'>
//             <img src={RightArrowIcon} alt="right-arrow"/>
//         </Typography>
//     )
// }

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };




 const HorizontalScrollbar = ({ data , bodyPart,setBodyPart ,isBodyParts}) => {

    return (



        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
    { data.map((item) => (
        
        <Box key={item.id || item}
            itemID ={item.id || item}
            title={item.id || item}
            m="0 40px"
        >
        {BodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box> ))
}

        </ScrollMenu>
    )
}
export default HorizontalScrollbar;










// import React, { useContext } from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import { Box, Typography } from '@mui/material';

// import ExcerciseCard from './ExcerciseCard';
// import {BodyPart} from './BodyPart';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
//   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//     {data.map((item) => (
//       <Box
//         key={item.id || item}
//         itemId={item.id || item}
//         title={item.id || item}
//         m="0 40px"
//       >
//         {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExcerciseCard exercise={item} /> }
//       </Box>
//     ))}
//   </ScrollMenu>
// );

// export default HorizontalScrollbar;