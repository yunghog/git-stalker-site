import React, { useState, useEffect  } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../assets/images/small-logo-t.png'
import '../styles/style.css'

function Navbar1(){
  const [isTop,setIsTop] = useState(true)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      let pos = window.scrollY;
      if(pos>150)
        setIsTop(false)
      else
       setIsTop(true)
    })
  })
  return(
    <Navbar variant={isTop? "light":"dark"} bg={isTop? "transparent":"dark"}  expand="md" className={isTop? "navbar":"navbar sticky"}>
  <Navbar.Brand href="#">
  <img src={logo} height="30px" style={{paddingRight:'10px',marginTop:'-5px'}} alt="logo gitstalker"/>
    Gitstalker
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#downloads">Download</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default Navbar1
