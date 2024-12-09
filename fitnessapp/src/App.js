import './App.css';
import {Box} from "@mui/material";
import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import ExcerciseDetail from './Pages/ExcerciseDetail.js';
import Footer from './Component/Footer';



function App1(){

    return(
        <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
              
            <Router>
            <Navbar />
            <Routes>
         <Route path='/' element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExcerciseDetail/>} /> 
            </Routes>
             </Router>  
             <Footer/>

            
        </Box>
    );

}
export default App1;