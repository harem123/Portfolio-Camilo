import {Box, Button,IconButton, Grid} from "@mui/material"
import Header from "../../components/Header"
import Cards from "../../components/Cards"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme} from "@mui/material"
import {Link} from "react-router-dom"
import useMediaQuery from '@mui/material/useMediaQuery';
import pythonImg from '../../static/images/cards/imagePython.jpg'
import dashImg from '../../static/images/cards/dash4.png'
import nodeImg from '../../static/images/cards/nodejs.png'
const Home = () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    const isXsScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box m="20px" textAlign='center'>
          <Box sx={{ display: 'flex', justifyContent: 'center' , maxWidth: '700px', margin: '0 auto'  }} >
            <Header title="Portfolio Camilo Portilla" subtitle="Welcome, My name is Camilo, i am a Electronic Engineer passionate about technology and programming. During my education, I worked as a freelancer in microcontroller programming and embedded systems using C++, full-stack development with Javascript and Python, hardware design, and IoT solutions."/>
            </Box>
            <Box >
            <Link to="https://drive.google.com/file/d/1XEGHN9cz65_fN7ApvPTScSRTSUmb8-Xa/view?usp=sharing" style={{ textDecoration: 'none' }}>
            <Button
            sx={{
              background: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            My Resume
          </Button>
          </Link>
          {/* PSEUDO FOOTER*/}
         
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '100px' }}>
          <Box sx={{ mt: "20px",marginRight: '8px' }} >
            <Link to="https://github.com/harem123" style={{ textDecoration: 'none' }}>
            <IconButton >
              <GitHubIcon sx={{ fontSize: '50px' }}/>
            </IconButton>
          </Link>
          </Box>
          
          <Box sx={{ mt: "20px" }} >
            <Link to="https://www.linkedin.com/in/camilo-portilla-2019a2/" style={{ textDecoration: 'none' }}>
            <IconButton>
              <LinkedInIcon sx={{ fontSize: '50px' }}/>
            </IconButton>
          </Link>
          </Box>
          </Box>
          {/* PSEUDO FOOTER*/}
          {/* GRID CHART*/}
          
          <Box sx={{ display: 'flex', justifyContent: 'center' , maxWidth: '600px', margin: '0 auto'  }} >
            <Header title="Projects" />
            </Box>
            
          <Box sx={{ display: 'flex',flexDirection: isXsScreen ? 'column' : 'row', justifyContent: 'center'}}>
            <Link to="https://github.com/harem123/nodeAPI-REST" style={{ textDecoration: 'none' }}>
          <Box sx={{ marginRight: '10px', marginBottom:'20px'}} > 
              <Cards imgUrl={nodeImg} title={"Node JS API REST"} info={"Backend project using node js and express with user login and and good API REST practices"}/>
          </Box>
          </Link>
          <Link to="https://goalab.up.railway.app/" style={{ textDecoration: 'none' }}>
          <Box sx={{ marginRight: '10px' , marginBottom:'20px'}} > 
              <Cards imgUrl={dashImg}  title={"React JS Dashboard"} info={"Frontend responsive Dashboard project with light and dark theme and custom Material MUI palette"}/>
          </Box>
          </Link>
          <Link to="https://github.com/harem123/pyhton-desktop-app" style={{ textDecoration: 'none' }}>
          <Box sx={{ marginBottom:'20px'}}> 
              <Cards imgUrl={pythonImg}  title={"Python Desktop App"} info={"Complete desktop application that creates an interface via USB Serial with a series of controllers and actuators (motors, sensors, lights) to simulate a controlled football training environment, which also sends all the information to the database."}/>
          </Box>
          </Link>
            </Box>
            </Box>

        </Box>
        
    )


}
export default Home