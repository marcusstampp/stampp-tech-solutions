import React, {useState} from 'react'
import {Button,Menu,MenuItem,} from '@mui/material'
import { Link } from 'react-router'
import MenuIcon from '@mui/icons-material/Menu'

export default function Nav() {

  const [open , setOpen] = useState(null)
  const isOpen = Boolean(open)
  const handleClick = (e) => {

    setOpen(e.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  function MyMenuIconButton() {
  return (
    <IconButton 
      onClick={handleClick} 
      size="large" // Controls the size of the *button area*
      edge="start" // Useful for placement in an App Bar
      color="inherit" // Inherits the color from the parent (e.g., AppBar)
      aria-label="menu"
      sx={{ mr: 2 }} 
    >
      <MenuIcon /> {/* The icon itself */}
    </IconButton>
  );
}


  return (
    <>
      <div style={{position: 'fixed'}}>

      <h2 style={{display: 'flex' ,marginLeft: '4vw', marginBottom: '10px',
      color: 'white'
      }}>Menu</h2>
      <Button variant='contained' 
      sx={{backgroundColor: 'steelblue', height: '50px', 
        width: '95px', marginLeft: '3vw', boxShadow: '5px 5px 5px black'}}
      id='nav'
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
        <MenuIcon fontSize="large" color="inherit" />
      </Button>
      </div>

       <Menu
        id="basic-menu"
        anchorEl={open} // This is the element the Menu will be positioned relative to (the Button)
        open={isOpen} // A boolean indicating if the Menu should be visible
        onClose={handleClose}
        
        
      >

        {/* 6. The actual Menu items */}
        <MenuItem to='/Home' component={Link} onClick={handleClose}>Home</MenuItem>
        <MenuItem to='/About' component={Link} onClick={handleClose}>About</MenuItem>
        <MenuItem to='/Contact' component={Link} onClick={handleClose}>Contact</MenuItem>
        
      </Menu>
    </>
  )
}
