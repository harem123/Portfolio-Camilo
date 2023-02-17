import {Box, Button} from "@mui/material"
import Header from "../../components/Header"
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
            <Header title="Portfolio Camilo Portilla" subtitle="Welcome, here you will find my resume and relevant links to know about me"/>
            <Box >
            <Link to="https://drive.google.com/file/d/1XEGHN9cz65_fN7ApvPTScSRTSUmb8-Xa/view?usp=sharing" style={{ textDecoration: 'none' }}>
            <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            My Resume
          </Button>
          
          </Link>
          </Box>

          <Box sx={{ mt: "20px" }} >
            <Link to="https://github.com/harem123" style={{ textDecoration: 'none' }}>
            <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            GitHub
          </Button>
          </Link>
          </Box>

          <Box sx={{ mt: "20px" }} >
            <Link to="https://www.linkedin.com/in/camilo-portilla-2019a2/" style={{ textDecoration: 'none' }}>
            <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            LinkedIn
          </Button>
          </Link>
          </Box>


        </Box>
        
    )


}
export default Home