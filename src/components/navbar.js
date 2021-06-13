import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import logo from '../assets/images/small-logo-t.png'
import '../styles/style.css'
function Navbar1(){
  return(
    <Navbar expand="lg" className="navbar">
  <Navbar.Brand href="#">
  <img src={logo} height="30px" style={{paddingRight:'10px',marginTop:'-5px'}}/>
    Gitstalker
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Download</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default Navbar1
