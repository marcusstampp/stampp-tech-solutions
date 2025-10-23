import React from 'react'
import Logo from '../../assets/StamppTech.jpeg'
import FB from '../../assets/facebook.png'
import InLink from '../../assets/Linkedin.png'
import '../pages/Home.css'
import { Box, Button, Container } from '@mui/material'

export default function () {
  return (
    <>

     <h2 style={{ 
      marginTop: '0px', paddingTop: '0px', className: 'headline',
       textAlign: 'center', 
      fontSize: '30px',
      textShadow: '5px 10px 15px teal',
      color: 'white'
    }}
    >Stampp Tech Solutions</h2>


    <div style={{height: '35vh', display: 'flex',
      justifyContent: 'center', alignContent: 'center'
    }}>

    <img src={Logo} className='Logo'/>
    </div>

    <Container>

    <Box sx={{border: '2px solid steelblue', marginTop: '5vh', 
      backgroundColor: 'whitesmoke', borderRadius: '4px'
    }}>

    <Container>
    <p>

    <p>
      Welcome If you're here, you're looking beyond the standard corporate buzzwords. You want to know why we exist, what we stand for, and what future we are actively working to build.
    </p>

At Stampp Tech Solutions, our mission is not just a statement, it's the operating system for every decision, product, and interaction we have.

Our purpose is simple yet profound, to empower small businesses with accessible, sustainable technology or cultivate a global community dedicated to ethical fashion.

    <p>
      We are driven by the conviction that technology should be a tool for liberation, not complication, and that quality should never be compromised for profit
    </p>

    <h2>Our Vision in The Future We Are Building</h2>

Where is our mission taking us?

We envision a world where every entrepreneur has the digital tools to compete with large corporations or consumers feel confident that their purchases align with their values. This is the future we show up every day to build, one successful client and one revolutionary product at a time.


    </p>
    </Container>

    </Box>
    <Button variant='contained' href='https://stampptechsolutions.setmore.com/?utm_source=qr-code&utm_medium=more-share-bp'
    target='_blank'
    sx={{display: 'flex', marginTop: '25px', 
      backgroundColor: 'steelblue', boxShadow: '5px 5px 5px black',
      width: '17vw', textAlign: 'center'
    }}
    >Click to book a consultation with us here</Button>
    </Container>
    </>

  )
}
