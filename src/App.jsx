import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar.jsx"
import {Routes, Route} from "react-router-dom"
import Home from "./scenes/home/home.jsx"


function App() {
  
const [theme, colorMode] =useMode()

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app"> 
    
    <main className="content">

      <Topbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      
     </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App