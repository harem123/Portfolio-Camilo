import {Box, Button,IconButton} from "@mui/material"
import Header from "../../components/Header"
import Cards from "../../components/Cards"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import { useTheme} from "@mui/material"
import {Link} from "react-router-dom"


const Home = () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
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
          <Box sx={{ display: 'flex', justifyContent: 'center' , maxWidth: '600px', margin: '0 auto'  }} >
            <Header title="Projects" />
            </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Link to="https://github.com/harem123/nodeAPI-REST">
          <Box sx={{ marginRight: '10px' }} > 
              <Cards title={"Node JS API REST"} info={"Backend project using node js and express with user login and and good API REST practices"}/>
          </Box>
          </Link>
          <Link to="https://goalab.up.railway.app/">
          <Box sx={{ marginRight: '10px' }} > 
              <Cards title={"React JS Dashboard"} info={"Frontend responsive Dashboard project with light and dark theme and custom Material MUI palette"}/>
          </Box>
          </Link>
          <Box > 
              <Cards title={"Python Desktop App"} info={"Tkinter GUI to manage many microcontrollers via serial comunication"}/>
          </Box>
            </Box>

          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '200px' }}>
          <Box sx={{ mt: "20px",marginRight: '8px' }} >
            <Link to="https://github.com/harem123" style={{ textDecoration: 'none' }}>
            <IconButton>
              <GitHubIcon/>
            </IconButton>
          </Link>
          </Box>
          
          <Box sx={{ mt: "20px" }} >
            <Link to="https://www.linkedin.com/in/camilo-portilla-2019a2/" style={{ textDecoration: 'none' }}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Link>
          </Box>
          </Box>


        </Box>
        
    )


}
export default Home