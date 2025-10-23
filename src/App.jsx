import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Projects from './components/pages/Projects.jsx'
import { Box, Container } from '@mui/material'
import FB from './assets/facebook.png'
import InLink from './assets/Linkedin.png'

const navHeight = '110px'

function App() {


  return (
    <>

    <Router>
        <Nav/>
        <Box component='main' sx={{paddingTop: navHeight}}>

      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/stampp-tech-solutions' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
        </Box>
         <div style={{display: 'flex', justifyContent: 'center',
              flexDirection: 'column', alignItems: 'center', marginTop: '10vh'
            }}>
            <h2 style={{color: 'white'}}>Connect with us!</h2>
            <div style={{display: 'flex'}}>
              <a href="https://www.facebook.com/people/Stampp-Tech-Solutions-LLC/61581903990116/">
              <img src={FB} alt="" style={{height: '7.5vh'}} />
              </a>
            <div style={{display: 'flex',}}>
              <a href="https://www.linkedin.com/in/marcus-stampp-b24b6211a">
              <img src={InLink} alt="" style={{height: '8vh'}}/>
              </a>
            </div>
            </div>
            </div>
            <footer style={{textAlign: 'center', color: 'white'}}> © Stampp Tech Solutions | Powered by Mr Marcus Stampp</footer>
    </Router>
    </>
  )
}

export default App
